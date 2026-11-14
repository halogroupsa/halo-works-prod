import { projects, publishedProjects, type Project } from "./site-content";
import {
  projectCommunities,
  type ProjectCommunity,
} from "./project-communities";

// This build flag exposes the draft layouts in the local review build.
export const showProjectPreviews = process.env.HALO_PROJECT_PREVIEWS === "1";
export const visibleProjects = showProjectPreviews
  ? projects
  : publishedProjects;

type ProjectArea = {
  slug: string;
  name: string;
  projects: Project[];
  guide?: ProjectCommunity;
};
const areas = new Map<string, ProjectArea>(
  projectCommunities.map((guide) => [
    guide.slug,
    { slug: guide.slug, name: guide.name, guide, projects: [] },
  ]),
);
for (const project of publishedProjects) {
  const area = project.area;
  if (!area?.name.trim() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(area.slug))
    continue;
  const current = areas.get(area.slug);
  if (current) current.projects.push(project);
  else areas.set(area.slug, { ...area, projects: [project] });
}
export const projectAreas = [...areas.values()].sort((a, b) =>
  a.name.localeCompare(b.name, "en"),
);
