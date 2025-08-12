import { PropsWithChildren, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const business = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Leemook Plumbing',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
  telephone: '+1-678-831-6399',
  image: '/images/leemook-logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    addressCountry: 'US'
  },
  openingHours: [
    'Mo-Fr 07:00-19:00',
    'Sa 07:00-17:00'
  ],
  areaServed: 'Atlanta, GA and surrounding counties',
};

export const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(business);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
