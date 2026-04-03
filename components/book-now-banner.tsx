import Lineicons from '@lineiconshq/react-lineicons'
import { CalendarDaysDuotone } from '@lineiconshq/free-icons'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function BookNowBanner() {
  return (
    <section className="w-full bg-lq-green py-32 lg:py-44">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <h2 className="font-gabarito text-5xl font-black lg:text-7xl">Prenota il tuo tavolo</h2>
            <p className="mx-auto max-w-2xl text-lg">
              Organizza la tua prossima serata alla Quercia: cucina, birre e atmosfera nel momento giusto.
            </p>
          </div>

          {/* TODO: sostituire con il link esterno reale di prenotazione */}
          <Button asChild variant="custom" color="white" size="lg">
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
