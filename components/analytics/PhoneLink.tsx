"use client";

import { type ReactNode } from "react";

declare function gtag(...args: unknown[]): void;

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function PhoneLink({ href, className, children }: Props) {
  function handleClick() {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-18187925113/-z2OCJLEnLYcEPns1uBD",
        value: 1.0,
        currency: "USD",
      });
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
