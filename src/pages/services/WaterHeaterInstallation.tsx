import { Layout } from "@/components/layout/Layout";
import { ServicePage } from "@/components/ServicePage";

const WaterHeaterInstallation = () => (
  <Layout>
    <ServicePage
      title="Water Heater Installation"
      description="Professional installation and replacement of tank and tankless water heaters—sized and vented correctly for your home."
      bullets={[
        "Tank & tankless options",
        "Code‑compliant installs",
        "Old unit removal included",
        "Manufacturer warranties honored",
      ]}
      faqs={[
        { q: "How long does installation take?", a: "Most installs are completed the same day in 2–4 hours." },
        { q: "Should I go tankless?", a: "We’ll assess your usage and recommend the most efficient, cost‑effective option." },
      ]}
      path="/services/water-heater-installation"
    />
  </Layout>
);

export default WaterHeaterInstallation;
