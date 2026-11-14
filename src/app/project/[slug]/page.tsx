import { notFound } from "next/navigation";
import { projectReferences } from "@/lib/project-references";
import { visibleProjects } from "@/lib/project-visibility";
import CaseStudy, { caseStudyMetadata } from "./case-study";
import ReferenceDetail, { referenceMetadata } from "./reference-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = [...visibleProjects, ...projectReferences].map(({ slug }) => slug);
  if (new Set(slugs).size !== slugs.length) {
    throw new Error("Individual project URLs require unique slugs.");
  }
  return slugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const caseStudy = visibleProjects.find((project) => project.slug === slug);
  if (caseStudy) return caseStudyMetadata(caseStudy);

  const reference = projectReferences.find((project) => project.slug === slug);
  return reference ? referenceMetadata(reference) : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = visibleProjects.find((project) => project.slug === slug);
  if (caseStudy) return <CaseStudy project={caseStudy} />;

  const reference = projectReferences.find((project) => project.slug === slug);
  if (!reference) notFound();
  return <ReferenceDetail project={reference} />;
}
