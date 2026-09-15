"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export default function Footer() {
  const [sent, setSent] = useState(false);

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand" href="/">
              <img
                className="site-logo"
                src="/images/logo.jpg"
                alt="Pakistan Heavy Machinery Training Center logo"
                width={170}
                height={170}
              />
              <span className="brand-text">
                <strong>Pakistan HMTC</strong>
                <span>Heavy Machinery Training</span>
              </span>
            </Link>
            <p style={{ marginTop: 16 }}>
              Pakistan HMTC specializes in professional training for heavy machinery and driving, shaping skilled
              operators for a better tomorrow.
            </p>
            <div className="socials">
              <a href={site.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                f
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">
                w
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email">
                @
              </a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link href="/about-us">About Us</Link>
              <Link href="/our-trainings">Our Trainings</Link>
              <Link href="/get-certificate">Get Certificate</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.display}
                </a>
              ))}
              <a href={site.facebook} target="_blank" rel="noopener">
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h3>Subscribe</h3>
            <p>Get training updates and enrollment news.</p>
            <form className={`form subscribe${sent ? " sent" : ""}`} style={{ marginTop: 14 }} onSubmit={onSubscribe}>
              <div className="form-success">Thanks for subscribing.</div>
              <div className="form-fields subscribe">
                <input type="email" name="email" placeholder="Your email" required />
                <button type="submit">Subscribe Now</button>
              </div>
            </form>
          </div>
        </div>
        <div className="container copyright">
          <span>Copyright 2026 © Pakistan HMTC — All Rights Reserved</span>
          <span>Heavy Machinery Training Center</span>
        </div>
      </footer>
      <a className="whatsapp-float" href={site.whatsapp} target="_blank" rel="noopener">
        <span>Need help?</span>
      </a>
    </>
  );
}
