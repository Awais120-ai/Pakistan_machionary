import Link from "next/link";

type PageHeroProps = {
  title: string;
  crumb: string;
  image: string;
  alt: string;
};

export default function PageHero({ title, crumb, image, alt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <img src={image} alt={alt} width={1600} height={700} />
      </div>
      <div className="container page-hero-content">
        <h1>{title}</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link> &gt; {crumb}
        </p>
      </div>
    </section>
  );
}
