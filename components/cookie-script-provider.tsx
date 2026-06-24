'use client'

import useCookieScript from 'use-cookiescript-hook'

const COOKIE_SCRIPT_URL = process.env.NEXT_PUBLIC_COOKIESCRIPT_URL
const COOKIE_SCRIPT_FALLBACK_URL = 'https://cdn.cookie-script.com/s/fe82019beacb8118f5e91b67485349d4.js'

export default function CookieScriptProvider() {
  useCookieScript(COOKIE_SCRIPT_URL || COOKIE_SCRIPT_FALLBACK_URL, {
    position: 'head-top',
    language: 'it',
  })

  return null
}
