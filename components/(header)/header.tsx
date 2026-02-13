import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/(header)/navbar";

export function Header() {
  return (
    <header className="h-(--navbar-height) backdrop-blur-sm bg-lq-dark fixed top-0 left-0 right-0 z-50">
      <Container className="h-full">
        <Navbar />
      </Container>
    </header>
  );
}
