import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-amber-700 text-amber-50 hover:bg-amber-600",
  secondary: "bg-emerald-700 text-emerald-50 hover:bg-emerald-600",
  ghost: "bg-transparent text-amber-900 hover:bg-amber-100",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
