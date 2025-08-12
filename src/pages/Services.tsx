import { Link } from "react-router-dom";
import { Wrench, Droplets, Flame, RefreshCcw } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  { to: "/services/emergency-repairs", title: "Emergency Repairs", icon: Wrench, desc: "Fast, dependable fixes when you need them most." },
  { to: "/services/leak-detection", title: "Leak Detection", icon: Droplets, desc: "Pinpoint leaks with non-invasive tech and repair right away." },
  { to: "/services/water-heater-installation", title: "Water Heater Installation", icon: Flame, desc: "Professional installs for tank and tankless systems." },
  { to: "/services/full-system-replacements", title: "Full System Replacements", icon: RefreshCcw, desc: "Upgrade aging systems for efficiency and reliability." },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Plumbing Services – Leemook Plumbing"
        description="Emergency repairs, leak detection, water heater installs, and full system replacements in Atlanta. Honest pricing. Same‑day service."
        canonical={typeof window !== 'undefined' ? `${window.location.origin}/services` : '/services'}
      />
      <section className="container mx-auto py-12">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-6">Plumbing Services</h1>
        <img
          src={servicesHero}
          alt="Plumbing services in Atlanta – Leemook Plumbing"
          className="w-full rounded-lg border mb-6"
          loading="eager"
          width={1600}
          height={896}
        />
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          From urgent emergencies to planned upgrades, our licensed and insured pros have you covered.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ to, title, icon: Icon, desc }) => (
            <Link key={to} to={to} className="group">
              <Card className="h-full transition-transform duration-300 will-change-transform group-hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="text-primary" /> {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
