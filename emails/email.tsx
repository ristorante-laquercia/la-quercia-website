import { Body, Column, Container, Head, Html, Img, Preview, Row, Section, Text } from 'react-email'

type EmailProps = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

const siteUrl = process.env.SITE_URL ?? 'https://ristorante-laquercia.it'

export default function Email({ firstName, lastName, email, phone, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuova richiesta dal sito La Quercia - Ristorante</Preview>
      <Body
        style={{
          background: '#f2ca74',
          padding: '10px 0',
          fontFamily: 'system-ui, Helvetica, Arial, sans-serif',
          fontSize: '16px',
        }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            padding: '45px 40px',
            borderRadius: '14px',
            textAlign: 'left',
            display: 'block',
          }}
        >
          <Img
            src={`${siteUrl}/assets/svg/logo-la-quercia.svg`}
            width="auto"
            height="120"
            alt="La Quercia"
            style={{ margin: '0 auto 24px auto', display: 'block' }}
          />
          <Section>
            <Row>
              <Text style={{ color: '#1a1a1a' }}>
                Salve, una nuova richiesta è arrivata dal modulo contatto del sito Ristobirreria La Quercia. Di seguito tutti
                i dettagli.
              </Text>
            </Row>
          </Section>

          <Section>
            <Row style={{ marginBottom: '14px' }}>
              <Column>
                <Text style={{ fontWeight: '700', margin: '0', color: '#1a1a1a' }}>Nome e cognome</Text>
                <Text style={{ fontStyle: 'italic', margin: '0', color: '#1a1a1a' }}>
                  {firstName} {lastName}
                </Text>
              </Column>
            </Row>

            <Row style={{ marginBottom: '14px' }}>
              <Column>
                <Text style={{ fontWeight: '700', margin: '0', color: '#1a1a1a' }}>Indirizzo email</Text>
                <Text style={{ fontStyle: 'italic', margin: '0', color: '#1a1a1a' }}>{email}</Text>
              </Column>
            </Row>

            {phone ? (
              <Row style={{ marginBottom: '14px' }}>
                <Column>
                  <Text style={{ fontWeight: '700', margin: '0', color: '#1a1a1a' }}>Numero telefono</Text>
                  <Text style={{ fontStyle: 'italic', margin: '0', color: '#1a1a1a' }}>{phone}</Text>
                </Column>
              </Row>
            ) : null}

            <Row style={{ marginBottom: '14px' }}>
              <Column>
                <Text style={{ fontWeight: '700', margin: '0', color: '#1a1a1a' }}>Messaggio</Text>
                <Text
                  style={{
                    fontStyle: 'italic',
                    margin: '0',
                    color: '#1a1a1a',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>

        <Section style={{ width: '100%', margin: '20px auto', maxWidth: '37.5rem' }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#222',
              fontSize: '12px',
              lineHeight: '20px',
            }}
          >
            © {new Date().getFullYear()} Ristobirreria La Quercia
          </Text>
        </Section>
      </Body>
    </Html>
  )
}
