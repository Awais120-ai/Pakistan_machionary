import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pakistan HMTC, a heavy machinery training center focused on practical skills, safety, experienced instructors, and career-ready operator training.",
  openGraph: {
    title: "About Us | Pakistan HMTC",
    description: "Quality hands-on heavy machinery training for a brighter future.",
    images: ["/images/workers.jpg"]
  }
};

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero
        title="About Us"
        crumb="About Us"
        image="/images/hero.jpg"
        alt="Heavy machinery at the Pakistan HMTC training yard"
      />

      <section className="section">
        <div className="container about-grid">
          <div className="about-collage">
            <div className="about-accent"></div>
            <div className="about-main">
              <img src="/images/workers.jpg" alt="Instructors and trainees on a heavy machinery site" width={900} height={700} />
            </div>
            <div className="about-float one">
              <img src="/images/forklift.jpg" alt="Forklift used in practical training" width={500} height={320} />
            </div>
            <div className="about-float two">
              <img src="/images/excavator.jpg" alt="Excavator used during operator training" width={500} height={320} />
            </div>
          </div>
          <div className="about-copy">
            <p className="section-kicker">About Us</p>
            <h2 className="section-title">Quality Training For A Brighter Future</h2>
            <p>
              At Pakistan HMTC, we focus on high-quality, hands-on training that equips students with the skills needed
              to excel in the heavy machinery industry.
            </p>
            <p>
              Our expert trainers make sure each trainee receives practical knowledge that leads to career success and a
              stronger future in the field.
            </p>
            <p className="section-kicker" style={{ marginTop: 22 }}>
              Where Vision Meets Machinery Training
            </p>
            <div className="vision-grid">
              <article className="vision-card">
                <h3>Vision</h3>
                <p>
                  To be the leading provider of comprehensive heavy machinery training, equipping individuals with the
                  skills to succeed in the industry.
                </p>
              </article>
              <article className="vision-card">
                <h3>Mission</h3>
                <p>
                  To deliver hands-on, practical training with expert instructors, fostering a safe and skilled workforce
                  for the heavy machinery sector.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: "#f7f7f5" }}>
        <div className="container">
          <div className="stats">
            <article className="stat-card">
              <strong>Skill Development</strong>
              <p>Practical machine time designed around real job-site tasks.</p>
            </article>
            <article className="stat-card">
              <strong>Student Focus</strong>
              <p>Instruction shaped around trainee progress, confidence, and employability.</p>
            </article>
            <article className="stat-card">
              <strong>Safety Excellence</strong>
              <p>Safety routines are built into every course from the first session.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-kicker">Why Choose Pakistan HMTC</p>
            <h2 className="section-title">Where Skill Meets Professional Training</h2>
            <p className="section-copy">
              Our expert-led programs provide practical heavy machinery training, helping students build a strong
              foundation for their careers.
            </p>
          </div>
          <div className="why-grid">
            <article className="why-card">
              <h3 className="section-title" style={{ fontSize: "1.6rem" }}>
                Experience & Expertise
              </h3>
              <p>
                Our seasoned trainers bring years of practical experience to heavy machinery instruction, so students
                learn the methods used on real sites.
              </p>
            </article>
            <article className="why-card">
              <h3 className="section-title" style={{ fontSize: "1.6rem" }}>
                Dedicated To Excellence
              </h3>
              <p>
                We make sure every trainee receives high-quality, hands-on instruction tailored to industry needs and
                professional standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <img src="/images/night-site.jpg" alt="" width={1600} height={500} />
        <div className="container">
          <h2>Train With Confidence At Pakistan HMTC</h2>
          <Link className="btn btn-primary" href="/contact-us">
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-head center">
            <p className="section-kicker">Testimonial</p>
            <h2 className="section-title">What Students Say About Our Training</h2>
          </div>
          <div className="testimonial-track">
            <article className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>The practical training gave me the confidence to operate heavy machinery. Highly recommended.</p>
              <div className="person">
                <div className="avatar">SK</div>
                <div>
                  <strong>Shehzad Khurran</strong>
                  <span>Mobile Crane Training</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>Thanks to Pakistan HMTC, I am now working as a professional machinery operator.</p>
              <div className="person">
                <div className="avatar">AC</div>
                <div>
                  <strong>Aizaz Cheema</strong>
                  <span>Forklift Training</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>Hands-on training helped me build a solid foundation for my job.</p>
              <div className="person">
                <div className="avatar">SS</div>
                <div>
                  <strong>Samad Shah</strong>
                  <span>Excavator Training</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
