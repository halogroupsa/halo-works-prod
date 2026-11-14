"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { buildEnquiry, enquiryHref } from "@/lib/enquiry";
import {
  haloInteriorsBudgetBand,
  haloInteriorsContact,
  haloWorksBudgetBand,
} from "@/lib/project-budget";
import { Icon } from "./icons";

type Channel = "whatsapp" | "email";

export default function ProjectBriefForm({
  initialService,
  options,
  consultation,
}: {
  initialService: string;
  options: string[];
  consultation?: boolean;
}) {
  const id = useId();
  const [ready, setReady] = useState(false);
  const [flexible, setFlexible] = useState(false);
  const [budget, setBudget] = useState("");
  const isInteriorsBudget = budget === haloInteriorsBudgetBand;
  const [draft, setDraft] = useState<{ channel: Channel; text: string } | null>(
    null,
  );

  useEffect(() => setReady(true), []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (field: string) => String(data.get(field) ?? "");
    if (get("budget") === haloInteriorsBudgetBand) return;

    const message = form.elements.namedItem("message") as HTMLTextAreaElement;
    if (!message.value.trim()) {
      message.setCustomValidity("Describe the work you’d like to discuss.");
      message.reportValidity();
      return;
    }

    const channel =
      (event.nativeEvent as SubmitEvent).submitter?.getAttribute("value") ===
      "email"
        ? "email"
        : "whatsapp";
    const text = buildEnquiry({
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      location: get("location"),
      service: get("service"),
      budget: get("budget"),
      completion: get("completion"),
      message: get("message"),
      flexible,
      consultation,
    });

    setDraft({ channel, text });
    const href = enquiryHref(channel, text);
    if (channel === "whatsapp")
      window.open(href, "_blank", "noopener,noreferrer");
    else window.location.href = href;
  }

  return (
    <form
      className="contact-form"
      method="post"
      onSubmit={submit}
      onChange={() => setDraft(null)}
    >
      <p className="form-key">Fields marked * are required.</p>
      <div className="form-grid">
        <label htmlFor={id + "-name"}>
          Your name *
          <input
            id={id + "-name"}
            name="name"
            required
            maxLength={100}
            pattern={".*\\S.*"}
            autoComplete="name"
            placeholder="Full name"
          />
        </label>
        <label htmlFor={id + "-phone"}>
          Phone / WhatsApp *
          <input
            id={id + "-phone"}
            name="phone"
            required
            type="tel"
            minLength={7}
            maxLength={30}
            pattern={".*[0-9].*"}
            autoComplete="tel"
            placeholder="+971"
          />
        </label>
        <label htmlFor={id + "-email"}>
          Email
          <input
            id={id + "-email"}
            name="email"
            type="email"
            maxLength={200}
            autoComplete="email"
            placeholder="name@email.com"
          />
        </label>
        <label htmlFor={id + "-location"}>
          Property location *
          <input
            id={id + "-location"}
            name="location"
            required
            maxLength={150}
            pattern={".*\\S.*"}
            placeholder="Area or building"
          />
        </label>
        <label htmlFor={id + "-service"}>
          Service *
          <select
            id={id + "-service"}
            name="service"
            defaultValue={initialService}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor={id + "-budget"}>
          Indicative budget
          <select
            id={id + "-budget"}
            name="budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            aria-describedby={isInteriorsBudget ? id + "-interiors" : undefined}
          >
            <option value="">To discuss</option>
            <option>Under AED 100,000</option>
            <option>{haloWorksBudgetBand}</option>
            <option>{haloInteriorsBudgetBand}</option>
          </select>
        </label>
        {isInteriorsBudget && (
          <p className="full" id={id + "-interiors"}>
            Halo Interiors handles projects from AED 300,000.{" "}
            <a className="text-link" href={haloInteriorsContact}>
              Contact Halo Interiors <Icon name="diagonal" size={15} />
            </a>
          </p>
        )}
        <div className="full completion-field">
          <label htmlFor={id + "-completion"}>
            Required completion date {flexible ? "" : "*"}
            <input
              id={id + "-completion"}
              type="date"
              name="completion"
              required={!flexible}
              disabled={flexible}
            />
          </label>
          <label className="date-flexible">
            <input
              type="checkbox"
              checked={flexible}
              onChange={(event) => setFlexible(event.target.checked)}
            />
            My completion date is flexible
          </label>
        </div>
        <label className="full" htmlFor={id + "-message"}>
          Your project brief *
          <textarea
            id={id + "-message"}
            name="message"
            required
            maxLength={1600}
            rows={3}
            placeholder="Which rooms or features do you want to change?"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </label>
      </div>
      <div hidden={isInteriorsBudget} data-reveal={consultation ? "" : undefined}>
        <label className="consent">
          <input type="checkbox" required disabled={isInteriorsBudget} />
          <span>
            I agree to share these details with Halo Works for this enquiry.{" "}
            <Link prefetch={false} href="/privacy/">
              Privacy
            </Link>
          </span>
        </label>
        <div className="send-options">
          <button
            className="button"
            type="submit"
            value="whatsapp"
            disabled={!ready || isInteriorsBudget}
          >
            <Icon name="whatsapp" size={20} /> Continue on WhatsApp
          </button>
          <button
            className="button outline"
            type="submit"
            value="email"
            disabled={!ready || isInteriorsBudget}
          >
            <Icon name="email" size={19} /> Continue by email
          </button>
        </div>
        <noscript>
          <p className="fine-print">
            Use the direct WhatsApp or email link to send your brief.
          </p>
        </noscript>
        <p className="fine-print">
          Review and send your draft in the app you choose. You can attach
          photos or drawings there.
        </p>
        {draft && (
          <div className="enquiry-ready">
            <p role="status">Your draft is ready to review and send.</p>
            <a
              href={enquiryHref(draft.channel, draft.text)}
              target={draft.channel === "whatsapp" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              Open {draft.channel === "whatsapp" ? "WhatsApp" : "email"} again
            </a>
            <details>
              <summary>View or copy your draft</summary>
              <textarea
                aria-label="Prepared project brief"
                readOnly
                value={draft.text}
                rows={6}
              />
            </details>
          </div>
        )}
      </div>
    </form>
  );
}
