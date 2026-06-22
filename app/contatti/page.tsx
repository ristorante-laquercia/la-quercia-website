import { VideoHero } from '@/components/video-hero'
import { PurposeContactList } from '@/components/(contatti)/purpose-contact-list'
import { ContactFormContainer } from '@/components/(contatti)/contact-form-container'

export default function ContattiPage() {
  return (
    <main id="main-content" className="w-full overflow-x-clip">
      <VideoHero
        videoSrc="/assets/video/apparecchiare-tavola.mp4"
        title={'<h1>Ci vediamo a La Quercia</h1>'}
        headingClassName="max-w-5xl [&_h1]:text-6xl [&_h1]:font-black [&_h1]:tracking-[-0.04em] [&_h1]:md:text-7xl [&_h1]:lg:text-8xl"
        overlayClassName="bg-linear-to-b from-black/78 via-black/60 to-black/78"
      />
      <PurposeContactList />
      <ContactFormContainer />
    </main>
  )
}
