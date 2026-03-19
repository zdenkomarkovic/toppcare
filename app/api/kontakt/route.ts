import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const { ime, email, telefon, poruka } = await req.json();

    if (!ime || !email || !poruka) {
      return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
    }

    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: process.env.SITE_MAIL_SENDER, Name: "Karseell Srbija – Kontakt" },
            To: [{ Email: CONTACT_EMAIL }],
            Subject: `Nova poruka od ${ime}`,
            HTMLPart: `
              <p><strong>Ime i prezime:</strong> ${ime}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${telefon ? `<p><strong>Telefon:</strong> ${telefon}</p>` : ""}
              <p><strong>Poruka:</strong><br/>${poruka.replace(/\n/g, "<br/>")}</p>
            `,
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Mailjet error: ${err}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kontakt error:", err);
    return NextResponse.json({ error: "Greška pri slanju poruke." }, { status: 500 });
  }
}
