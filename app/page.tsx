import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import { posts, site, trainings } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="content">
      <section className="hero">
        <div className="hero-media">
          <img
            src="/images/hero.jpg"
            alt="Heavy machinery operators training with excavators on a construction yard"
            width={1920}
            height={1080}
          />
        </div>
        <div className="container hero-content">
          <p className="section-kicker">Pakistan Heavy Machinery Training Center</p>
          <h1>Training Skilled Operators, Building Trust</h1>
          <p>
            At Pakistan HMTC, we turn ambition into practical skill. Our hands-on heavy machinery programs prepare
            students to operate a wide range of equipment with confidence, safety, and professionalism.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/our-trainings">
              Browse Trainings
            </Link>
            <a className="btn btn-outline" href={site.phones[0].href}>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <div className="feature-strip">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-num">1</div>
              <h3>Skilled And Experienced Trainers</h3>
            </article>
            <article className="feature-card">
              <div className="feature-num">2</div>
              <h3>Hands-On Practical Trainings</h3>
            </article>
            <article className="feature-card">
              <div className="feature-num">3</div>
              <h3>State-Of-The-Art Equipment</h3>
            </article>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <div className="about-collage">
            <div className="about-accent"></div>
            <div className="about-main">
              <img src="/images/excavator.jpg" alt="Excavator used during practical machinery training" width={900} height={700} />
            </div>
            <div className="about-float one">
              <img src="/images/dump-truck.jpg" alt="Dump trucks lined up at a training and construction site" width={500} height={320} />
            </div>
            <div className="about-float two">
              <img src="/images/truck.jpg" alt="Heavy trailer truck for professional driving training" width={500} height={320} />
            </div>
          </div>
          <div className="about-copy">
            <p className="section-kicker">About Us</p>
            <h2 className="section-title">Quality Training For A Brighter Future</h2>
            <p>
              Pakistan HMTC focuses on high-quality, practical instruction that helps students succeed in the heavy
              machinery industry. Every course is built around real machines, real job-site routines, and the safety
              habits employers expect.
            </p>
            <p>
              Our instructors guide each trainee through the skills needed to operate equipment professionally and move
              into stronger career opportunities.
            </p>
            <div className="vision-grid">
              <article className="vision-card">
                <h3>Vision</h3>
                <p>
                  To be a trusted provider of comprehensive heavy machinery training, equipping people with the skills
                  to succeed in the industry.
                </p>
              </article>
              <article className="vision-card">
                <h3>Mission</h3>
                <p>
                  To deliver hands-on training with expert instructors, building a safer and more skilled workforce for
                  the machinery sector.
                </p>
              </article>
            </div>
            <p style={{ marginTop: 22 }}>
              <Link className="btn btn-dark" href="/about-us">
                Learn More About Us
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f7f7f5" }}>
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Our Trainings</p>
            <h2 className="section-title">Building Skills For Real-World Challenges</h2>
            <p className="section-copy">
              Our programs develop hands-on expertise so students can operate heavy machinery efficiently and grow in
              their chosen field.
            </p>
          </div>
          <div className="training-grid">
            {trainings.slice(0, 4).map((training) => (
              <article className="training-card" key={training.id}>
                <div className="media">
                  <img src={training.image} alt={training.alt} width={600} height={400} />
                </div>
                <div className="body">
                  <h3>{training.title}</h3>
                  <p>{training.short}</p>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 28, textAlign: "center" }}>
            <Link className="btn btn-primary" href="/our-trainings">
              View All Trainings
            </Link>
          </p>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <div className="section-head center">
            <p className="section-kicker">Our Gallery</p>
            <h2 className="section-title">See Our Latest Training Photoshoot</h2>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-head center">
            <p className="section-kicker">Testimonial</p>
            <h2 className="section-title">What Students Say About Our Training</h2>
            <p className="section-copy">
              Students value the practical learning, expert guidance, and the confidence they gain to operate heavy
              machinery professionally and safely.
            </p>
          </div>
          <div className="testimonial-track">
            <article className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>The practical sessions were excellent. I learned everything I needed to start my career with more confidence.</p>
              <div className="person">
                <div className="avatar">SA</div>
                <div>
                  <strong>Shaheen Ali</strong>
                  <span>Bulldozer Training</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>The trainers are experienced, and the environment is well suited to learning heavy machinery the right way.</p>
              <div className="person">
                <div className="avatar">KA</div>
                <div>
                  <strong>Khair Ullah Afridi</strong>
                  <span>Grader Training</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>Hands-on training at Pakistan HMTC helped me build a solid foundation for my job as an operator.</p>
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
        <div className="container contact-split">
          <div>
            <p className="section-kicker">Get In Touch</p>
            <h2 className="section-title">Where Skill Meets Excellence In Training</h2>
            <p className="section-copy" style={{ margin: "16px 0 24px" }}>
              Have a question about enrollment, course options, or certificates? Send a message or call the team
              directly.
            </p>
            <Link className="btn btn-dark" href="/our-trainings">
              Explore Trainings
            </Link>
            <div className="contact-panel" style={{ marginTop: 28 }}>
              <p className="section-kicker">Pakistan HMTC</p>
              <h2>Contact Info</h2>
              <div className="contact-list">
                {site.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    <b>Phone</b> {phone.display}
                  </a>
                ))}
                <a href={`mailto:${site.email}`}>
                  <b>Email</b> {site.email}
                </a>
                <a href={site.facebook} target="_blank" rel="noopener">
                  <b>Facebook</b> Follow Pakistan HMTC
                </a>
              </div>
            </div>
          </div>
          <ContactForm successMessage="Thank you. Your message has been prepared. You can also call 03128616980 for faster enrollment support." />
        </div>
      </section>

      <section className="section" style={{ background: "#f7f7f5" }}>
        <div className="container">
          <div
            className="section-head"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap" }}
          >
            <div>
              <p className="section-kicker">Blog & Article</p>
              <h2 className="section-title">Read Our Recent Blogs</h2>
            </div>
            <Link className="btn btn-dark" href="/blog">
              View All
            </Link>
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
