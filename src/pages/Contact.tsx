import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => (
  <Layout>
    <SEO
      title="Contact – Leemook Plumbing"
      description="Call +1 678‑831‑6399 or request a free estimate. Same‑day service available across Atlanta."
      canonical={typeof window !== 'undefined' ? `${window.location.origin}/contact` : '/contact'}
    />
    <section className="container mx-auto py-12 grid gap-8 md:grid-cols-2 items-start">
      <div>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">Get a Free Estimate</h1>
        <p className="text-lg text-muted-foreground mb-6">Tell us what you need—our team will respond quickly.</p>
        <ContactForm />
      </div>
      <div className="rounded-lg overflow-hidden border">
        <iframe
          title="Service area map"
          className="w-full h-[320px] md:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d132981.7726170466!2d-84.4838654!3d33.7676331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5038f9af48e25%3A0x8f3cc6e0d70c0!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1710000000000"
          allowFullScreen
        />
        <div className="p-4 text-sm text-muted-foreground">Atlanta and surrounding counties</div>
      </div>
    </section>
  </Layout>
);

export default Contact;
