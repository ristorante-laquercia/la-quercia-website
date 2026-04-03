import { MobileMenuButton } from '@/components/(header)/mobile-menu-button'
import { NavbarLogo } from '@/components/(header)/navbar-logo'

import { DesktopNav } from './desktop-nav'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between h-full">
      <NavbarLogo />
      <DesktopNav />
      <MobileMenuButton />
    </nav>
  )
}
