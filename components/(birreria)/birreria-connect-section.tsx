import { CalendarDaysDuotone, FacebookOutlined, InstagramOutlined, WhatsappOutlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import { birreriaContent } from '@/lib/contents/birreria'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealGroup, RevealItem } from '@/components/ui/reveal'

const { connect } = birreriaContent

const iconMap = {
  instagram: InstagramOutlined,
  facebook: FacebookOutlined,
  whatsapp: WhatsappOutlined,
  booking: CalendarDaysDuotone,
} as const

const buttonColorMap = {
  instagram: 'senape',
  facebook: 'senape',
  whatsapp: 'green',
  booking: 'green',
} as const satisfies Record<string, 'senape' | 'green'>

export function BirreriaConnectSection() {
  const titleId = 'birreria-connect-title'
  const descriptionId = 'birreria-connect-description'

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-lq-dark py-24 lg:py-32"
    >
      {/* Grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-200 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.7823 0.162 79.7 / 0.07) 0%, transparent 55%)',
        }}
      />

      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden select-none overflow-hidden text-center font-gabarito font-black leading-none text-white/2.5 lg:block"
        style={{
          fontSize: 'clamp(6rem, 14vw, 18rem)',
          letterSpacing: '-0.04em',
        }}
      >
        SEGUICI
      </span>

      <Container className="relative z-10">
        <RevealGroup className="flex flex-col items-center gap-y-5 text-center" stagger={0.12} amount={0.25}>
          <RevealItem preset="fade-up" distance={16} duration={1}>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-lq-orange">{connect.eyebrow}</span>
          </RevealItem>

          <RevealItem preset="fade-up" distance={22} duration={1.05}>
            <h2
              id={titleId}
              className="max-w-2xl font-gabarito text-5xl font-black text-white lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {connect.title}
            </h2>
          </RevealItem>

          <RevealItem preset="fade-up" distance={24} duration={1.1} className="max-w-lg">
            <p id={descriptionId} className="text-lg leading-relaxed text-white/55">
              {connect.description}
            </p>
          </RevealItem>

          <RevealItem preset="fade-up" distance={26} duration={1.15}>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {connect.links.map((link) => {
                const icon = iconMap[link.platform as keyof typeof iconMap]
                const color = buttonColorMap[link.platform as keyof typeof buttonColorMap]
                return (
                  <Button key={link.platform} asChild variant="custom" color={color}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Lineicons icon={icon} size={48} className="size-5" />
                      {link.label}
                    </a>
                  </Button>
                )
              })}
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  )
}
