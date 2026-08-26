import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── placeholder blog data ─────────────────────────────────────────── */

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  isoDate: string;
  author: string;
  content: string;
}

const posts: Record<string, BlogPost> = {
  "why-auto-detailers-need-seo": {
    slug: "why-auto-detailers-need-seo",
    title: "Why Auto Detailers Need SEO in 2026",
    description:
      "Most auto detailers rely on word-of-mouth and Instagram. But the ones dominating their local market are the ones showing up on Google. Here's why SEO is the single best investment for your detailing business.",
    category: "Local SEO",
    readTime: "6 min read",
    date: "Aug 20, 2026",
    isoDate: "2026-08-20",
    author: "Sydney Digits Team",
    content: `
      <h2>The Shift From Word-of-Mouth to Google</h2>
      <p>Five years ago, a great detail job and a few referrals were enough to keep your bays full. That's no longer the case. Today, 97% of consumers search online for local services — and if your detailing business doesn't show up, your competitors will take that customer.</p>

      <h2>What Local SEO Actually Means for Detailers</h2>
      <p>Local SEO is the process of optimising your online presence so you appear in Google's "Map Pack" and local search results when someone searches for terms like "auto detailer near me" or "car detailing Sydney." It's not about ranking globally — it's about dominating your local area.</p>

      <h3>Google Business Profile Optimisation</h3>
      <p>Your Google Business Profile is the single most important asset in local SEO. A fully optimised profile with regular photos, reviews, and accurate business information can increase your visibility by up to 70% in local searches.</p>

      <h3>Reviews Drive Everything</h3>
      <p>Google uses review quantity, quality, and recency as ranking factors. Businesses with more positive reviews rank higher and convert more searchers into customers. Our NFC Google Review Plates make it effortless for your happy customers to leave 5-star reviews on the spot.</p>

      <h2>The ROI of SEO vs Social Media</h2>
      <p>While Instagram is great for showcasing your work, it has a fundamental limitation: people have to already know about you. SEO captures demand — people actively searching for a detailer right now. The leads are higher quality, higher intent, and convert at 3-5x the rate of social media.</p>

      <h2>Getting Started</h2>
      <p>The best time to invest in SEO was a year ago. The second best time is today. At Sydney Digits, we specialise in local SEO strategies built specifically for auto detailers and automotive businesses in Sydney. We know the industry, we know the market, and we know how to get you ranking.</p>
    `,
  },
  "getting-more-leads-in-sydney": {
    slug: "getting-more-leads-in-sydney",
    title: "How to Get More Leads as a Tradie in Sydney",
    description:
      "Sydney is one of the most competitive markets for local trades. From Google Ads to NFC review plates, here are the proven strategies that top tradies use to fill their calendars every week.",
    category: "Lead Generation",
    readTime: "8 min read",
    date: "Aug 15, 2026",
    isoDate: "2026-08-15",
    author: "Sydney Digits Team",
    content: `
      <h2>Why Most Tradies Struggle With Leads</h2>
      <p>The biggest mistake tradies make is relying on a single lead source — usually word-of-mouth or a listing on a directory site. When that source dries up, so does the work. The key to consistent leads is building multiple channels that work together.</p>

      <h2>Channel 1: Google Ads for Immediate Results</h2>
      <p>Google Ads puts your business at the top of search results instantly. When someone searches "plumber near me" or "emergency electrician Sydney," your ad appears first. We've helped tradies generate leads for as little as $15-25 per qualified enquiry with well-optimised campaigns.</p>

      <h3>The Key to Profitable Ads</h3>
      <p>Most tradies waste money on Google Ads because they target too broadly or send traffic to a generic homepage. The fix: hyper-local targeting, specific service keywords, and dedicated landing pages that convert visitors into calls.</p>

      <h2>Channel 2: Local SEO for Long-Term Growth</h2>
      <p>While ads give you immediate results, local SEO builds a compounding asset. Once you rank in the top 3 for your core services, you get free, high-intent leads every single day without paying per click.</p>

      <h2>Channel 3: Review Generation</h2>
      <p>Reviews are the digital version of word-of-mouth. 88% of consumers trust online reviews as much as personal recommendations. Our NFC Review Plates make collecting reviews effortless — a simple tap from your customer's phone and they're leaving a 5-star review in seconds.</p>

      <h2>Putting It All Together</h2>
      <p>The tradies who are crushing it in Sydney aren't using just one strategy — they're combining Google Ads for immediate flow, local SEO for organic growth, and review generation for social proof. That's exactly what we build at Sydney Digits.</p>
    `,
  },
  "google-ads-vs-local-seo": {
    slug: "google-ads-vs-local-seo",
    title: "Google Ads vs Local SEO: Which Is Better for Local Trades?",
    description:
      "Should you invest in Google Ads for instant leads or build long-term organic visibility with local SEO? The answer depends on where your business is right now. We break down both strategies.",
    category: "Strategy",
    readTime: "7 min read",
    date: "Aug 10, 2026",
    isoDate: "2026-08-10",
    author: "Sydney Digits Team",
    content: `
      <h2>The Short Answer</h2>
      <p>Both. But the priority depends on your situation. If you need leads this week, start with Google Ads. If you want to build a sustainable lead engine that grows over time, invest in local SEO. The best strategy uses both in tandem.</p>

      <h2>Google Ads: The Sprint</h2>
      <p>Google Ads is pay-to-play. You bid on keywords like "ceramic coating Sydney" or "mobile car detailing near me," and your ad appears at the top of search results. The moment you turn on the campaign, you start getting visibility.</p>

      <h3>Pros of Google Ads</h3>
      <p>Instant visibility, predictable lead flow, precise targeting by location and service, and complete control over budget. You can scale up or down at any time and measure exactly what you're getting for every dollar spent.</p>

      <h3>Cons of Google Ads</h3>
      <p>The moment you stop paying, the leads stop. Costs can escalate in competitive markets. And without proper management, it's easy to waste budget on irrelevant clicks.</p>

      <h2>Local SEO: The Marathon</h2>
      <p>Local SEO is the process of optimising your online presence to rank in Google's organic and map results. It takes longer to see results (typically 3-6 months), but once you rank, the leads are essentially free.</p>

      <h3>Pros of Local SEO</h3>
      <p>Free ongoing traffic, higher trust factor (people trust organic results more than ads), compounding returns over time, and a competitive moat that's hard for competitors to replicate quickly.</p>

      <h3>Cons of Local SEO</h3>
      <p>It takes time. Algorithm changes can affect rankings. And it requires consistent effort — fresh content, review generation, and ongoing optimisation.</p>

      <h2>Our Recommendation</h2>
      <p>Start with Google Ads to generate immediate cash flow, then reinvest a portion into local SEO for long-term growth. Within 6-12 months, you'll have both channels working together — ads for predictable volume and SEO for high-margin organic leads. That's the Sydney Digits playbook.</p>
    `,
  },
};

