import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import { site, trainings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Trainings",
  description:
    "Explore Pakistan HMTC training programs including grader, trailer, excavator, forklift, mobile crane, JCB, car driving, and loader courses.",
  openGraph: {
    title: "Our Trainings | Pakistan HMTC",
    description: "Hands-on heavy machinery and driving courses designed for real-world operator careers.",
    images: ["/images/excavator.jpg"]
  }
};

export default function TrainingsPage() {
  return (
    <main id="content">
      <PageHero
        title="Our Trainings"
        crumb="Our Trainings"
        image="/images/hero.jpg"
        alt="Excavators and loaders used in Pakistan HMTC courses"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Our Trainings</p>
            <h2 className="section-title">Building Skills For Real-World Challenges</h2>
            <p className="section-copy">
              Our training programs focus on hands-on expertise, helping students operate heavy machinery efficiently
              and excel in their chosen fields.
            </p>
          </div>
          <div className="training-grid">
            {trainings.map((training) => (
              <article className="training-card" id={training.id} key={training.id}>
                <div className="media">
                  <img src={training.image} alt={training.alt} width={600} height={400} />
                </div>
                <div className="body">
                  <h3>{training.title}</h3>
                  <p>{training.full}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: "#111", color: "#fff" }}>
        <div className="container stats">
          <article className="stat-card">
            <strong>Students Trained</strong>
            <p>Practical courses for people who want job-ready operator skills.</p>
          </article>
          <article className="stat-card">
            <strong>Expert Trainers</strong>
            <p>Instructors with field experience across machinery and driving.</p>
          </article>
          <article className="stat-card">
            <strong>Certified Learning</strong>
            <p>A completion certificate is issued after successful training.</p>
          </article>
        </div>
      </section>

      <section className="cta-banner">
        <img src="/images/industrial.jpg" alt="" width={1600} height={500} />
        <div className="container">
          <h2>Learn Today, Lead Tomorrow</h2>
          <a className="btn btn-primary" href={site.phones[0].href}>
            Call Us Now
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container split-faq">
          <div>
            <p className="section-kicker">FAQs</p>
            <h2 className="section-title">Your Questions, Answered Here</h2>
            <p className="section-copy" style={{ marginTop: 12 }}>
              Got questions? Explore our most frequent queries, then call or visit to enroll.
            </p>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  );
}
