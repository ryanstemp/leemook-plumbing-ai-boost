import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success(`Thanks${name ? `, ${name}` : ""}! We'll be in touch shortly.`);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="name" placeholder="Your name" required aria-label="Your name" />
        <Input name="phone" placeholder="Phone number" required aria-label="Phone number" />
      </div>
      <Input type="email" name="email" placeholder="Email (optional)" aria-label="Email" />
      <Textarea name="message" placeholder="How can we help?" className="min-h-32" required aria-label="Message" />
      <div className="flex gap-3">
        <Button type="submit" variant="hero" disabled={loading}>{loading ? "Sending..." : "Request Free Estimate"}</Button>
        <Button asChild variant="outline">
          <a href="tel:+16788316399">Call Now</a>
        </Button>
      </div>
    </form>
  );
};
