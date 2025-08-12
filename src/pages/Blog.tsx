import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "plumbing-headaches",
    title: "Is your home’s plumbing causing you headaches?",
    date: "2025-06-01",
    excerpt: "How to spot early warning signs and prevent costly damage.",
  },
  {
    slug: "unexpected-emergencies",
    title: "Unexpected plumbing emergencies?",
    date: "2025-05-10",
    excerpt: "A quick guide to what to do before the pros arrive.",
  },
  {
    slug: "high-water-pressure-issues",
    title: "High water pressure issues",
    date: "2025-05-01",
    excerpt: "Why it matters and how a pressure regulator can help.",
  },
];

const Blog = () => (
  <Layout>
    <SEO
      title="Blog – Leemook Plumbing"
      description="Plumbing tips, maintenance advice, and service insights from Atlanta’s trusted plumbers."
      canonical={typeof window !== 'undefined' ? `${window.location.origin}/blog` : '/blog'}
    />
    <section className="container mx-auto py-12">
      <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.slug} className="h-full">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
              <Link className="text-primary" to={`/blog/${p.slug}`}>Read more →</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
