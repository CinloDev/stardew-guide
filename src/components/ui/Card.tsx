import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function Card({ title, className, children }: CardProps) {
  return (
    <article className={cn("panel", className)}>
      {title ? <h3 className="mb-3 text-lg font-semibold text-amber-950">{title}</h3> : null}
      {children}
    </article>
  );
}
