"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

const ctaByPath: Record<string, { href: string; label: string }> = {
  "/": { href: "/our-trainings", label: "Browse Trainings" },
  "/our-trainings": { href: "/contact-us", label: "Enroll Now" },
  "/get-certificate": { href: "/contact-us", label: "Contact Us" },
  "/about-us": { href: "/contact-us", label: "Contact Us" },
  "/contact-us": { href: site.phones[0].href, label: "Call Now" },
  "/blog": { href: "/our-trainings", label: "Browse Trainings" }
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cta = ctaByPath[pathname] ?? { href: "/contact-us", label: "Contact Us" };

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contacts">
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="topbar-social">
            <a href={site.facebook} target="_blank" rel="noopener">
              Facebook
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="logo-bar">
        <Link className="brand" href="/" aria-label="Pakistan HMTC home">
          <img
            className="site-logo"
            src="/images/logo.jpg"
            alt="Pakistan Heavy Machinery Training Center logo"
            width={240}
            height={240}
          />
        </Link>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand-compact" href="/" aria-label="Pakistan HMTC home">
            <img src="/images/logo.jpg" alt="" width={48} height={48} />
          </Link>
          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} className={isActive(pathname, item.href) ? "active" : undefined} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-cta">
            <a className="header-phone" href={site.phones[0].href}>
              <small>Have any question?</small>
              <strong>{site.phones[0].display}</strong>
            </a>
            {cta.href.startsWith("tel:") ? (
              <a className="btn btn-primary" href={cta.href}>
                {cta.label}
              </a>
            ) : (
              <Link className="btn btn-primary" href={cta.href}>
                {cta.label}
              </Link>
            )}
          </div>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`mobile-panel${open ? " open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={isActive(pathname, item.href) ? "active" : undefined}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.phones[0].href}>Call {site.phones[0].display}</a>
        </div>
      </header>
    </>
  );
}
