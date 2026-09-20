import { cn } from "@/lib/utils";

interface VerticalMarqueeProps {
  items: React.ReactNode[];
  direction?: "up" | "down";
  durationSeconds?: number;
  className?: string;
}

/**
 * Two stacked copies of `items` translate by exactly 50% of the track height,
 * looping seamlessly. Pure CSS — no JS, GPU-cheap, pauses under prefers-reduced-motion.
 */
export function VerticalMarquee({
  items,
  direction = "up",
  durationSeconds = 24,
  className,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]",
        "[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down",
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {items.map((item, i) => (
          <div key={`a-${i}`}>{item}</div>
        ))}
        {items.map((item, i) => (
          <div key={`b-${i}`} aria-hidden>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
