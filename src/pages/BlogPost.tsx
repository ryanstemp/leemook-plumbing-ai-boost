import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import blogHero from "@/assets/blog-hero.jpg";

const content: Record<string, { title: string; body: string; date: string }> = {
  "plumbing-headaches": {
    title: "Is your home’s plumbing causing you headaches?",
    date: "2025-06-01",
    body: "Early signs include slow drains, gurgling sounds, and water spots. Regular inspections can prevent bigger issues.",
  },
  "unexpected-emergencies": {
    title: "Unexpected plumbing emergencies?",
    date: "2025-05-10",
    body: "Shut off the water, avoid electrical hazards, and call us. We offer same‑day help in most cases.",
  },
  "high-water-pressure-issues": {
    title: "High water pressure issues",
    date: "2025-05-01",
    body: "Excess pressure stresses pipes and fixtures. A pressure reducing valve can protect your system.",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? content[slug] : undefined;

  return (
    <Layout>
      <SEO
        title={(post ? `${post.title} – Leemook Plumbing` : 'Blog Post – Leemook Plumbing')}
        description={post ? post.body : 'Leemook Plumbing blog post'}
        canonical={typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `/blog/${slug}`}
      />
      <section className="container mx-auto py-12 max-w-3xl">
        {post ? (
          <>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">{post.title}</h1>
            <div className="text-xs text-muted-foreground mb-6">{new Date(post.date).toLocaleDateString()}</div>
            <img
              src={blogHero}
              alt={`${post.title} – Leemook Plumbing blog`}
              className="w-full rounded-lg border mb-6"
              loading="eager"
              width={1600}
              height={896}
            />
            <p className="text-lg text-muted-foreground">{post.body}</p>
          </>
        ) : (
          <p>Post not found.</p>
        )}
      </section>
    </Layout>
  );
};

export default BlogPost;
