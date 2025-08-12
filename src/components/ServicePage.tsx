import { ReactNode } from "react";
import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ { q: string; a: string }

interface ServicePageProps {
  title: string;
  description: string;
  bullets?: string[];
  faqs?: FAQ[];
  path?: string;
}

export const ServicePage = ({ title, description, bullets = [], faqs = [], path }: ServicePageProps) => {
  const canonical = path ? (typeof window !== 'undefined' ? `${window.location.origin}${path}` : path) : undefined;
  return (
    <>
      <SEO title={`${title} – Leemook Plumbing`} description={description} canonical={canonical} />
      <section className="container mx-auto py-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
          {bullets.length > 0 && (
            <ul className="grid gap-2 mb-8 list-disc list-inside">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          {faqs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
