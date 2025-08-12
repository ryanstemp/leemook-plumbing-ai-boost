import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-card">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src="/images/leemook-logo.png" alt="Leemook Plumbing logo" width={36} height={36} loading="lazy" />
            <span className="font-semibold">Leemook Plumbing</span>
          </div>
          <p className="text-sm text-muted-foreground">
            We treat you like family. Honest pricing, dependable service, licensed & insured professionals.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="size-4" /> <a href="tel:+16788316399">+1 678-831-6399</a></li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> <a href="mailto:hello@leemookplumbing.com">hello@leemookplumbing.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="size-4" /> Atlanta, GA</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Follow</h3>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Leemook Plumbing. All rights reserved.</div>
    </footer>
  );
};
