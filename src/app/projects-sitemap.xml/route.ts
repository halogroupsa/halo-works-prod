import { projectPaths, urlset, xmlHeaders } from "@/lib/sitemaps";

export const dynamic = "force-static";

export function GET() {
  return new Response(urlset(projectPaths), { headers: xmlHeaders });
}
