import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={cn("container mx-auto max-w-7xl px-5", className)}>
      {children}
    </div>
  );
}

function DiagonalSection({
  children,
  className,
  diagonalSide = "right",
  cutClassName = "bg-white",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  diagonalSide?: "right" | "left";
  cutClassName?: string;
}>) {
  return (
    <section
      className={cn(
        "diagonal-section relative isolate left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-visible",
        className,
      )}
    >
      <Container className="relative z-10 py-24 pb-20">{children}</Container>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24",
          cutClassName,
          diagonalSide === "left"
            ? "[clip-path:polygon(0_0,0_100%,100%_100%)]"
            : "[clip-path:polygon(0_100%,100%_0,100%_100%)]",
        )}
      />
    </section>
  );
}

export { Container, DiagonalSection };
