import { Badge } from "@/components/ui/Badge";

interface ProgressBadgeProps {
  current: number;
  total: number;
  label: string;
}

export function ProgressBadge({ current, total, label }: ProgressBadgeProps) {
  const percentage = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <Badge>
      {label}: {current}/{total} ({percentage}%)
    </Badge>
  );
}
