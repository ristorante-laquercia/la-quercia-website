'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

type GoogleAnalyticsWithConsentProps = {
  gaId: string
}

type CookieScriptConsentState = {
  categories?: string[]
}

function hasPerformanceConsent() {
  const cookieScript = window.CookieScript as
    | {
        instance?: {
          currentState?: () => CookieScriptConsentState
        }
      }
    | undefined
  const state = cookieScript?.instance?.currentState?.()
  return state?.categories?.includes('performance') ?? false
}

export default function GoogleAnalyticsWithConsent({ gaId }: GoogleAnalyticsWithConsentProps) {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      const enabled = hasPerformanceConsent()
      ;(window as Window & { [key: `ga-disable-${string}`]: boolean | undefined })[`ga-disable-${gaId}`] = !enabled
      setIsEnabled(enabled)
    }

    syncConsent()

    window.addEventListener('CookieScriptLoaded', syncConsent)
    window.addEventListener('CookieScriptAcceptAll', syncConsent)
    window.addEventListener('CookieScriptAccept', syncConsent)
    window.addEventListener('CookieScriptReject', syncConsent)
    window.addEventListener('CookieScriptCategory-performance', syncConsent)

    return () => {
      window.removeEventListener('CookieScriptLoaded', syncConsent)
      window.removeEventListener('CookieScriptAcceptAll', syncConsent)
      window.removeEventListener('CookieScriptAccept', syncConsent)
      window.removeEventListener('CookieScriptReject', syncConsent)
      window.removeEventListener('CookieScriptCategory-performance', syncConsent)
    }
  }, [gaId])

  if (!isEnabled) return null

  return <GoogleAnalytics gaId={gaId} />
}
