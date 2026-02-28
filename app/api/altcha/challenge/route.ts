import { NextResponse } from "next/server";

import { createAltchaChallenge } from "@/lib/altcha";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		const challenge = await createAltchaChallenge();

		return NextResponse.json(challenge, {
			headers: {
				"Cache-Control": "no-store, max-age=0",
			},
		});
	} catch (error) {
		console.error("ALTCHA challenge error:", error);

		return NextResponse.json(
			{
				message: "Impossibile creare la challenge ALTCHA.",
			},
			{ status: 500 },
		);
	}
}
