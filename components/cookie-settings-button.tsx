'use client'

type CookieSettingsButtonProps = {
  label: string
  className?: string
}

export function CookieSettingsButton({ label, className }: CookieSettingsButtonProps) {
  const handleOpenCookieSettings = () => {
    ;(
      window as Window & {
        CookieScript?: {
          instance?: {
            show?: () => void
          }
        }
      }
    ).CookieScript?.instance?.show?.()
  }

  return (
    <button type="button" onClick={handleOpenCookieSettings} className={`csconsentlink ${className ?? ''}`.trim()}>
      {label}
    </button>
  )
}
