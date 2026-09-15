import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles from Pakistan HMTC on heavy machinery training, operator safety, and career development.",
  openGraph: {
    title: "Blog | Pakistan HMTC",
    description: "Read recent Pakistan HMTC articles on practical training, safety, and operator careers.",
    images: ["/images/workers.jpg"]
  }
};

export default function BlogPage() {
  return (
    <main id="content">
      <PageHero title="Blogs" crumb="Blog" image="/images/workers.jpg" alt="Pakistan HMTC team and trainees" />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Blog & Article</p>
            <h2 className="section-title">Read Our Recent Blogs</h2>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <img src={post.image} alt={post.alt} width={700} height={420} />
                <div className="body">
                  <time dateTime={post.date}>{post.displayDate}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
