import Lineicons from '@lineiconshq/react-lineicons'
import { HeartOutlined } from '@lineiconshq/free-icons'

import { Container } from '@/components/ui/container'

export function SubFooter() {
  return (
    <div className="col-span-12 bg-[oklch(0.27_0_0)]">
      <Container className="py-6 grid-cols-12 gap-y-4 grid text-sm text-center xl:text-xs">
        <div className="col-span-12 space-y-2 xl:col-span-8 xl:items-center xl:flex xl:gap-x-4 xl:space-y-0">
          <div className="flex flex-col mdp:flex-row mpd:items-center mdp:justify-center mdp:gap-x-4 xl:justify-start xl:gap-x-2">
            {new Date().getFullYear()} All Right Reserved
            <span> MPM di Iuliano Tiziana - Via Elba, 1 - Termoli (CB)</span>
            <span>Partita IVA:IT01516690706</span>
          </div>
          <div>Privacy & Cookie Policy</div>
        </div>

        <div className="col-span-12 flex items-center justify-center gap-x-1 text-xs xl:col-span-4 xl:justify-end">
          Made with <Lineicons icon={HeartOutlined} size={12} color="#f6dc00" /> in a{' '}
          <a
            href="https://www.creactiveroom.it"
            target="_blank"
            rel="noopener"
            className="hover:no-underline hover:text-[#f6dc00]"
          >
            Creactive | Room
          </a>
        </div>
      </Container>
    </div>
  )
}
