import { VideoHero } from "@/components/video-hero";
import { RadiciSection } from "@/components/(chi-siamo)/radici-section";
import { PresentSection } from "@/components/(chi-siamo)/present-section";
import { PhilosophyBlock } from "@/components/(chi-siamo)/philosophy-block";

export default function ChiSiamoPage() {
	return (
		<main className="w-full">
			<VideoHero
				videoSrc="/assets/demo/0_Friends_People_3840x2160.mp4"
				fallbackVideoSrc="/assets/demo/6038167_People_Friends_1920x1080.mp4"
				title={"<h1>La Quercia <br/ > Ristobirreria</h1>"}
			/>
			<RadiciSection />
			<PresentSection />
			<PhilosophyBlock />
		</main>
	);
}
