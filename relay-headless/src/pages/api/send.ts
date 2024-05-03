"use client";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { renderToString } from "react-dom/server"; // Make sure to import this for server-side rendering of React components

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  console.log(body); // Log the request body for debugging
  const { name, email, phone, website, message } = body;
  const emailContent = renderToString(
    EmailTemplate({
      name,
      email,
      phone,
      website,
      message,
    })
  );
  const { data, error } = await resend.emails.send({
    from: "Relay Digital <info@relaydigital.agency>",
    to: ["duro.dp02@gmail.com"],
    subject: "New Message Received",
    html: emailContent,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req);
//   try {
//     // Check if request body exists
//     if (!req.body) {
//       throw new Error("Request body is empty");
//     }
//     // Parse the request body
//     const body = await req.json();
//     console.log(body); // Log the request body for debugging
//     const { name, email, phone, website, message } = body;
//     const emailContent = renderToString(
//       EmailTemplate({
//         name,
//         email,
//         phone,
//         website,
//         message,
//       })
//     );
//     const response = await resend.emails.send({
//       from: "Relay Digital <info@relaydigital.agency>",
//       to: ["duro.dp02@gmail.com"],
//       subject: "New Message Received",
//       html: emailContent,
//     });

//     return new NextResponse(JSON.stringify({ success: true, data: response }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error handling POST:", error);
//     return new NextResponse(JSON.stringify({ error: error.toString() }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// };
