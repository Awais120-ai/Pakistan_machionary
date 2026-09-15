"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  successMessage: string;
};

export default function ContactForm({ successMessage }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className={`form${sent ? " sent" : ""}`} onSubmit={onSubmit}>
      <div className="form-success">{successMessage}</div>
      <div className="form-fields">
        <div className="form-row">
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your email" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Phone
            <input name="phone" placeholder="Your phone number" required />
          </label>
          <label>
            Subject
            <input name="subject" placeholder="Your subject" />
          </label>
        </div>
        <label>
          Message
          <textarea name="message" placeholder="Your message" required />
        </label>
        <button className="btn btn-primary btn-full" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
