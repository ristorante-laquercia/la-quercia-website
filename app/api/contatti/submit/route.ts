import { NextResponse } from "next/server";

import { verifyAltchaPayload } from "@/lib/altcha";

type ContactSubmitPayload = {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	message?: string;
	privacy?: boolean;
	altcha?: string;
};

function isNonEmptyString(value: unknown): value is string {
	return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
	let payload: ContactSubmitPayload;

	try {
		payload = (await request.json()) as ContactSubmitPayload;
	} catch {
		return NextResponse.json(
			{
				message: "Payload non valido.",
			},
			{ status: 400 },
		);
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
				message: "Compila correttamente i campi obbligatori.",
			},
			{ status: 400 },
		);
	}

	if (!isNonEmptyString(payload.altcha)) {
		return NextResponse.json(
			{
				message: "Verifica antispam non valida.",
			},
			{ status: 400 },
		);
	}

	try {
		const verified = await verifyAltchaPayload(payload.altcha);

		if (!verified) {
			return NextResponse.json(
				{
					message: "Verifica antispam fallita.",
				},
				{ status: 400 },
			);
		}
	} catch (error) {
		console.error("ALTCHA verify error:", error);

		return NextResponse.json(
			{
				message: "Errore durante la verifica antispam.",
			},
			{ status: 500 },
		);
	}

	console.log("Contact form submit:", {
		firstName: payload.firstName,
		lastName: payload.lastName,
		email: payload.email,
		phone: payload.phone ?? "",
		message: payload.message,
	});

	return NextResponse.json({
		message: "Messaggio inviato correttamente.",
	});
}
