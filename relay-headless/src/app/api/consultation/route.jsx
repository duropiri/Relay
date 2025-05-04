import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api
export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const { website, name, email, social, socialUsername, monthly_visits, referral_source } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    // Send email to site owner
    await transporter.sendMail({
      from: `"Relay Digital" <relaydigitalyyc@gmail.com>`, // Alias
      to: myEmail,
      replyTo: email,
      subject: `Free consultation request from ${email}`,
      html: `
          <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
            <h1>Website Consultation Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Website:</strong> ${website}</p>
            <p><strong>Social:</strong> ${social} @${socialUsername}</p>
            <p><strong>Monthly Visits:</strong> ${monthly_visits}</p>
            <p><strong>Referral Source:</strong> ${referral_source}</p>
          </div>
        `,
    });

    // Send confirmation email to the submitter
    await transporter.sendMail({
      from: `"Relay Digital" <relaydigitalyyc@gmail.com>`, // Alias
      to: email, // Note this change to send to the submitter
      subject: `Confirmation of Your Website Consultation Request`,
      html: `
          <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
            <h1>Thank You for Your Website Consultation Request</h1>
            <p>Hello ${name},</p>
            <p>Thank you for requesting a free consultation. We have received your request and will get back to you as soon as possible. Here is a copy of your submission:</p>
            <p><strong>Website:</strong> ${website}</p>
            <p><strong>Social:</strong> ${social} @${socialUsername}</p>
            <p><strong>Monthly Visits:</strong> ${monthly_visits}</p>
            <p><strong>Referral Source:</strong> ${referral_source}</p>
            <p>You can schedule your free consultation using the following link:</p>
            <p><a href="https://calendly.com/relaydigitalyyc/discovery">Book your consultation</a></p>
            <p>Best regards,</p>
            <p>Relay Digital</p>
          </div>
        `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
