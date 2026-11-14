import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | QMEP Electromechanical LLC" },
      { name: "description", content: "Learn about QMEP Electromechanical LLC, our mission, vision and core values in MEP services in Dubai." },
      { property: "og:title", content: "About QMEP Electromechanical LLC" },
      { property: "og:description", content: "Supporting better-performing buildings through MEP solutions." },
    ],
  }),
  component: About,
});

function About() {
  return <AboutPage />;
}
