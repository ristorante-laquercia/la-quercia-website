export const esperienzeContent = {
  hero: {
    title: 'Esperienze',
  },
  intro: {
    eyebrow: "Dall'Aperitivo al Dopocena",
    title: 'La Quercia cambia volto con il passare delle ore.',
    paragraphs: [
      'Ci sono giornate che iniziano con un brindisi leggero, si allargano in chiacchiere lente e finiscono tra giochi, birre e tavolate piene di vita.',
      'Abbiamo immaginato questa pagina come una piccola mappa del tempo condiviso: aperitivo, dopocena, serate speciali, incontri di lavoro e momenti che diventano comunita.',
    ],
  },
  experiences: {
    eyebrow: 'Esperienze',
    title: 'Modi diversi di stare insieme, con la stessa atmosfera di casa.',
    description:
      "Dall'aperitivo pensato bene al dopocena da condividere, ogni momento ha il suo ritmo, il suo gusto e il suo spazio.",
    cards: [
      {
        kicker: 'Aperitivo',
        title: "L'Aperibirra",
        description: 'Dimentica il solito tagliere: per il tuo aperitivo meriti molto di piu.',
        details:
          'Cocktail rivisitati alla birra come SpritzIPA e AperolPILS, abbinati a stuzzichicheria sempre fresca e pensata per accompagnare davvero il bicchiere.',
        ctaText: 'Prenota ora!',
        ctaHref: '/contatti',
        imageAlt: "Cocktail e stuzzichini serviti durante l'aperitivo",
      },
      {
        kicker: 'Per famiglie',
        title: 'Baby aperitivo',
        description: 'Abbiamo pensato anche ai piu piccoli, senza rinunciare alla qualita del momento.',
        details:
          'Bevande adatte ai bambini e stuzzichini sempre freschi per intrattenerli mentre mamma e papa si rilassano con il loro aperitivo.',
        ctaText: 'Prenota ora!',
        ctaHref: '/contatti',
        imageAlt: 'Famiglie e bambini in un momento conviviale al tavolo',
      },
      {
        kicker: 'Dopocena',
        title: 'Drink & Play',
        description: 'Il dopocena perfetto e fatto di ottime birre, sfide leggere e tempo condiviso.',
        details:
          'Freccette, giochi di societa e tavoli da vivere con calma: scegli il tuo gioco, chiama gli amici e prolunga la serata nel modo giusto.',
        ctaText: 'Prenota ora!',
        ctaHref: '/contatti',
        imageAlt: 'Amici che giocano e bevono dopo cena',
      },
    ],
  },
  events: {
    eyebrow: 'Eventi e Ricorrenze',
    title: 'Serate pensate per chi ama stare bene a tavola e nel bicchiere.',
    description:
      "Alcuni appuntamenti tornano ogni settimana, altri arrivano in occasioni speciali. In tutti i casi, l'idea resta la stessa: trasformare una cena in un'esperienza.",
    items: [
      {
        title: 'Cene Degustazione',
        dateLabel: 'Su prenotazione',
        timeLabel: 'Serata dedicata',
        description:
          "Cene speciali dove ogni portata, dall'antipasto al dolce, viene abbinata a una birra diversa in un viaggio sensoriale completo guidato dal nostro Beer Sommelier.",
        ctaText: 'Richiedi info',
        ctaHref: '/contatti',
        imageAlt: 'Cena degustazione con portate abbinate alla birra',
      },
      {
        title: 'Birra a caduta e Stinco',
        dateLabel: 'Ogni venerdi',
        timeLabel: 'Ore 8.15',
        description:
          "Ogni venerdi apriamo la botte di una birra diversa: spillata direttamente dal fusto, da gustare come in birrificio, con l'abbinamento pieno e conviviale dello stinco.",
        ctaText: 'Seguici sui social',
        ctaHref: 'https://www.instagram.com/laquerciatermoli/',
        imageAlt: 'Calici di birra durante una serata speciale nel locale',
      },
    ],
  },
  coworking: {
    eyebrow: 'Coworking & Meeting',
    title: 'Lo spazio...',
    subTitle: 'è tuo.',
    paragraphs: [
      'Gruppi, aziende, associazioni: cercate un luogo dove riunirvi? Mettiamo a disposizione la nostra sala gratuitamente per riunioni, incontri di lavoro o studio, senza obbligo di consumazione.',
      'Crediamo nel valore della comunità e vogliamo sostenere i tuoi progetti con Wi-Fi, tranquillita e spazi ampi. Basta una telefonata per prenotare il tuo spazio.',
    ],
    ctaText: 'Prenota il tuo spazio',
    ctaHref: '/contatti',
  },
  gallery: {
    eyebrow: 'Community',
    title: 'Persone, brindisi, tavoli pieni e dettagli che fanno atmosfera.',
    description:
      'Una gallery libera per raccontare il lato piu vivo della Quercia: aperitivi, serate, tavolate, gioco e convivialita.',
  },
} as const
