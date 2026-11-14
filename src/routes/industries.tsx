import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/site/pages/IndustriesPage";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | QMEP Electromechanical LLC" },
      { name: "description", content: "MEP solutions for residential, commercial, fit-out, facility management and main contractor projects in Dubai." },
      { property: "og:title", content: "Industries We Serve | QMEP" },
      { property: "og:description", content: "MEP solutions for different property types." },
    ],
  }),
  component: Industries,
});

function Industries() {
  return <IndustriesPage />;
}
