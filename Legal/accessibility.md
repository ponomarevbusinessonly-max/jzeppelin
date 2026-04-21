---
title: "Accessibility Statement"
description: "Our commitment to digital accessibility, current limitations, and how to report barriers on jzeppelin.eu."
slug: "accessibility"
lastUpdated: "2026-04-17"
---

# Accessibility Statement

**Last updated:** 17 April 2026

This Accessibility Statement describes the accessibility of **jzeppelin.eu** (and related domains, including jzeppelin.vercel.app during development), operated by **UCanDrive GmbH**.

We are committed to making our website usable by as many people as possible, including people with visual, auditory, motor, or cognitive impairments. We publish this statement voluntarily, as a sign of that commitment. The sections below explain what that commitment currently looks like in practice — including what we have not yet achieved.

---

## Legal context

The European Accessibility Act (Directive (EU) 2019/882) is implemented in Germany as the **Barrierefreiheitsstärkungsgesetz (BFSG)**, which has applied since 28 June 2025. The BFSG requires certain businesses to make specific products and digital services accessible in line with WCAG 2.1 Level AA and EN 301 549.

Two features of our situation are relevant:

- The BFSG applies to "services in electronic commerce" — websites provided with a view to concluding a consumer contract (§ 2 No. 26 BFSG). **This Site does not conclude consumer contracts directly.** All sales of J.Zeppelin products take place on third-party marketplaces and through authorised retailers, not on jzeppelin.eu. The Site itself is an informational and brand website.
- The BFSG also exempts **micro-enterprises** (fewer than 10 employees and an annual turnover or balance-sheet total below €2 million, as defined by Commission Recommendation 2003/361/EC) from most accessibility obligations for e-commerce services (§ 3 BFSG). UCanDrive GmbH currently meets this threshold.

For both reasons, we are **not legally obliged** to meet the BFSG's accessibility requirements on this Site at this time. Nevertheless, we treat accessibility as a goal, not a legal minimum. This statement sets out where we stand today.

---

## Current conformance status

We target **WCAG 2.1 Level AA** as our accessibility reference, in line with EN 301 549.

**Conformance status: Non-conformant.**

The Site has not yet undergone a formal accessibility audit. We have identified a number of known barriers (listed below) and we are aware that additional barriers likely exist which we have not yet catalogued. We do not currently claim full or partial conformance with WCAG 2.1 AA, because such a claim requires a formal assessment that we have not yet carried out.

---

## Known limitations

The following accessibility barriers are known to us and are planned for improvement. This list is not exhaustive — it reflects what we have identified so far through informal review, not the result of a comprehensive audit.

**Images and non-text content.** Several decorative and illustrative images — including the Boston Terrier mascot, pill and capsule icons, and other pencil-sketch graphics — do not currently have proper text alternatives. Some product images use short product names as alt text rather than meaningful descriptions. Screen-reader users may receive incomplete information about the purpose of an image.

**Headings and text rendering.** Some headings use stylised typography where words are joined without spaces for visual effect (for example, the hero heading). Assistive technologies may read these as a single word rather than the intended phrase.

**Form controls and interactive elements.** The "Notify me" form, the cookie banner, and the "Report an incident" button on the Incident Map teaser have not been systematically tested for keyboard-only navigation, focus visibility, or screen-reader announcements. Some of these controls may be difficult to use without a mouse.

**Colour and contrast.** The hand-drawn pencil-sketch aesthetic means that parts of the Site rely on subtle visual cues. We have not yet verified that all text and meaningful graphic elements meet the 4.5:1 (normal text) and 3:1 (large text / non-text content) contrast ratios required by WCAG 2.1 AA.

**Incident Map.** The Incident Map is currently a preview only and has not been evaluated for accessibility. When it becomes an active feature, accessibility testing will be part of the release.

**AI Analysis.** The "AI Analysis" navigation link points to a feature that is not yet active. When it launches, accessibility testing will be part of the release.

**Cookie banner.** We have not yet verified that the cookie banner meets the specific accessibility expectations set out in the DSK guidance (v1.2, November 2024) for consent interfaces — for example, equal prominence of "Accept" and "Reject" buttons for screen-reader users and keyboard-only users.

**PDFs and external content.** Where the Site links to third-party content (marketplaces, external articles, the ODR platform), we cannot guarantee the accessibility of those external pages.

---

## What we have done

Despite the absence of a formal audit, some accessibility foundations are in place by default through the underlying technology:

- The Site is built on modern semantic HTML produced by a current Next.js framework.
- Page structure uses standard headings, links, and landmark elements.
- The Site is served over HTTPS.
- The Site is designed to be responsive and usable on mobile, tablet, and desktop.

We consider these to be a baseline, not an achievement.

---

## What we plan to do

We plan to improve accessibility incrementally as the Site evolves. Specific priorities:

- Conduct an initial **automated accessibility scan** (e.g., axe DevTools, Lighthouse) and publish the results here in a future version of this Statement.
- Add meaningful alternative text or `alt=""` to all informative and decorative images respectively.
- Verify colour contrast across the Site and adjust where below WCAG 2.1 AA thresholds.
- Test and improve keyboard navigation for the cookie banner, the "Notify me" form, and all product-page interactions.
- Fix heading text-rendering issues that cause assistive technology to misread content.
- Commission a **professional WCAG 2.1 AA audit** before any feature that creates a direct consumer-contract pathway on this Site goes live. If that happens, the BFSG exemption discussed above stops applying.
- Include accessibility testing in the release checklist for the Incident Map and AI Analysis features before they go live.

We will update this Statement when any of these actions is completed.

---

## Feedback and contact

If you encounter an accessibility barrier on this Site — whether listed above or not — please tell us. We want to know, and we will do our best to respond promptly.

**UCanDrive GmbH**
Mittelstraße 5 / 5A, 12529 Schönefeld, Germany
Email: info@jzeppelin.eu

When you write to us, please include:

- The page or feature where the barrier occurred (a URL is ideal);
- A short description of what went wrong;
- Any assistive technology you were using (screen reader, voice control, keyboard-only, etc.), if relevant.

We aim to acknowledge accessibility feedback within **5 working days** and to provide a substantive response within **30 days**. If we cannot fix an issue immediately, we will explain what we can do and when.

---

## Enforcement procedure (if applicable)

Because UCanDrive GmbH is currently a micro-enterprise and this Site is not a direct e-commerce service, the BFSG enforcement mechanism does not currently apply to us. This may change if our size or business model changes.

If, in the future, you believe that BFSG obligations apply to us and have been breached, you may contact the competent market surveillance authority. For digital services, the contact point at federal level is the **Bundesfachstelle Barrierefreiheit**:

Bundesfachstelle Barrierefreiheit
c/o Kompetenzzentrum Selbstbestimmt Leben
Bonn, Germany
[www.bundesfachstelle-barrierefreiheit.de](https://www.bundesfachstelle-barrierefreiheit.de/)

For product-related accessibility issues under the BFSG, the responsible market surveillance authority is the authority designated by the federal state in which UCanDrive GmbH is established.

---

## Review cycle

This Statement was last reviewed and updated on **21 April 2026**. We review it at least every **12 months** and whenever a substantial change to the Site takes place — whichever is sooner.
