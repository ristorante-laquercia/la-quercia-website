import Image from "next/image";

import { MobileMenuButton } from "@/components/(header)/mobile-menu-button";

import logo from "@/public/assets/svg/logo.svg";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between h-full">
      <div className="relative h-[calc(var(--navbar-height)*1.5)] w-[calc(var(--navbar-height)*1.5)] self-start">
        <Image
          src={logo}
          alt="Logo Ristobirreria La Quercia"
          width={200}
          height={200}
          priority
          className="size-full rounded-b-full bg-lq-dark p-2 shadow-lg"
        />
      </div>

      <nav className="max-mdp:hidden">desktop navigation here</nav>

      <MobileMenuButton />
    </nav>
  );
}
