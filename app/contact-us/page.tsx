import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pakistan HMTC for enrollment, training details, and certificates. Call 03128616980, 03419470579, 03115092877 or email pakistanttc1@gmail.com.",
  openGraph: {
    title: "Contact Us | Pakistan HMTC",
    description: "Reach Pakistan HMTC anytime for training assistance, enrollment, and certificate support.",
    images: ["/images/construction.jpg"]
  }
};

export default function ContactPage() {
  return (
    <main id="content">
      <PageHero
        title="Contact"
        crumb="Contact"
        image="/images/construction.jpg"
        alt="Construction machinery representing Pakistan HMTC contact and enrollment"
      />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-kicker">Contact Us</p>
            <h2 className="section-title">Reach Out Anytime For Assistance Or Queries</h2>
          </div>
          <div className="info-cards">
            <article className="info-card">
              <h3>Location</h3>
              <p>
                Pakistan HMTC provides heavy machinery and driving training across Pakistan. Call the team to confirm
                your nearest training session and enrollment steps.
              </p>
            </article>
            <article className="info-card">
              <h3>Get In Touch</h3>
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.display}
                </a>
              ))}
            </article>
            <article className="info-card">
              <h3>Email & Facebook</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.facebook} target="_blank" rel="noopener">
                Facebook page
              </a>
            </article>
          </div>
          <div className="contact-split">
            <div className="contact-panel">
              <p className="section-kicker">Pakistan HMTC</p>
              <h2>We Are Ready To Help</h2>
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
                  <b>Facebook</b> facebook.com/share/1JzbySWyaY
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener">
                  <b>WhatsApp</b> Message us to enroll
                </a>
              </div>
            </div>
            <ContactForm successMessage="Thank you. Your inquiry is ready. For quicker support, call 03128616980 or email pakistanttc1@gmail.com." />
          </div>
        </div>
      </section>
    </main>
  );
}
