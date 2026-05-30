"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

declare function gtag(...args: unknown[]): void;

export default function GtagConversion() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "";

  useEffect(() => {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-18187925113/USRJCNvD9bIcEPns1uBD",
        value: 1.0,
        currency: "USD",
        transaction_id: orderNumber,
      });
    }
  }, [orderNumber]);

  return null;
}
