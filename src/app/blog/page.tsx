import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Local SEO & Digital Marketing Tips for Sydney Trades",
  description:
    "Read expert articles on local SEO, Google Ads, and web design strategies for auto detailers, ceramic coaters, mechanics, and local trades in Sydney.",
  openGraph: {
    title: "Blog | Sydney Digits",
    description:
      "Expert insights on local SEO, Google Ads, and web design for Sydney trade businesses.",
    type: "website",
    url: "https://sydneydigits.com.au/blog",
  },
};

const blogPosts = [
  {
    slug: "why-auto-detailers-need-seo",
    title: "Why Auto Detailers Need SEO in 2026",
    excerpt:
      "Most auto detailers rely on word-of-mouth and Instagram. But the ones dominating their local market are the ones showing up on Google. Here's why SEO is the single best investment for your detailing business.",
    category: "Local SEO",
    readTime: "6 min read",
    date: "Aug 20, 2026",
  },
  {
    slug: "getting-more-leads-in-sydney",
    title: "How to Get More Leads as a Tradie in Sydney",
    excerpt:
      "Sydney is one of the most competitive markets for local trades. From Google Ads to NFC review plates, here are the proven strategies that top tradies use to fill their calendars every week.",
    category: "Lead Generation",
    readTime: "8 min read",
    date: "Aug 15, 2026",
  },
  {
    slug: "google-ads-vs-local-seo",
    title: "Google Ads vs Local SEO: Which Is Better for Local Trades?",
    excerpt:
      "Should you invest in Google Ads for instant leads or build long-term organic visibility with local SEO? The answer depends on where your business is right now. We break down both strategies.",
    category: "Strategy",
    readTime: "7 min read",
    date: "Aug 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Navbar />

      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-flare text-sm font-bold uppercase tracking-widest font-barlow">
              Insights & Guides
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 font-barlow uppercase tracking-tight">
              The Sydney Digits
              <br />
              <span className="text-flare">Blog</span>
            </h1>
            <p className="max-w-xl mx-auto text-mist/60 mt-4 font-inter">
              Actionable tips on local SEO, Google Ads, and web design — written
              for Sydney trade businesses that want to grow.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                id={`blog-card-${post.slug}`}
                className="group relative bg-steel/50 border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-flare/10 hover:border-flare/20 transition-all duration-500"
              >
                {/* Top glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-flare/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category & Read time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-flare uppercase tracking-widest font-barlow">
                    {post.category}
                  </span>
                  <span className="text-xs text-mist/40 font-inter">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white font-barlow uppercase tracking-wide mb-3 group-hover:text-flare transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-mist/60 text-sm leading-relaxed font-inter mb-6">
                  {post.excerpt}
                </p>

                {/* Date & Read more */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-mist/40 font-inter">
                    {post.date}
                  </span>
                  <span className="text-sm font-bold text-flare uppercase tracking-wider font-barlow flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
