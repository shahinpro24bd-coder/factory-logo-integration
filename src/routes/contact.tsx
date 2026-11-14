import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Request a Quote | QMEP Electromechanical LLC" },
      { name: "description", content: "Contact QMEP Electromechanical LLC in Dubai for HVAC, electrical, plumbing and MEP maintenance quotations." },
      { property: "og:title", content: "Contact QMEP Electromechanical LLC" },
      { property: "og:description", content: "Let's discuss your MEP requirements." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return <ContactPage />;
}
