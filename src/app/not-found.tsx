import PageHero from "@/components/page-hero";
export default function NotFound() {
  return (
    <PageHero
      label="404 / A small detour"
      title={
        <>
          Let’s find your
          <br />
          <em>way back.</em>
        </>
      }
      description="This page may have moved. There are still plenty of spaces to explore."
      image="living-natural"
      alt="A welcoming living room with warm natural finishes"
      path="/404/"
      crumb="Page not found"
      action={{ href: "/", label: "Return home" }}
    />
  );
}
