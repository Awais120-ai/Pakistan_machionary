import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, site } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Pakistan HMTC`,
      description: post.description,
      images: [post.image]
    }
  };
}

function PostCta({ slug }: { slug: string }) {
  if (slug === "practical-heavy-machinery-training") {
    return (
      <p>
        If you are ready to start, call <a href={site.phones[0].href}>{site.phones[0].display}</a> or visit the{" "}
        <Link href="/our-trainings">trainings page</Link>.
      </p>
    );
  }
  if (slug === "operator-safety-standards") {
    return (
      <p>
        Ask about a course by calling <a href={site.phones[1].href}>{site.phones[1].display}</a> or emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    );
  }
  return (
    <p>
      The most useful first step is a conversation about your goals. Call{" "}
      <a href={site.phones[2].href}>{site.phones[2].display}</a> or send a message through the{" "}
      <Link href="/contact-us">contact page</Link>.
    </p>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const [first, ...rest] = post.paragraphs;
  const bullets = "bullets" in post ? post.bullets : undefined;

  return (
    <main id="content" className="section">
      <article className="article">
        <p className="section-kicker">{post.displayDate}</p>
        <h1>{post.heading}</h1>
        <img src={post.image} alt={post.alt} width={1200} height={640} />
        <p>{first}</p>
        {bullets ? (
          <ul>
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {rest.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <PostCta slug={slug} />
      </article>
    </main>
  );
}
