import { enquiryServices } from "@/lib/site-content";
import ProjectBriefForm from "./project-brief-form";

export default function ContactForm({
  initialService = "",
  consultation,
}: {
  initialService?: string;
  consultation?: boolean;
}) {
  return (
    <ProjectBriefForm
      initialService={initialService}
      options={enquiryServices}
      consultation={consultation}
    />
  );
}
