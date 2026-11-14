from pathlib import Path
import sys
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path(sys.argv[1] if len(sys.argv)>1 else 'out'); issues=[];count=0
lead_images={}
service_sequence = [
 'page-title', 'case-studies', 'trusted-partners', 'service-credentials', 'scope', 'commitments',
 'delivery', 'budget', 'brief', 'service-faq', 'service-guides', 'service-related', 'enquire',
]
class Audit(HTMLParser):
 def __init__(self,path):
  super().__init__();self.path=path;self.headings=0;self.title=False
  parts=path.relative_to(root).parts
  self.collection=parts[0] if len(parts)==3 and parts[0] in ('services','blog') and parts[-1]=='index.html' else None
  self.is_service=self.collection=='services'
  self.service_sections=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if self.collection and tag=='meta' and a.get('property')=='og:image' and a.get('content'):
   image=urlsplit(a['content']).path
   owner=lead_images.setdefault((self.collection,image),self.path)
   if owner!=self.path:issues.append(f'{self.path}: lead image {image} also used on {owner}')
  if self.is_service:
   marker=a.get('id')
   if tag in ('section','aside') and not marker:
    marker=next((name for name in a.get('class','').split() if name in service_sequence),None)
   if marker in service_sequence:self.service_sections.append(marker)
  if tag=='h1':self.headings+=1
  if tag=='title':self.title=True
  if tag=='img' and 'alt' not in a:issues.append(f'{self.path}: missing image alt')
  assets=[a.get(attr,'') for attr in ('href','src')]
  if a.get('srcset'):
   assets += [item.strip().split()[0] for item in a['srcset'].split(',') if item.strip()]
  for url in assets:
   u=urlsplit(url)
   if not url.startswith('/') or url.startswith('//'):continue
   p=root/unquote(u.path).lstrip('/')
   if p.is_dir():p=p/'index.html'
   if not p.exists():issues.append(f'{self.path}: broken {url}')
for file in root.rglob('*.html'):
 a=Audit(file);a.feed(file.read_text());count+=1
 if a.headings!=1:issues.append(f'{file}: {a.headings} h1 elements')
 if not a.title:issues.append(f'{file}: no title')
 if a.is_service and a.service_sections!=service_sequence:
  issues.append(f'{file}: unexpected service section order {a.service_sections}')
assert not issues,'\n'.join(issues)
print(f'PASS: {count} exported HTML files; internal links, local assets, image alt text, titles, single h1, service section order and distinct service and blog lead images verified.')
