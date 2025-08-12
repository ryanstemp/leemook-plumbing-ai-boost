import { Layout } from "@/components/layout/Layout";
import { ServicePage } from "@/components/ServicePage";
import emergencyImg from "@/assets/emergency-repairs.jpg";

const EmergencyRepairs = () => (
  <Layout>
    <ServicePage
      title="Emergency Plumbing Repairs"
      description="Burst pipes, overflowing toilets, or sudden leaks—our licensed pros arrive fast with honest pricing and dependable solutions."
      bullets={[
        "Rapid response across Atlanta",
        "Up‑front, honest pricing",
        "Fully licensed & insured",
        "Clean, respectful service",
      ]}
      faqs={[
        { q: "Do you offer same‑day service?", a: "Yes—most emergencies are handled the same day, often within hours." },
        { q: "Is there an emergency fee?", a: "We provide transparent pricing upfront before work begins." },
      ]}
      imageSrc={emergencyImg}
      imageAlt="Emergency plumbing repairs in Atlanta — burst pipe fixed by Leemook Plumbing"
      path="/services/emergency-repairs"
    />
  </Layout>
);

export default EmergencyRepairs;
