import { siteUrl } from "@/lib/seo";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
const productionHost = new URL(siteUrl).hostname.replace(/^www\./, "");

if (gtmId && !/^GTM-[A-Z0-9]+$/.test(gtmId)) {
  throw new Error(`NEXT_PUBLIC_GTM_ID is not a GTM container ID: ${gtmId}`);
}

/**
 * The site is a static export, so the same files are served on the production
 * domain and on any preview host. This decides per visit, from the hostname:
 * the production domain loads Google Tag Manager and stays indexable, every
 * other host gets no tag and a robots noindex.
 */
const gate = `(function(){
var host=location.hostname.replace(/^www\\./,'');
if(host!==${JSON.stringify(productionHost)}){
var m=document.createElement('meta');m.name='robots';m.content='noindex, nofollow';
document.head.appendChild(m);return;}
var id=${JSON.stringify(gtmId)};if(!id)return;
window.dataLayer=window.dataLayer||[];
window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var s=document.createElement('script');s.async=true;
s.src='https://www.googletagmanager.com/gtm.js?id='+id;
document.head.appendChild(s);
})();`;

export default function ProductionGate() {
  return <script dangerouslySetInnerHTML={{ __html: gate }} />;
}
