import { services, spaces, articles, publishedProjects } from "./site-content";
import { projectAreas } from "./project-visibility";
import { projectAreaPath, projectPath } from "./project-paths";
import { projectReferences } from "./project-references";
import { absoluteUrl } from "./seo";
export const pagePaths = [
  "/",
  "/about/",
  "/services/",
  "/services/landscaping/",
  "/process/",
  "/approvals/",
  "/cost-guide/",
  "/gallery/",
  "/blog/",
  "/faqs/",
  "/contact/",
  "/book-online/",
  "/privacy/",
  ...services.map((s) => `/services/${s.slug}/`),
  ...spaces.map((s) => `/gallery/${s.slug}/`),
];
export const blogPaths = articles.map((a) => `/blog/${a.slug}/`);
export const projectPaths = [
  "/projects/",
  ...publishedProjects.map(({ slug }) => projectPath(slug)),
  ...projectReferences.map(({ slug }) => projectPath(slug)),
  ...projectAreas.map((area) => projectAreaPath(area.slug)),
];
function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
export function urlset(paths: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${escapeXml(absoluteUrl(p))}</loc></url>`).join("\n")}\n</urlset>`;
}
export function sitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["pages-sitemap.xml", "blog-sitemap.xml", "projects-sitemap.xml"].map((p) => `  <sitemap><loc>${escapeXml(absoluteUrl(`/${p}`))}</loc></sitemap>`).join("\n")}\n</sitemapindex>`;
}
export const xmlHeaders = { "Content-Type": "application/xml; charset=utf-8" };
