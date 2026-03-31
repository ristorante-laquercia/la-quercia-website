import Lineicons from '@lineiconshq/react-lineicons'
import { CalendarDaysDuotone } from '@lineiconshq/free-icons'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function BookNowBanner() {
  return (
    <section className="w-full  bg-lq-green py-24">
      <Container className="grid grid-cols-1 gap-8 px-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h2>Prenota il tuo tavolo</h2>
          <p>Organizza la tua prossima serata alla Quercia: cucina, birre e atmosfera nel momento giusto.</p>
        </div>

        <div className="lg:justify-self-end">
          {/* TODO: sostituire con il link esterno reale di prenotazione */}
          <Button asChild variant="custom" color="white">
            <a href="https://example.com/prenotazioni" target="_blank" rel="noopener noreferrer">
              <Lineicons icon={CalendarDaysDuotone} size={48} className="size-7" />
              Prenota ora
            </a>
          </Button>
        </div>
      </Container>
    </section>
  )
}
