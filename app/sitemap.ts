import type { MetadataRoute } from "next";
import { posts } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/our-trainings", "/get-certificate", "/about-us", "/contact-us", "/blog"];
  return [
    ...routes.map((route) => ({
      url: route || "/",
      lastModified: new Date("2026-09-15")
    })),
    ...posts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastModified: new Date(post.date)
    }))
  ];
}
