import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-900",
        className,
      )}
    >
      {children}
    </span>
  );
}
