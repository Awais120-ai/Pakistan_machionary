import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about-us.html", destination: "/about-us", permanent: true },
      { source: "/our-trainings.html", destination: "/our-trainings", permanent: true },
      { source: "/get-certificate.html", destination: "/get-certificate", permanent: true },
      { source: "/contact-us.html", destination: "/contact-us", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      {
        source: "/blog/practical-heavy-machinery-training.html",
        destination: "/blog/practical-heavy-machinery-training",
        permanent: true
      },
      {
        source: "/blog/operator-safety-standards.html",
        destination: "/blog/operator-safety-standards",
        permanent: true
      },
      {
        source: "/blog/career-in-heavy-machinery.html",
        destination: "/blog/career-in-heavy-machinery",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
