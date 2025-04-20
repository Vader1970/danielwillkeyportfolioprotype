import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "daniel.wilkey@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
