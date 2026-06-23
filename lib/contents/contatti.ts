import { Briefcase1Duotone, FileMultipleDuotone, KnifeFork1Duotone } from '@lineiconshq/free-icons'

export const contattiContent = {
  needs: {
    sectionTitle: 'Di cosa hai bisogno?',
    description: 'Prenota o scrivici: siamo a tua disposizione.',
    blocks: [
      {
        title: 'Prenotazioni',
        description: 'Scegli giorno e orario, è comodo, facile e veloce',
        ctaText: 'Prenota ora!',
        ctaIcon: KnifeFork1Duotone,
        ctaLink: '/prenota',
      },
      {
        title: 'Coworking & Meeting',
        description: 'Gruppi, aziende, associazioni: cercate un luogo dove riunirvi?',
        ctaText: 'Prenota ora!',
        ctaIcon: Briefcase1Duotone,
        ctaLink: '/prenota',
      },
      {
        title: 'Lavora con noi',
        description: 'Entra a far parte del team',
        ctaText: 'Invia CV!',
        ctaIcon: FileMultipleDuotone,
        ctaLink: '/prenota',
      },
    ],
  },
  orari: {
    title: 'Orari',
  },
  formContatti: {
    subTitle: 'Come possiamo aiutarti?',
    title: 'Contattaci qui',
    description: 'Per qualsiasi richiesta, scrivici qui un messaggio, ti risponderemo il prima possibile.',
  },
} as const
