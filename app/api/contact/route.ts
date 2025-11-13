import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate with email provider here (Resend/Postmark/SendGrid/etc.)
    // Example integration with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@sanborntax.com',
    //   to: 'mark@sanborntax.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message || 'No message provided'}</p>
    //   `,
    // });

    // Log the submission for testing purposes
    console.log("Contact form submission:", { name, phone, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

