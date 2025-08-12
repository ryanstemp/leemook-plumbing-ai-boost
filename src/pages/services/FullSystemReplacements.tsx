import { Layout } from "@/components/layout/Layout";
import { ServicePage } from "@/components/ServicePage";
import replacementsImg from "@/assets/full-system-replacements.jpg";

const FullSystemReplacements = () => (
  <Layout>
    <ServicePage
      title="Full System Replacements"
      description="When it’s time to upgrade aging pipes or fixtures, we design and install reliable, efficient plumbing systems for long‑term peace of mind."
      bullets={[
        "Whole‑home repipes",
        "Fixture & line upgrades",
        "Code & permit handling",
        "Upfront proposals and timelines",
      ]}
      faqs={[
        { q: "Do you handle permits?", a: "Yes, we manage permits and inspections where required." },
        { q: "Can I replace sections over time?", a: "We can phase projects to fit budget and priorities." },
      ]}
      imageSrc={replacementsImg}
      imageAlt="Full plumbing system replacements and repiping in Atlanta"
      path="/services/full-system-replacements"
    />
  </Layout>
);

export default FullSystemReplacements;
