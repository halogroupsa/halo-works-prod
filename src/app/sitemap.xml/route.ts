import { sitemapIndex, xmlHeaders } from "@/lib/sitemaps";
export const dynamic = "force-static";
export function GET() {
  return new Response(sitemapIndex(), { headers: xmlHeaders });
}
