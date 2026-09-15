import type { Metadata } from "next";
import CertificateForm from "@/components/CertificateForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Certificate",
  description:
    "Verify or request a Pakistan HMTC training certificate after successful course completion. Contact the team with your certificate details.",
  openGraph: {
    title: "Get Certificate | Pakistan HMTC",
    description: "Certificate support for Pakistan HMTC trainees after successful course completion.",
    images: ["/images/operator.jpg"]
  }
};

export default function CertificatePage() {
  return (
    <main id="content">
      <PageHero
        title="Get Certificate"
        crumb="Get Certificate"
        image="/images/operator.jpg"
        alt="Training yard representing certified operator programs"
      />

      <section className="section">
        <div className="container certificate-box">
          <div>
            <p className="section-kicker">Certification</p>
            <h2 className="section-title">Confirm Your Pakistan HMTC Certificate</h2>
            <p className="section-copy" style={{ margin: "16px 0" }}>
              Trainees receive a certificate after successful course completion. Use this form to request verification,
              replacement support, or certificate details.
            </p>
            <div className="info-card" style={{ marginTop: 20 }}>
              <h3>Need faster help?</h3>
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.display}
                </a>
              ))}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <CertificateForm />
        </div>
      </section>
    </main>
  );
}
