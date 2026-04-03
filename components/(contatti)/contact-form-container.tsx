import Image from 'next/image'
import Lineicons from '@lineiconshq/react-lineicons'
import {
  Envelope1Duotone,
  FacebookOutlined,
  InstagramOutlined,
  MapMarker1Duotone,
  WhatsappOutlined,
} from '@lineiconshq/free-icons'

import { contattiContent } from '@/lib/contents/contatti'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'

import demoImage from '@/public/assets/demo/restaurant-interior-2.jpg'

export function ContactFormContainer() {
  const hoursTitleId = 'contact-hours-title'
  const socialNavTitleId = 'contact-social-links-title'
  const addressTitleId = 'contact-address-title'

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby={hoursTitleId}>
      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      {/* Decorative display word */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-0.05em] z-0 hidden select-none font-gabarito text-[clamp(10rem,18vw,22rem)] font-black leading-none text-lq-green/4 lg:block"
        style={{ letterSpacing: '-0.04em' }}
      >
        SCRIVICI
      </span>
      <Container className="relative z-10 grid grid-cols-1 mdp:grid-cols-2 py-24 gap-y-32 mdp:gap-x-20 lg:gap-x-32 lg:pb-48">
        <div className="order-2 mdp:order-1 max-w-lg">
          <ContactForm />
        </div>

        <div className="flex gap-y-6 flex-col order-1 mdp:order-2">
          <Image
            src={demoImage.src}
            alt="Interno del ristorante La Quercia"
            width={demoImage.width}
            height={demoImage.height}
            placeholder="blur"
            blurDataURL={demoImage.blurDataURL}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="max-w-full rounded-[1.75rem]"
          />
          <div className="max-w-lg">
            <h2 id={hoursTitleId}>{contattiContent.orari.title}</h2>
            <table className="mt-4 w-full text-left text-lq-dark">
              <caption className="sr-only">Orari di apertura</caption>
              <tbody>
                <tr>
                  <th scope="row" className="py-1 pr-6 font-semibold">
                    Lunedì
                  </th>
                  <td className="py-1">19:00 - 00:00</td>
                </tr>
                <tr>
                  <th scope="row" className="py-1 pr-6 font-semibold">
                    Martedì
                  </th>
                  <td className="py-1">Chiuso</td>
                </tr>
                <tr>
                  <th scope="row" className="py-1 pr-6 font-semibold">
                    Mercoledì - Domenica
                  </th>
                  <td className="py-1">19:00 - 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-y-6">
            <nav aria-labelledby={socialNavTitleId} className="max-w-lg">
              <h3 id={socialNavTitleId} className="sr-only">
                Canali social e contatti rapidi
              </h3>
              <ul className="w-full flex items-center gap-x-4 border-y border-lq-green/20 py-2">
                <li>
                  <Button variant={'ghost'} asChild>
                    <a
                      href="https://www.facebook.com/laquerciatermoli"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Seguici su Facebook"
                      className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
                    >
                      <Lineicons
                        icon={FacebookOutlined}
                        size={48}
                        color="var(--lq-green)"
                        className="size-7"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} asChild>
                    <a
                      href="https://www.instagram.com/laquerciatermoli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Seguici su Instagram"
                      className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
                    >
                      <Lineicons
                        icon={InstagramOutlined}
                        size={48}
                        color="var(--lq-green)"
                        className="size-7"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} asChild>
                    <a
                      href="https://wa.me/+393791269699?text=Vorrei%20ricevere%20maggiori%20informazioni"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contattaci su WhatsApp"
                      className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
                    >
                      <Lineicons
                        icon={WhatsappOutlined}
                        size={48}
                        color="var(--lq-green)"
                        className="size-7"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} asChild>
                    <a
                      href="mailto:info@ristorante-laquercia.it"
                      aria-label="Scrivici una email"
                      className="has-[svg]:p-0 bg-transparent hover:bg-transparent hover:[&_svg]:opacity-60 transition-all duration-200 ease-in-out"
                    >
                      <Lineicons
                        icon={Envelope1Duotone}
                        size={48}
                        color="var(--lq-green)"
                        className="size-7"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>

            <div className="flex items-start gap-x-3 max-w-lg">
              <Lineicons
                icon={MapMarker1Duotone}
                size={40}
                color="var(--lq-green)"
                className="size-6 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="text-lq-dark">
                <h3 id={addressTitleId} className="text-lg">
                  Indirizzo
                </h3>
                <address className="not-italic flex flex-col gap-y-1">
                  <span>Via Elba, 1 | 86039 Termoli</span>
                  <span className="flex flex-col">
                    <a href="tel:+390875707211" className="w-fit">
                      Telefono: 0875.707211
                    </a>
                    <a href="tel:+393791269699" className="w-fit">
                      Mobile: 379.1269699
                    </a>
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
