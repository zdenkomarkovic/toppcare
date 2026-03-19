import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-[#c4788c] hover:bg-[#a8607a] text-white shadow-sm hover:shadow":
            variant === "primary",
          "border-2 border-[#c4788c] text-[#c4788c] hover:bg-[#c4788c] hover:text-white":
            variant === "outline",
          "text-gray-700 hover:text-[#c4788c] hover:bg-rose-50":
            variant === "ghost",
          "text-sm px-4 py-2": size === "sm",
          "px-6 py-3": size === "md",
          "text-lg px-8 py-4": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
