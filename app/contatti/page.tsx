import { VideoHero } from "@/components/video-hero";
import { PurposeContactList } from "@/components/(contatti)/purpose-contact-list";
import { ContactFormContainer } from "@/components/(contatti)/contact-form-container";

export default function ContattiPage() {
	return (
		<main className="w-full">
			<VideoHero
				videoSrc="/assets/demo/1106594_1080p_4k_3840x2160.mp4"
				fallbackVideoSrc="/assets/demo/6038167_People_Friends_1920x1080.mp4"
				title={"<h1>Contattaci</h1>"}
			/>
			<PurposeContactList />
			<ContactFormContainer />
		</main>
	);
}
