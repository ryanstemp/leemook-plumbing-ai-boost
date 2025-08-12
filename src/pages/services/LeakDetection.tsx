import { Layout } from "@/components/layout/Layout";
import { ServicePage } from "@/components/ServicePage";
import leakImg from "@/assets/leak-detection.jpg";

const LeakDetection = () => (
  <Layout>
    <ServicePage
      title="Leak Detection"
      description="We pinpoint hidden leaks using non‑invasive technology, preventing damage and saving on water bills—then fix it right away."
      bullets={[
        "Acoustic & thermal detection",
        "Slab, wall, and ceiling leaks",
        "Targeted repairs to minimize disruption",
      ]}
      faqs={[
        { q: "How do I know if I have a hidden leak?", a: "Higher water bills, damp spots, running meter, or musty smells are common signs." },
        { q: "Will you repair the leak the same day?", a: "In most cases, yes—our trucks are stocked for on‑the‑spot fixes." },
      ]}
      imageSrc={leakImg}
      imageAlt="Precise leak detection using thermal and acoustic tools in Atlanta"
      path="/services/leak-detection"
    />
  </Layout>
);

export default LeakDetection;
