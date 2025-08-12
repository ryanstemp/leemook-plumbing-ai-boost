import heroImage from "@/assets/hero-plumber.jpg";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "They were responsive and accommodating, scheduling an appointment…",
  },
  {
    quote: "He provided quotes as needed and provided prompt efficient service. Warranty included.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Leemook Plumbing – Honest, Reliable Plumbers in Atlanta"
        description="Emergency repairs, leak detection, water heaters, and full system replacements. Honest pricing, licensed & insured, same‑day service. Call +1 678‑831‑6399."
        canonical={typeof window !== 'undefined' ? `${window.location.origin}/` : '/'}
      />

      <section className="container mx-auto grid gap-8 items-center py-10 md:py-16 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-4">Honest, Reliable Plumbers in Atlanta</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Same‑day help for emergencies, precise leak detection, and expert installations—backed by integrity and clear, upfront pricing.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button asChild variant="hero" size="lg">
              <a href="tel:+16788316399">Call Now: +1 678‑831‑6399</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Professional plumber working under a modern kitchen sink"
            className="w-full rounded-lg border"
            loading="eager"
            width={1600}
            height={896}
          />
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">How we help</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { title: "Emergency Repairs", to: "/services/emergency-repairs" },
            { title: "Leak Detection", to: "/services/leak-detection" },
            { title: "Water Heaters", to: "/services/water-heater-installation" },
            { title: "System Replacements", to: "/services/full-system-replacements" },
          ].map((s) => (
            <Link key={s.to} to={s.to} className="group">
              <Card className="transition-transform group-hover:-translate-y-1">
                <CardContent className="py-6 text-center font-medium">{s.title}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">What customers say</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="py-6 text-muted-foreground">“{t.quote}”</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">Call now for same‑day service or to schedule a free estimate</h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Button asChild variant="hero" size="lg">
            <a href="tel:+16788316399">+1 678‑831‑6399</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
