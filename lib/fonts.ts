import { Barlow, Gabarito } from 'next/font/google'

const barlow = Barlow({
  variable: '--font-barlow',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
})

const gabarito = Gabarito({
  variable: '--font-gabarito',
  display: 'swap',
  subsets: ['latin'],
})

export { barlow, gabarito }
