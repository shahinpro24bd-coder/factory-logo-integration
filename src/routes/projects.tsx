import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/site/pages/ProjectsPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | QMEP Electromechanical LLC" },
      { name: "description", content: "Explore HVAC, electrical, plumbing and MEP maintenance work by QMEP Electromechanical LLC in Dubai." },
      { property: "og:title", content: "Our Projects | QMEP Electromechanical" },
      { property: "og:description", content: "Real work. Practical solutions." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return <ProjectsPage />;
}
