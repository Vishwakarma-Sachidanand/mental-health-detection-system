import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/cn";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "card" | "chart" | "table" | "hero";
}

export function LoadingSkeleton({
  className,
  variant = "card",
}: LoadingSkeletonProps) {
  if (variant === "hero") {
    return (
      <div className={cn("space-y-6", className)}>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-16 w-full max-w-2xl" />
        <Skeleton className="h-6 w-full max-w-xl" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-36" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
    );
  }

  if (variant === "chart") {
    return (
      <div className={cn("glass-card p-6 space-y-4", className)}>
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-[250px] w-full" />
      </div>
    );
  }

  if (variant === "table") {
    return (
      <div className={cn("glass-card p-6 space-y-3", className)}>
        <Skeleton className="h-6 w-48" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("glass-card p-6 space-y-4", className)}>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}
