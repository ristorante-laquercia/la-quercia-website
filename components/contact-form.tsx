'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Lineicons from '@lineiconshq/react-lineicons'
import { Message3TextDuotone } from '@lineiconshq/free-icons'

import { cva } from 'class-variance-authority'

import { Button } from '@/components/ui/button'

const controlVariants = cva(
  'mt-1 w-full rounded-lg border bg-white px-3 py-2 text-lq-dark outline-none transition-colors focus-visible:ring-2 focus-visible:ring-lq-green/30',
  {
    variants: {
      invalid: {
        true: 'border-red-700',
        false: 'border-lq-dark/20',
      },
      control: {
        input: '',
        textarea: 'min-h-28 resize-y',
      },
    },
    defaultVariants: {
      invalid: false,
      control: 'input',
    },
  },
)

const checkboxVariants = cva(
  'mt-1 size-4 rounded border bg-white accent-lq-green outline-none focus-visible:ring-2 focus-visible:ring-lq-green/30',
  {
    variants: {
      invalid: {
        true: 'border-red-700',
        false: 'border-lq-dark/20',
      },
    },
    defaultVariants: {
      invalid: false,
    },
  },
)

type ContactFormValues = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  privacy: boolean
}

type ContactSubmitPayload = ContactFormValues & {
  altcha: string
}

type AltchaWidgetElement = HTMLElement & {
  reset?: () => void
}

export function ContactForm() {
  const formId = useId()
  const statusId = `${formId}-status`
  const formRef = useRef<HTMLFormElement | null>(null)
  const altchaRef = useRef<AltchaWidgetElement | null>(null)
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  useEffect(() => {
    void import('altcha')
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      privacy: false,
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatusMessage(null)

    const formData = formRef.current ? new FormData(formRef.current) : null
    const altchaPayload = formData?.get('altcha')

    if (typeof altchaPayload !== 'string' || !altchaPayload) {
      setStatusMessage({
        type: 'error',
        text: 'Completa la verifica antispam prima di inviare il form.',
      })
      return
    }

    const submitPayload: ContactSubmitPayload = {
      ...data,
      altcha: altchaPayload,
    }

    try {
      const response = await fetch('/api/contatti/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitPayload),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message ?? "Errore durante l'invio del form.")
      }

      console.log('Contact form submit:', data)
      setStatusMessage({
        type: 'success',
        text: result.message ?? 'Messaggio inviato correttamente.',
      })
      reset()
      altchaRef.current?.reset?.()
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: error instanceof Error ? error.message : "Errore durante l'invio del form.",
      })
    }
  }

  const onInvalid = () => {
    setStatusMessage({
      type: 'error',
      text: 'Controlla i campi obbligatori evidenziati.',
    })
  }

  return (
    <div>
      <h2 id={`${formId}-title`} className="text-lq-dark">
        Contattaci
      </h2>
      <form
        ref={formRef}
        className="mt-6 space-y-4"
        noValidate
        aria-labelledby={`${formId}-title`}
        aria-describedby={statusId}
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-firstName`} className="block text-lq-dark">
              Nome *
            </label>
            <input
              id={`${formId}-firstName`}
              type="text"
              autoComplete="given-name"
              className={controlVariants({
                invalid: Boolean(errors.firstName),
              })}
              aria-invalid={errors.firstName ? 'true' : 'false'}
              aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined}
              {...register('firstName', {
                required: 'Il nome è obbligatorio.',
              })}
            />
            {errors.firstName ? (
              <p id={`${formId}-firstName-error`} role="alert" className="mt-1 text-sm text-red-700">
                {errors.firstName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor={`${formId}-lastName`} className="block text-lq-dark">
              Cognome *
            </label>
            <input
              id={`${formId}-lastName`}
              type="text"
              autoComplete="family-name"
              className={controlVariants({
                invalid: Boolean(errors.lastName),
              })}
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby={errors.lastName ? `${formId}-lastName-error` : undefined}
              {...register('lastName', {
                required: 'Il cognome è obbligatorio.',
              })}
            />
            {errors.lastName ? (
              <p id={`${formId}-lastName-error`} role="alert" className="mt-1 text-sm text-red-700">
                {errors.lastName.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-lq-dark">
            Email *
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            className={controlVariants({ invalid: Boolean(errors.email) })}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            {...register('email', {
              required: "L'email è obbligatoria.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Inserisci un'email valida.",
              },
            })}
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} role="alert" className="mt-1 text-sm text-red-700">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="block text-lq-dark">
            Numero telefono
          </label>
          <input id={`${formId}-phone`} type="tel" autoComplete="tel" className={controlVariants()} {...register('phone')} />
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className="block text-lq-dark">
            Messaggio *
          </label>
          <textarea
            id={`${formId}-message`}
            rows={5}
            className={controlVariants({
              invalid: Boolean(errors.message),
              control: 'textarea',
            })}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            {...register('message', {
              required: 'Il messaggio è obbligatorio.',
            })}
          />
          {errors.message ? (
            <p id={`${formId}-message-error`} role="alert" className="mt-1 text-sm text-red-700">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <div>
          <div className="flex items-start gap-2">
            <input
              id={`${formId}-privacy`}
              type="checkbox"
              className={checkboxVariants({
                invalid: Boolean(errors.privacy),
              })}
              aria-invalid={errors.privacy ? 'true' : 'false'}
              aria-describedby={errors.privacy ? `${formId}-privacy-error` : undefined}
              {...register('privacy', {
                required: 'Devi accettare la privacy policy.',
              })}
            />
            <label htmlFor={`${formId}-privacy`} className="text-lq-dark -mt-0.5">
              Dichiaro di aver letto, compreso ed accettato il contenuto dell&apos;{' '}
              <Link href="/privacy-policy" target="_blank">
                informativa privacy
              </Link>{' '}
              di questo sito, resa ai sensi del Regolamento UE 2016/679 (GDPR).
            </label>
          </div>
          {errors.privacy ? (
            <p id={`${formId}-privacy-error`} role="alert" className="mt-1 text-sm text-red-700">
              {errors.privacy.message}
            </p>
          ) : null}
        </div>

        <div className="text-lq-dark [&_.altcha]:max-w-none! [&_.altcha_.altcha-label]:font-gabarito mt-8">
          <altcha-widget ref={altchaRef} challengeurl="/api/altcha/challenge" auto="onload" hidefooter />
        </div>

        <Button variant={'custom'} color="green" className="mt-4" type="submit" disabled={isSubmitting}>
          <Lineicons icon={Message3TextDuotone} size={48} color="white" className="size-7" />

          {isSubmitting ? 'Invio...' : 'Invia messaggio'}
        </Button>

        <div id={statusId} aria-live="polite" className="min-h-6">
          {statusMessage ? (
            <p
              role={statusMessage.type === 'error' ? 'alert' : 'status'}
              className={statusMessage.type === 'error' ? 'text-sm text-red-700' : 'text-sm text-green-700'}
            >
              {statusMessage.text}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  )
}
