import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Send email via Resend
    const fromEmail = process.env.FROM_EMAIL || "contact@sanborntaxservice.com";
    const toEmail = process.env.CONTACT_EMAIL || "mark@sanborntaxservice.com";
    const ccEmail = process.env.CC_EMAIL; // Optional CC email

    // Build email payload
    const emailPayload: any = {
      from: fromEmail,
      to: toEmail,
      replyTo: email, // Allow replying directly to the form submitter
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from the Sanborn Tax Service contact form.</p>
      `,
    };

    // Add CC if configured
    if (ccEmail) {
      emailPayload.cc = ccEmail;
    }

    await resend.emails.send(emailPayload);

    // Log the submission for debugging
    console.log("Contact form submission sent successfully:", { name, email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

