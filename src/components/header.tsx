import { serviceGroups, services } from "@/lib/site-content";
import { serviceScenes } from "@/lib/service-scenes";
import { projectAreaPath } from "@/lib/project-paths";
import { projectAreas } from "@/lib/project-visibility";
import HeaderNav from "./header-nav";

function serviceLink(slug: string) {
  const service = services.find((item) => item.slug === slug)!;
  return {
    name: service.name,
    category: service.category,
    href: "/services/" + slug + "/",
    image: serviceScenes[slug][0].image,
  };
}

export default function Header() {
  const groups = serviceGroups.map((group) => ({
    id: group.id,
    title: group.title,
    links: group.slugs.map(serviceLink),
  }));
  const featured = [
    "interior-fit-out",
    "villa-renovation",
    "office-fit-out",
    "kitchen-renovation",
    "interior-design",
    "bespoke-joinery",
    "quick-transformations",
    "project-delivery",
  ].map(serviceLink);

  const communities = projectAreas.map(({ name, slug }) => ({
    name,
    href: projectAreaPath(slug),
  }));

  return <HeaderNav groups={groups} featured={featured} communities={communities} />;
}
