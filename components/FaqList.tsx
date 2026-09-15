"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <article key={faq.question} className={`faq-item${openIndex === index ? " open" : ""}`}>
          <button
            type="button"
            onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
          >
            {faq.question}
          </button>
          <div className="answer">{faq.answer}</div>
        </article>
      ))}
    </div>
  );
}
