import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "dark" | "green";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full",
        {
          "bg-[#c4788c] text-white": variant === "gold",
          "bg-[#6b2d45] text-white": variant === "dark",
          "bg-green-100 text-green-700": variant === "green",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
