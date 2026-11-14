import { company } from "@/lib/content";

export const campaignPath = "/fit-out-dubai/";

export function campaignWhatsAppHref(projectType?: string) {
  const message = [
    "Hello Halo Works, I’d like to request a quote for a fit-out, renovation or joinery project in Dubai.",
    "",
    `Project type: ${projectType || ""}`,
    "Location: ",
    "What I’m planning: ",
    "Indicative budget: ",
    "Target timing: ",
  ].join("\n");
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
