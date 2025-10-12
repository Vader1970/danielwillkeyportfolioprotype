import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

/**
 * Verify reCAPTCHA token with Google's API
 */
async function verifyRecaptcha(token: string, secretKey: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data["error-codes"]);
      return {
        success: false,
        error: data["error-codes"]?.[0] || "Verification failed",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      error: "Failed to verify reCAPTCHA",
    };
  }
}

export async function POST(req: Request) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return NextResponse.json({ message: "Server error: Missing API key" }, { status: 500 });
  }

  if (!RECAPTCHA_SECRET_KEY) {
    console.error("Missing RECAPTCHA_SECRET_KEY");
    return NextResponse.json({ message: "Server error: Missing reCAPTCHA key" }, { status: 500 });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const data = await req.json();
    const { name, email, message, recaptchaToken } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json({ message: "reCAPTCHA verification required" }, { status: 400 });
    }

    // Verify reCAPTCHA token with Google
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, RECAPTCHA_SECRET_KEY);

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Send email to me
    await resend.emails.send({
      from: "Contact Form <contact@danwilkeyportfolio.com>",
      to: "daniel.wilkey@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
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
    });

    // Send confirmation email to the submitter
    await resend.emails.send({
      from: "Daniel Wilkey <contact@danwilkeyportfolio.com>",
      to: email,
      subject: "Thank you for contacting me",
      text: `
Hi ${name},

Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.

Here's a copy of your message:
${message}

Best regards,
Daniel Wilkey

---
Connect with me:
Portfolio: https://www.danwilkeyportfolio.com
LinkedIn: https://www.linkedin.com/in/danielwilkey/
GitHub: https://github.com/Vader1970
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting me</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your message:</h3>
            <p style="white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <p>Best regards,<br>Daniel Wilkey</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <div>
              <h3 style="color: #333; margin-bottom: 15px;">Connect with me:</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px;">
                  <a href="https://www.danwilkeyportfolio.com" style="color: #007bff; text-decoration: none;">🌐 Portfolio</a>
                </li>
                <li style="margin-bottom: 10px;">
                  <a href="https://www.linkedin.com/in/danielwilkey/" style="color: #007bff; text-decoration: none;">💼 LinkedIn</a>
                </li>
                <li style="margin-bottom: 10px;">
                  <a href="https://github.com/Vader1970" style="color: #007bff; text-decoration: none;">👨‍💻 GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
