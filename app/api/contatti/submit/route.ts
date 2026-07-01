import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { verifyAltchaPayload } from '@/lib/altcha'
import Email from '@/emails/email'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactSubmitPayload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  privacy?: boolean
  altcha?: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export async function POST(request: Request) {
  let payload: ContactSubmitPayload

  try {
    payload = (await request.json()) as ContactSubmitPayload
  } catch {
    return NextResponse.json(
      {
        message: 'Payload non valido.',
      },
      { status: 400 },
    )
  }

  if (
    !isNonEmptyString(payload.firstName) ||
    !isNonEmptyString(payload.lastName) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.message) ||
    payload.privacy !== true
  ) {
    return NextResponse.json(
      {
        message: 'Compila correttamente i campi obbligatori.',
      },
      { status: 400 },
    )
  }

  if (!isNonEmptyString(payload.altcha)) {
    return NextResponse.json(
      {
        message: 'Verifica antispam non valida.',
      },
      { status: 400 },
    )
  }

  try {
    const verified = await verifyAltchaPayload(payload.altcha)

    if (!verified) {
      return NextResponse.json(
        {
          message: 'Verifica antispam fallita.',
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error('ALTCHA verify error:', error)

    return NextResponse.json(
      {
        message: 'Errore durante la verifica antispam.',
      },
      { status: 500 },
    )
  }

  try {
    await resend.emails.send({
      from:
        process.env.NODE_ENV === 'development' ? 'onboarding@resend.dev' : 'La Quercia <noreply@ristorante-laquercia.it>',
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Nuova richiesta da ${payload.firstName} ${payload.lastName}`,
      react: Email({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        message: payload.message,
      }),
    })
  } catch (error) {
    console.error('Resend email error:', error)

    return NextResponse.json(
      {
        message: "Errore durante l'invio del messaggio. Riprova più tardi.",
      },
      { status: 500 },
    )
  }

  return NextResponse.json({
    message: 'Messaggio inviato correttamente.',
  })
}
