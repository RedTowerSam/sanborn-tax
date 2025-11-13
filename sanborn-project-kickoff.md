# Cursor Project Kickoff – Sanborn Tax Service (Next.js + React)

You are setting up a brand‑new Next.js project for **Sanborn Tax Service**, based on an existing single‑page Squarespace site.  
Do **not** push to Git; just scaffold files and code in the local workspace.

---

## High‑level goals

- Rebuild the existing **single‑page marketing site** in **Next.js (App Router) + React + TypeScript**.
- Host on **Vercel**.
- Match the **current layout and styling as closely as possible**:
  - Font: **Roboto** (all text).
  - Background: light tan `#F6F3EA`.
  - Primary dark text: `#2F2F2F`.
- Create **clean, well‑organized components** for each section so future design tweaks are easy.
- Implement a basic **contact form** that POSTs to `/api/contact`.
  - Leave the actual email‑sending implementation as a **TODO** with clear comments so it can be wired to Resend or another provider later.

The site is simple: **one page**, no navigation to other routes, no CMS, and only one form.

---

## Tech stack & conventions

Use this stack and structure unless otherwise noted:

- **Next.js (App Router)** – latest stable
- **TypeScript**
- **Tailwind CSS** for styling
- **next/font** for Roboto (no external `<link>` to Google Fonts)
- Deployed to **Vercel** (but you don’t need to configure deployment; just keep the project Vercel‑friendly).

### Required project files

Create and configure at minimum:

- `package.json` with scripts for:
  - `dev`, `build`, `start`, `lint`
- `tsconfig.json`
- `next.config.mjs`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `app/api/contact/route.ts` (Route Handler, POST only)
- `components/` folder with the React components listed below.

You can add any additional utility files if helpful (e.g., simple validation helpers).

---

## Design system

Match the existing Squarespace site visually.

### Colors

Use these as Tailwind theme extensions:

- `brand.light` → `#F6F3EA` (page background)
- `brand.dark` → `#2F2F2F` (primary text and dark accents)

You can keep the rest of the Tailwind palette default.

In `tailwind.config.ts`, extend theme roughly like:

```ts
theme: {
  extend: {
    colors: {
      brand: {
        light: "#F6F3EA",
        dark: "#2F2F2F",
      },
    },
  },
}
```

### Typography

- Use **Roboto** for all text via `next/font/google` inside `app/layout.tsx`.
- Body copy: normal weight, comfortable line height.
- Headings: slightly larger, bold, but not overly stylized (clean, professional tax‑firm look).

### Layout & spacing

- Overall background: `brand.light`.
- Content should be centered in a **max‑width container** (~`max-w-4xl` or similar) with padding on small screens.
- Use consistent vertical spacing between sections (`py-16` or similar).
- The overall feel should stay **clean, calm, and professional**—no wild gradients or animations.

---

## Page structure & components

Create a single page at `app/page.tsx` that assembles the following components (all in `components/`):

- `SiteHeader.tsx`
- `Hero.tsx`
- `AreasOfExpertise.tsx`
- `About.tsx`
- `ContactSection.tsx`
- `SiteFooter.tsx`

The layout in `app/page.tsx` can look like:

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <SiteHeader />
      <Hero />
      <AreasOfExpertise />
      <About />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
