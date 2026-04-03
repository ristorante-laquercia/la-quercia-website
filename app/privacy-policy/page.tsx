import { Container } from '@/components/ui/container'
import { privacyPolicyContent } from '@/lib/contents/privacy-policy'

function stripLegacyClasses(html: string) {
  return html.replace(/\sclass="[^"]*"/gi, '').replace(/\sclass='[^']*'/gi, '')
}

export default function PrivacyPolicyPage() {
  const htmlContent = stripLegacyClasses(privacyPolicyContent.htmlText)

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto w-full max-w-4xl text-lq-dark">
          <h1 className="mb-8 text-4xl font-black text-lq-green">Privacy Policy</h1>
          <article
            className="[&_h4]:mb-6 [&_h4]:text-2xl [&_h4]:font-bold [&_li]:mb-2 [&_li]:text-base [&_p]:mb-4 [&_p]:text-base [&_p]:font-normal [&_strong]:font-semibold"
            //biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static legal content
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </Container>
    </section>
  )
}
