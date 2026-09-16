import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and project message." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "eba2f827-85ce-4ffd-9e58-aac34c9c536b";
    const recipientEmail = "studioayladesign@gmail.com";
    let emailDispatched = false;
    let dispatchError: string | null = null;

    // METHOD 1: Web3Forms Dispatch
    if (accessKey) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            subject: `Studio Ayla Inquiry: ${name} — ${projectType || "General"}`,
            from_name: `Studio Ayla Web (${name})`,
            name: name,
            email: email,
            phone: phone || "Not provided",
            project_type: projectType || "Residential",
            message: message,
          }),
        });

        const web3Data = await web3Response.json();
        console.log("Web3Forms Response:", web3Data);

        if (web3Response.ok && web3Data.success) {
          emailDispatched = true;
        } else {
          dispatchError = web3Data.message || "Web3Forms submission failed";
          console.error("Web3Forms API error:", web3Data);
        }
      } catch (w3Err: unknown) {
        dispatchError = w3Err instanceof Error ? w3Err.message : "Network error contacting email service";
        console.error("Web3Forms network error:", w3Err);
      }
    } else {
      console.warn("Notice: WEB3FORMS_ACCESS_KEY environment variable is not defined in this deployment.");
    }

    // METHOD 2: Gmail App Password via Nodemailer (Fallback if configured)
    if (!emailDispatched && process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Studio Ayla Inquiry" <${process.env.GMAIL_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `✨ New Inquiry: ${name} — ${projectType || "Interior Design"}`,
          html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF8F5; padding: 32px; border: 1px solid #EAE4D9; color: #1C1B1A;">
              <div style="border-bottom: 2px solid #C5A880; padding-bottom: 16px; margin-bottom: 24px;">
                <h1 style="font-size: 20px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; color: #1C1B1A;">STUDIO AYLA</h1>
                <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #8E8880; margin: 4px 0 0 0;">New Project Inquiry Received</p>
              </div>

              <div style="background-color: #FFFFFF; padding: 24px; border: 1px solid #EAE4D9; margin-bottom: 24px;">
                <p style="margin: 0 0 12px 0; font-size: 14px;"><strong>Client Name:</strong> ${name}</p>
                <p style="margin: 0 0 12px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1C1B1A;">${email}</a></p>
                <p style="margin: 0 0 12px 0; font-size: 14px;"><strong>Phone / WhatsApp:</strong> ${phone || "Not provided"}</p>
                <p style="margin: 0 0 12px 0; font-size: 14px;"><strong>Project Typology:</strong> <span style="background-color: #F3EFEA; padding: 3px 8px; border-radius: 3px; font-size: 12px;">${projectType || "Residential"}</span></p>
              </div>

              <div style="margin-bottom: 24px;">
                <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; color: #8E8880; margin-bottom: 8px;">Project Vision & Details:</h3>
                <div style="background-color: #FFFFFF; padding: 20px; border-left: 3px solid #C5A880; font-size: 14px; line-height: 1.6; color: #3E3B37; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="border-top: 1px solid #EAE4D9; padding-top: 16px; font-size: 11px; color: #8E8880; text-align: center;">
                You can reply directly to this email to reach <strong>${name}</strong> at ${email}.
              </div>
            </div>
          `,
        });

        emailDispatched = true;
        console.log("Email dispatched successfully via Gmail Nodemailer.");
      } catch (mailErr) {
        console.error("Nodemailer dispatch error:", mailErr);
      }
    }

    // If both failed and were supposed to be configured, let the client know
    if (!emailDispatched && !accessKey && !process.env.GMAIL_USER) {
      console.warn("No email service is currently configured on this environment.");
    }

    return NextResponse.json(
      {
        success: true,
        dispatched: emailDispatched,
        message: "Thank you for reaching out to Studio Ayla. We will review your project brief and be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach out directly to studioayladesign@gmail.com." },
      { status: 500 }
    );
  }
}
