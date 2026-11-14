"""Check the exported site, sitemap partition, canonical coverage and draft exclusions."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import json, xml.etree.ElementTree as ET
import sys
root=Path(sys.argv[1] if len(sys.argv)>1 else 'out'); issues=[]; ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.meta={};self.canon=[];self.title='';self.in_title=False;self.in_ld=False;self.ld='';self.schemas=[];self.text=[];self.h1=0;self.project_browse=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='title':self.in_title=True
  if tag=='h1':self.h1+=1
  if tag=='section' and 'project-browse' in a.get('class','').split():self.project_browse=True
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='script' and a.get('type')=='application/ld+json':self.in_ld=True;self.ld=''
 def handle_data(self,data):
  if self.in_title:self.title+=data
  if self.in_ld:self.ld+=data
  else:self.text.append(data)
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
  if tag=='script' and self.in_ld:self.schemas.append(json.loads(self.ld));self.in_ld=False
index=ET.parse(root/'sitemap.xml').getroot()
assert index.tag=='{'+ns['s']+'}sitemapindex'
children=[x.text for x in index.findall('s:sitemap/s:loc',ns)]
assert len(children)==3 and {urlsplit(x).path for x in children}=={'/pages-sitemap.xml','/blog-sitemap.xml','/projects-sitemap.xml'}
base=children[0].rsplit('/',1)[0];urls=[];groups={}
for child in children:
 assert child.startswith(base+'/')
 tree=ET.parse(root/urlsplit(child).path.lstrip('/')).getroot()
 assert tree.tag=='{'+ns['s']+'}urlset'
 locs=[x.text for x in tree.findall('s:url/s:loc',ns)];assert len(locs)==len(set(locs))
 assert len(locs)<50000
 groups[urlsplit(child).path]=locs;urls+=locs
assert len(urls)==len(set(urls)), 'Sitemaps overlap'
def is_article(url):
 path=urlsplit(url).path
 return path.startswith('/blog/') and path!='/blog/'
def is_project(url):
 path=urlsplit(url).path
 return path=='/projects/' or path.startswith('/project/')
assert all(is_article(u) for u in groups['/blog-sitemap.xml'])
assert base+'/projects/' in groups['/projects-sitemap.xml']
assert not any(is_article(u) or is_project(u) for u in groups['/pages-sitemap.xml'])
titles=set();descriptions=set();pages={}
for file in root.rglob('index.html'):
 path='/'+str(file.parent.relative_to(root)).strip('.')
 if path!='/':path+='/'
 p=Page();p.feed(file.read_text());pages[path]=p
 if path.startswith('/_not-found') or path=='/404/':continue
 url=base+path
 def check(ok,msg):
  if not ok:issues.append(f'{path}: {msg}')
 check(p.canon==[url],'canonical mismatch')
 check(bool(p.title) and p.title not in titles,'missing or duplicate title');titles.add(p.title)
 desc=p.meta.get('description','');check(40<=len(desc)<=300,'description missing or excessive')
 # Draft templates intentionally share a pending-evidence description.
 if 'noindex' not in p.meta.get('robots',''):
  check(desc not in descriptions,'duplicate indexable description');descriptions.add(desc)
  check(url in urls,'indexable page missing from sitemap')
  if p.project_browse or is_project(url):
   check(url in groups['/projects-sitemap.xml'],'project or community missing from project sitemap')
 else:check(url not in urls,'noindex page present in sitemap')
 check(p.meta.get('og:url')==url,'Open Graph URL mismatch')
 check(p.meta.get('og:description')==desc,'Open Graph description mismatch')
 check(p.meta.get('twitter:card')=='summary_large_image','Twitter metadata missing')
 check(p.h1==1,'expected one H1')
 types={s.get('@type') for s in p.schemas}
 check('Organization' in types and 'WebSite' in types,'identity schema missing')
 if path.startswith('/services/') and path!='/services/':check('Service' in types,'service schema missing')
 if path.startswith('/blog/') and path!='/blog/':check('Article' in types,'article schema missing')
 if path!='/':check('BreadcrumbList' in types,'breadcrumb schema missing')
 for s in p.schemas:
  if s.get('@type')=='BreadcrumbList':check(s['itemListElement'][-1]['item']==url,'breadcrumb mismatch')
  if s.get('@type')=='FAQPage':
   for q in s['mainEntity']:check(q['name'] in p.text and q['acceptedAnswer']['text'] in p.text,'FAQ schema differs from visible content')
 check('AggregateRating' not in types and 'Review' not in types,'unapproved review markup')
 if not (path.startswith('/services/') and path!='/services/'):
  check('Our Trusted Partners' not in ' '.join(p.text),'partner section outside service pages')
 for prohibited in ['Timur G','Mansi shah','37+ years','Best Price Guarantee','No Outsourcing']:
  check(prohibited not in ' '.join(p.text),f'borrowed claim: {prohibited}')
for url in urls:
 assert urlsplit(url).path in pages, f'Missing sitemap destination {url}'
assert all(is_project(u) or pages[urlsplit(u).path].project_browse for u in groups['/projects-sitemap.xml'])
assert f'Sitemap: {base}/sitemap.xml' in (root/'robots.txt').read_text()
for path,p in pages.items():
 assert '_unpublished' not in path, f'Build-only project route exported: {path}'
 assert not path.startswith('/projects/') or path=='/projects/', f'Legacy project route exported: {path}'
 if path.startswith('/project/') and 'Case study layout preview' in ' '.join(p.text):
  assert 'noindex' in p.meta.get('robots',''), 'Draft projects must remain noindex until evidence approved'
assert not issues,'\n'.join(issues)
print(f'PASS: {len(pages)-2} website routes; {len(groups["/pages-sitemap.xml"])} page URLs + {len(groups["/blog-sitemap.xml"])} blog URLs + {len(groups["/projects-sitemap.xml"])} project URLs; canonical coverage, metadata, schemas and draft exclusions verified.')
