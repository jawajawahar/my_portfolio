import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32", className)}
    >
      {children}
    </section>
  );
}
