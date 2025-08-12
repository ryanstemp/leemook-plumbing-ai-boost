import { Link, NavLink } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3 gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/leemook-logo.png"
              alt="Leemook Plumbing logo"
              width={40}
              height={40}
              loading="eager"
              className="rounded-md"
            />
            <span className="font-semibold tracking-tight">Leemook Plumbing</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline">
              <a href="tel:+16788316399" aria-label="Call Leemook Plumbing">
                <Phone className="mr-2" /> +1 678-831-6399
              </a>
            </Button>
            <Button asChild variant="hero">
              <Link to="/contact">Free Estimate</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((n) => (
                    <NavLink key={n.to} to={n.to} className="text-base">
                      {n.label}
                    </NavLink>
                  ))}
                  <a className="text-base" href="tel:+16788316399">
                    Call: +1 678-831-6399
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-secondary-foreground/80 text-xs">
        <div className="container mx-auto py-1 text-center md:text-left">
          Sunday: Closed; Mon–Fri: 7 AM–7 PM; Saturday: 7 AM–5 PM
        </div>
      </div>
    </header>
  );
};
