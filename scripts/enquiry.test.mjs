import test from "node:test";
import assert from "node:assert/strict";
import { buildEnquiry, enquiryHref } from "../src/lib/enquiry.ts";
const enquiry = {
  name: "  Test Client  ",
  email: "test@example.com",
  phone: "+971 00 000 0000",
  location: "Dubai / Unit 3",
  service: "Quick transformations",
  budget: "",
  completion: "2027-03-15",
  message: "Cabinets & shelves\nFinish: café oak + bronze",
  flexible: false,
};
test("the brief carries contact, scope, location and required completion", () => {
  const brief = buildEnquiry(enquiry);
  for (const value of [
    "Name: Test Client",
    "test@example.com",
    "+971 00 000 0000",
    "Dubai / Unit 3",
    "Quick transformations",
    "2027-03-15",
    "Indicative budget: To discuss",
    enquiry.message,
  ])
    assert.ok(brief.includes(value));
});
test("a flexible date does not retain a stale completion date", () => {
  const brief = buildEnquiry({ ...enquiry, flexible: true });
  assert.ok(brief.includes("Flexible / to be agreed"));
  assert.ok(!brief.includes(enquiry.completion));
});
test("Book Online drafts ask for a consultation", () => {
  const brief = buildEnquiry({ ...enquiry, consultation: true });
  assert.match(
    brief,
    /^Hello Halo Works, I would like to request a consultation\./,
  );
  assert.ok(brief.includes(enquiry.message));
});
test("WhatsApp destination and Unicode message survive URL encoding", () => {
  const draft = buildEnquiry(enquiry);
  const url = new URL(enquiryHref("whatsapp", draft));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/971566442008");
  assert.equal(url.searchParams.get("text"), draft);
});
test("email goes to Halo Works and keeps the complete brief", () => {
  const draft = buildEnquiry({
    ...enquiry,
    service: "Landscaping",
  });
  const url = new URL(enquiryHref("email", draft));
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "info@haloworks.ae");
  assert.equal(url.searchParams.get("body"), draft);
  assert.equal(url.searchParams.get("subject"), "Project enquiry — Halo Works");
});
