import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  /** "hero" is larger/brighter; "subtle" is a quieter accent for lower sections. */
  variant?: "hero" | "subtle";
}

/** Pure-CSS animated gradient blobs. No JS, GPU-cheap (transform/opacity only). */
export function AuroraBackground({ className, variant = "hero" }: AuroraBackgroundProps) {
  const isSubtle = variant === "subtle";

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className={cn(
          "animate-aurora-a absolute left-1/4 top-[-10%] rounded-full bg-accent blur-[110px]",
          isSubtle ? "h-72 w-72 opacity-10" : "h-[32rem] w-[32rem] opacity-30",
        )}
      />
      <div
        className={cn(
          "animate-aurora-b absolute right-[-5%] top-1/3 rounded-full bg-accent-2 blur-[110px]",
          isSubtle ? "h-64 w-64 opacity-10" : "h-[28rem] w-[28rem] opacity-25",
        )}
      />
      <div
        className={cn(
          "animate-aurora-c absolute bottom-[-10%] left-1/3 rounded-full bg-accent-3 blur-[110px]",
          isSubtle ? "h-56 w-56 opacity-10" : "h-96 w-96 opacity-20",
        )}
      />
    </div>
  );
}
