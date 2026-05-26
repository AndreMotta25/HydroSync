import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variants = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container shadow-lg shadow-primary/20",
  glass:
    "bg-surface/90 backdrop-blur-md border border-primary/10 text-primary font-bold shadow-lg",
  dark: "bg-on-surface text-surface hover:bg-primary",
  ghost: "text-on-surface/60 hover:text-primary",
};

const sizes = {
  sm: "px-5 py-2 text-sm min-h-[36px]",
  md: "px-8 py-2.5 text-sm min-h-[44px]",
  lg: "px-12 py-5 text-[20px] min-h-[56px] font-bold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all active:scale-95 cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  ),
);
Button.displayName = "Button";
