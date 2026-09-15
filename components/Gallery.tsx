"use client";

import { useEffect, useState } from "react";

const items = [
  {
    src: "/images/hero.jpg",
    alt: "Yellow excavators and operators during field training",
    label: "Open gallery image of excavators"
  },
  {
    src: "/images/forklift.jpg",
    alt: "Forklifts used in warehouse operator training",
    label: "Open gallery image of forklifts"
  },
  {
    src: "/images/workers.jpg",
    alt: "Trainees and instructors on a machinery yard",
    label: "Open gallery image of trainees"
  },
  {
    src: "/images/crane.jpg",
    alt: "Crane operations related to lifting training",
    label: "Open gallery image of a crane"
  },
  {
    src: "/images/dump-truck.jpg",
    alt: "Dump trucks used in heavy vehicle training",
    label: "Open gallery image of dump trucks"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Training team working around heavy equipment",
    label: "Open gallery image of site workers"
  }
];

export default function Gallery() {
  const [active, setActive] = useState<(typeof items)[number] | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <button
            key={item.src}
            className="gallery-item"
            type="button"
            aria-label={item.label}
            onClick={() => setActive(item)}
          >
            <img src={item.src} alt={item.alt} width={800} height={520} />
          </button>
        ))}
      </div>
      <div
        className={`lightbox${active ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
      >
        <button className="lightbox-close" aria-label="Close" type="button" onClick={() => setActive(null)}>
          ×
        </button>
        {active ? <img src={active.src} alt={active.alt} /> : null}
      </div>
    </>
  );
}
