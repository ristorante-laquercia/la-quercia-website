import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={cn("container mx-auto max-w-7xl px-5", className)}>
      {children}
    </div>
  );
}
