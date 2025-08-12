import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const About = () => (
  <Layout>
    <SEO
      title="About – Leemook Plumbing"
      description="Leemook Plumbing treats you like family—honest pricing, dependable work, and licensed pros serving Atlanta."
      canonical={typeof window !== 'undefined' ? `${window.location.origin}/about` : '/about'}
    />
    <section className="container mx-auto py-12 max-w-3xl">
      <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">We treat you like family</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Since day one, our mission has been simple: do right by every customer. That means honest, upfront pricing, clear communication, and workmanship we’d be proud to deliver in our own homes.
      </p>
      <p className="text-muted-foreground">
        We’re local, licensed, and insured—serving Atlanta and surrounding counties with same‑day availability for many services. From emergency repairs to full system replacements, we bring reliable solutions and a respectful, tidy experience.
      </p>
    </section>
  </Layout>
);

export default About;