/* ── static params for pre-rendering ───────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

/* ── dynamic metadata ──────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://sydneydigits.com.au/blog/${post.slug}`,
      publishedTime: post.isoDate,
      authors: [post.author],
      siteName: "Sydney Digits",
      locale: "en_AU",
    },
  };
}

/* ── page component ────────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  /* Article JSON-LD */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Sydney Digits",
      url: "https://sydneydigits.com.au",
    },
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sydneydigits.com.au/blog/${post.slug}`,
    },
  };

  return (
    <main className="flex-1">
      <Navbar />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <article className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background subtle grid */}
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

        <div className="relative max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-mist/50 hover:text-flare transition-colors duration-200 font-barlow uppercase tracking-widest mb-8"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <span className="text-flare text-sm font-bold uppercase tracking-widest font-barlow">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-barlow uppercase tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Byline */}
            <div className="flex items-center gap-4 mt-6 text-sm text-mist/50 font-inter">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-flare/20 border border-flare/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-flare font-barlow">
                    SD
                  </span>
                </div>
                <span>{post.author}</span>
              </div>
              <span className="text-mist/20">·</span>
              <span>{post.date}</span>
              <span className="text-mist/20">·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-flare/30 to-transparent mb-12" />

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              font-inter
              [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:font-barlow [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:font-barlow [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-mist/70 [&_p]:leading-relaxed [&_p]:mb-4
              [&_a]:text-flare [&_a]:underline [&_a]:hover:text-flare/80
              [&_strong]:text-white
              [&_ul]:text-mist/70 [&_ul]:space-y-2
              [&_li]:text-mist/70"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-steel/50 border border-white/5 rounded-2xl text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flare/40 to-transparent" />
            <h2 className="text-2xl font-black text-white font-barlow uppercase tracking-tight mb-3">
              Ready to Grow Your Business?
            </h2>
            <p className="text-mist/60 font-inter mb-6 max-w-md mx-auto">
              Get a free, no-obligation growth plan tailored to your trade
              business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+61493332306"
                className="bg-flare text-white text-base font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-[1.02] uppercase tracking-wider font-barlow"
              >
                Call 0493 332 306
              </a>
              <a
                href="mailto:amirsharabiani84@gmail.com"
                className="text-mist/60 hover:text-flare text-sm font-medium transition-colors duration-200 uppercase tracking-widest font-barlow"
              >
                Email Us →
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
