import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      slot="container"
      className={cn(
        "container mx-auto max-w-7xl px-8 lg:px-10 xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}

function DiagonalSection({
  children,
  className,
  diagonalSide = "right",
  cutClassName = "bg-white",
  containerClassName,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  diagonalSide?: "right" | "left";
  cutClassName?: string;
  containerClassName?: string;
}>) {
  return (
    <section
      className={cn(
        "diagonal-section relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-visible",
        className,
      )}
    >
      <Container
        className={cn("relative z-10 pt-24 pb-20", containerClassName)}
      >
        {children}
      </Container>
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
