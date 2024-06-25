// pages/api/sendEbook.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME_2;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD_2;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL_2;

  const { email } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    // Send confirmation email to the site owner
    await transporter.sendMail({
      from: `"Relay Digital" <info@relaydigital.agency>`, // Alias
      to: myEmail,
      replyTo: email,
      subject: `Ebook request from ${email}`,
      html: `
        <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
          <h1>Ebook Request Notification</h1>
          <p>An ebook request was made by the following email:</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
      `,
    });

    // Send ebook email to the user
    await transporter.sendMail({
      from: `"Relay Digital" <info@relaydigital.agency>`, // Alias
      to: email, // Note this change to send to the submitter
      subject: `Your Free Ebook Download`,
      html: `
        <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
          <h1>Thank you for requesting our ebook!</h1>
          <p>Please find the download link below:</p>
          <p><a href="https://drive.google.com/uc?export=download&id=1ejqyBmSynDZcevGNv3aiKaROETa2JAmV">Download your ebook</a></p>
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
