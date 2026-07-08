import type { Metadata } from "next";
import { ContactPageContent } from "@/features/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the MindScope AI team.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
