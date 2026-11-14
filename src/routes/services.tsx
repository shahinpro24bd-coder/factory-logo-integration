import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "MEP & Electromechanical Services | QMEP Dubai" },
      { name: "description", content: "HVAC, electrical, plumbing, MEP maintenance, AMC and VRF/VRV services in Dubai by QMEP Electromechanical LLC." },
      { property: "og:title", content: "Our MEP & Electromechanical Services" },
      { property: "og:description", content: "Solutions for your property's essential systems." },
    ],
  }),
  component: Services,
});

function Services() {
  return <ServicesPage />;
}
