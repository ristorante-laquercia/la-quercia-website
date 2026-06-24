'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CalendarDaysDuotone } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const menuLinks = [
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Cucina', href: '/cucina' },
  { label: 'Birreria', href: '/birreria' },
  { label: 'Esperienze', href: '/esperienze' },
  {
    label: 'Menu',
    href: 'https://drive.google.com/file/d/1ioDqAh1YH6W5PPM4OCMO6iOGwhH9gmyr/view?usp=sharing',
  },
  { label: 'Contatti', href: '/contatti' },
]

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="max-mdp:hidden">
      <ul className="flex items-center gap-x-4 [&_li]:text-lg font-light [&_li_a]:hover:no-underline [&_li_a]:hover:text-lq-senape">
        {menuLinks.map((item, index) =>
          index === 4 ? (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener" className={cn(pathname === item.href && 'text-lq-senape')}>
                {item.label}
              </a>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href} className={cn(pathname === item.href && 'text-lq-senape')}>
                {item.label}
              </Link>
            </li>
          ),
        )}
        <Button asChild variant="custom" color="green">
          <a
            href="https://laquercia1.plateform.app/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className="mdp:text-sm"
          >
            <Lineicons icon={CalendarDaysDuotone} size={48} className="mdp:size-5" />
            Prenota
          </a>
        </Button>
      </ul>
    </nav>
  )
}
