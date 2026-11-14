import { notFound } from "next/navigation";
import { services } from "@/lib/site-content";
import { serviceScenes } from "@/lib/service-scenes";
import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/service-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service
    ? pageMetadata(
        service.name + " in Dubai",
        service.intro,
        `/services/${slug}/`,
        serviceScenes[slug][0].image,
      )
    : {};
}

export default async function Service({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <ServiceDetail service={service} scenes={serviceScenes[slug]} />;
}
