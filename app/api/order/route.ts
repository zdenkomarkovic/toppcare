import { NextResponse } from "next/server";
import type { OrderFormData } from "@/types/order";
import { ORDER_EMAIL } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const data: OrderFormData = await req.json();

    if (!data.items?.length || !data.firstName || !data.phone || !data.address) {
      return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
    }


    const itemsHtml = data.items
      .map(
        (item) => `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #f0f0f0;">
            ${item.image ? `<img src="${item.image}" width="60" height="60" style="border-radius:8px;object-fit:cover;" />` : ""}
          </td>
          <td style="padding:10px;border-bottom:1px solid #f0f0f0;font-weight:600;">${item.title}</td>
          <td style="padding:10px;border-bottom:1px solid #f0f0f0;text-align:center;">${item.quantity}</td>
          <td style="padding:10px;border-bottom:1px solid #f0f0f0;text-align:right;">${item.price.toLocaleString("sr-RS")} RSD</td>
          <td style="padding:10px;border-bottom:1px solid #f0f0f0;text-align:right;font-weight:700;">${(item.price * item.quantity).toLocaleString("sr-RS")} RSD</td>
        </tr>
      `
      )
      .join("");

    const orderNumber = `KC-${Date.now().toString().slice(-6)}`;

    const html = `
      <!DOCTYPE html>
      <html lang="sr">
      <head><meta charset="UTF-8"><title>Nova porudžbina</title></head>
      <body style="font-family:sans-serif;background:#f9f9f9;margin:0;padding:0;">
        <div style="max-width:640px;margin:30px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);">

          <div style="background:#1a1a1a;padding:32px;text-align:center;">
            <h1 style="color:#c4788c;margin:0;font-size:28px;letter-spacing:-1px;">KARSEELL SRBIJA</h1>
            <p style="color:#888;margin:8px 0 0;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Nova porudžbina</p>
          </div>

          <div style="padding:32px;">
            <div style="background:#fff9f0;border:1px solid #f0e0b0;border-radius:12px;padding:16px 20px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
              <span style="font-size:24px;">📦</span>
              <div>
                <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Broj porudžbine</p>
                <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:#1a1a1a;">${orderNumber}</p>
              </div>
            </div>

            <h2 style="font-size:16px;font-weight:700;color:#1a1a1a;margin-bottom:12px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">
              Podaci kupca
            </h2>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr><td style="padding:6px 0;color:#888;font-size:13px;width:40%;">Ime i prezime</td><td style="padding:6px 0;font-weight:600;font-size:13px;">${data.firstName} ${data.lastName}</td></tr>
              <tr><td style="padding:6px 0;color:#888;font-size:13px;">Telefon</td><td style="padding:6px 0;font-weight:600;font-size:13px;">${data.phone}</td></tr>
              ${data.email ? `<tr><td style="padding:6px 0;color:#888;font-size:13px;">Email</td><td style="padding:6px 0;font-weight:600;font-size:13px;">${data.email}</td></tr>` : ""}
              <tr><td style="padding:6px 0;color:#888;font-size:13px;">Adresa</td><td style="padding:6px 0;font-weight:600;font-size:13px;">${data.address}</td></tr>
              <tr><td style="padding:6px 0;color:#888;font-size:13px;">Grad</td><td style="padding:6px 0;font-weight:600;font-size:13px;">${data.city}${data.postalCode ? ` ${data.postalCode}` : ""}</td></tr>
              ${data.note ? `<tr><td style="padding:6px 0;color:#888;font-size:13px;">Napomena</td><td style="padding:6px 0;font-weight:600;font-size:13px;">${data.note}</td></tr>` : ""}
            </table>

            <h2 style="font-size:16px;font-weight:700;color:#1a1a1a;margin-bottom:12px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">
              Poručeni artikli
            </h2>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <thead>
                <tr style="background:#f9f9f9;">
                  <th style="padding:10px;text-align:left;font-size:12px;color:#888;text-transform:uppercase;"></th>
                  <th style="padding:10px;text-align:left;font-size:12px;color:#888;text-transform:uppercase;">Naziv</th>
                  <th style="padding:10px;text-align:center;font-size:12px;color:#888;text-transform:uppercase;">Kol.</th>
                  <th style="padding:10px;text-align:right;font-size:12px;color:#888;text-transform:uppercase;">Cena</th>
                  <th style="padding:10px;text-align:right;font-size:12px;color:#888;text-transform:uppercase;">Ukupno</th>
                </tr>
              </thead>
              <tbody>${itemsHtml}</tbody>
            </table>

            <div style="background:#1a1a1a;border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
              <span style="color:#c4788c;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">UKUPNO ZA NAPLATU</span>
              <span style="color:#fff;font-size:24px;font-weight:800;">${data.total.toLocaleString("sr-RS")} RSD</span>
            </div>

            <div style="margin-top:16px;background:#f0fff4;border:1px solid #c6f6d5;border-radius:10px;padding:14px 18px;">
              <p style="margin:0;font-size:13px;color:#276749;">💚 <strong>Plaćanje pouzećem</strong> – kupac plaća kuriru pri preuzimanju.</p>
            </div>
          </div>

          <div style="background:#f9f9f9;padding:20px;text-align:center;border-top:1px solid #f0f0f0;">
            <p style="margin:0;font-size:12px;color:#aaa;">Karseell Srbija · Topp Care · Beograd, Srbija</p>
            <p style="margin:4px 0 0;font-size:11px;color:#bbb;">PIB: 110338741 · MB: 21339229</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: process.env.SITE_MAIL_SENDER, Name: "Karseell Srbija – Narudžbine" },
            To: [{ Email: ORDER_EMAIL }],
            Subject: `Nova porudžbina ${orderNumber} – ${data.firstName} ${data.lastName} (${data.phone})`,
            HTMLPart: html,
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Mailjet error: ${err}`);
    }

    return NextResponse.json({ success: true, orderNumber });
  } catch (err) {
    console.error("Order error:", err);
    return NextResponse.json(
      { error: "Greška pri obradi porudžbine." },
      { status: 500 }
    );
  }
}
