export const runtime = "nodejs";
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  // Check if environment variables are set
  if (!process.env.CONTACT_EMAIL || !process.env.CONTACT_EMAIL_PASS) {
    return NextResponse.json({ error: "Server configuration error: Missing email credentials." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name} (${email})`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Mail send error:", err);
    return NextResponse.json({ 
      error: "Failed to send email.", 
      details: err.message || "Unknown error" 
    }, { status: 500 });
  }
}