```

### 1. `<SiteHeader />`

- Simple top header that displays the business name **“Sanborn Tax Service”**.
- Include a “Contact Us” button that scrolls to the contact section (use an in‑page anchor with `href="#contact"`).
- Keep it visually minimal and aligned with the existing site (no complex nav; just brand + call to action).

### 2. `<Hero />`

This should roughly mirror the top section of the current site.

Content (paraphrased from the live copy):

- Main heading (H1): **Sanborn Tax Service**
- Supporting paragraphs (2 short paragraphs):
  - Paragraph 1: Sanborn Tax Service has been helping clients navigate complex tax rules since 1996. The firm uses modern tax software and keeps up with current regulations to file accurate returns from the office.
  - Paragraph 2: The practice serves clients across Illinois, with a focus on both individual and small business tax preparation. It also offers tax planning and small business consulting to support long‑term financial health.

- A primary button: **“Contact Us”**
  - Clicking the button should scroll to the contact section (`href="#contact"`).

Layout:

- On larger screens, you can place the text on one side and a hero image placeholder on the other.
- For now, use a placeholder `<div>` or generic `<Image>` block with a TODO comment where the real hero image will be dropped later.

### 3. `<AreasOfExpertise />`

This section corresponds to the “Areas of Expertise” block on the current site.

- Section heading (H2): **Areas of Expertise**
- Below, show a 2x2 grid (on larger screens) or stacked list (on mobile) with these items:
  - **Individual Income Taxes**
  - **Small Business Taxes and Counseling**
  - **Rental Income Taxes**
  - **Tax Planning**

Each item can be a simple card or list item—no need for icons unless you want to add generic ones as placeholders.

### 4. `<About />`

This is the “About Mark Sanborn” section.

Content (paraphrased):

- Section heading (H3): **About Mark Sanborn**
- One paragraph describing Mark’s experience. Use copy similar to:
  - Mark has prepared tax returns and offered financial services since 1996. He works with individuals and small businesses to make sense of complex tax rules, combining personal service with modern tax tools and current knowledge of tax law.

Layout:

- Text + image layout.
- Include a placeholder for Mark’s headshot image with a TODO comment where the final image will be plugged in.

### 5. `<ContactSection />`

This section combines address and the contact form.

- Section wrapping `<section>` with `id="contact"` so that “Contact Us” buttons can scroll here.
- Sub‑sections:
  1. **Contact Info block**
     - Heading: **Sanborn Tax Service**
     - Address lines:
       - `805 W. Jackson St.`
       - `Suite 303`
       - `Morton, IL 61550`
     - Phone: `(309) 839-2676`
  2. **Contact Form**

#### Contact form requirements

Fields:

- Name (single text field; label “Name”)
- Phone (text field; label “Phone”)
- Email (email field; label “Email”)
- Message (textarea; label “Message”)

Behavior:

- Use a **client component** for the form (so we can manage loading and success/error states).
- On submit, POST JSON to `/api/contact` with these fields.
- Show:
  - A loading state while the request is in flight.
  - A success message when the server returns `{ ok: true }`.
  - A generic error message if the request fails.

Validation:

- Basic client‑side validation:
  - Require name and email.
  - Email must be syntactically valid.
- Server‑side validation in the Route Handler (see below).

Layout:

- On large screens: show contact info on the left, form on the right.
- On mobile: stack vertically, contact info first, form underneath.

### 6. `<SiteFooter />`

- Simple footer with the business name and current year.
- Optionally repeat the phone number and city/state.

---

## API Route: `/api/contact`

Create `app/api/contact/route.ts` with a POST handler.

Expected request body (JSON):

```ts
{
  name: string;
  phone?: string;
  email: string;
  message?: string;
}
```

Behavior:

1. Parse the JSON body.
2. Validate that `name` and `email` are present and non‑empty.
3. Optionally run a simple email format check.
4. For now, **do not actually send email.** Instead:
   - Leave a clear `// TODO` comment explaining where to integrate with an email provider such as Resend/Postmark/SendGrid.
   - Log the payload to the server console for testing.
5. Return:
   - `200` with `{ ok: true }` on success.
   - `400` with `{ ok: false, error: "..." }` on validation errors.
   - `500` with `{ ok: false, error: "Server error" }` on unexpected exceptions.

Example skeleton:

```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // TODO: Integrate with email provider here (Resend/Postmark/etc.)
    // e.g. send an email with the submitted data.

    console.log("Contact form submission:", { name, phone, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
```

---

## Globals & base styles

In `app/globals.css`:

- Keep Tailwind’s base, components, and utilities imports.
- Add minimal global rules as needed (e.g., set `body` background to `brand.light` and text color to `brand.dark` if not already handled via layout).

Example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100%;
}

body {
  @apply bg-brand-light text-brand-dark;
}
```

---

## What to do now

1. Initialize the Next.js + TypeScript + Tailwind project with the files and configuration above.
2. Implement all components (`SiteHeader`, `Hero`, `AreasOfExpertise`, `About`, `ContactSection`, `SiteFooter`) with the structure and placeholder content described.
3. Wire up the contact form to the `/api/contact` Route Handler.
4. Ensure the layout visually matches the current Sanborn Tax Service site as closely as possible, using the provided colors and Roboto font.
5. Leave clear `TODO` comments where images must be added and where the email provider integration will go.
