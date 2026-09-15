"use client";

import { FormEvent, useState } from "react";
import { trainings } from "@/lib/site";

export default function CertificateForm() {
  const [certificate, setCertificate] = useState("");
  const [showResult, setShowResult] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const value = String(new FormData(form).get("certificate") ?? "").replace(/[<>]/g, "");
    setCertificate(value);
    setShowResult(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Full Name
        <input name="name" placeholder="Name on certificate" required />
      </label>
      <label>
        Certificate Number
        <input name="certificate" placeholder="e.g. PHMTC-2026-014" required />
      </label>
      <label>
        Course
        <select name="course" required defaultValue="">
          <option value="">Select training</option>
          {trainings.map((training) => (
            <option key={training.id}>{training.title}</option>
          ))}
        </select>
      </label>
      <label>
        Phone
        <input name="phone" placeholder="Your phone number" required />
      </label>
      <button className="btn btn-primary btn-full" type="submit">
        Verify Certificate
      </button>
      {showResult ? (
        <div className="result-box show warn">
          <strong>Verification request received.</strong>
          <p>
            Pakistan HMTC issues certificates after successful course completion. Please call{" "}
            <a href="tel:+923128616980">03128616980</a> or email{" "}
            <a href="mailto:pakistanttc1@gmail.com">pakistanttc1@gmail.com</a> with certificate number{" "}
            <em>{certificate}</em> so our team can confirm it.
          </p>
        </div>
      ) : null}
    </form>
  );
}
