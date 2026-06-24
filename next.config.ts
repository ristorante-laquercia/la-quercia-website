import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async redirects() {
    return [
      {
        source: '/storia-e-valori/',
        destination: '/chi-siamo',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-le-specialita/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-le-specialita/primi-piatti/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-le-specialita/secondi-piatti/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-le-specialita/le-pizze/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-le-specialita/senza-glutine/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/cavatelli-la-quercia/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/molistrong/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/traditori-alla-bock/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/cavatelli-al-fiore-di-luppolo/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/cavatelli-crema-di-tartufo/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/cavatelli-principe-di-baviera/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/stinco-alla-birra/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/ribs-di-maiale-in-salsa-barbeque/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/pampanella/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/tagliata/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/lollipop-alla-pils-malastrana/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/pizza-tricolore/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/pizza-del-pecoraro/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/pizza-2-formaggi/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/pizza-zuccosa/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/prodotto/pizza-la-dolce-freschezza/',
        destination: '/cucina',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-le-specialita/la-birra/',
        destination: '/birreria',
        permanent: true,
      },
      {
        source: '/prodotto/malastrana-original-pils/',
        destination: '/birreria',
        permanent: true,
      },
      {
        source: '/prodotto/malastrana-dark/',
        destination: '/birreria',
        permanent: true,
      },
      {
        source: '/prodotto/malastrana-bock/',
        destination: '/birreria',
        permanent: true,
      },
      {
        source: '/ristorante-la-quercia-contatti/',
        destination: '/contatti',
        permanent: true,
      },
      {
        source: '/cookie-policy/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
