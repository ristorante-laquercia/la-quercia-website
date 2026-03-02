import { createChallenge, verifySolution } from "altcha-lib";

const ALTCHA_EXPIRE_MS = 5 * 60 * 1000;
const ALTCHA_MAX_NUMBER = 120_000;

function getAltchaHmacKey(): string {
	const hmacKey = process.env.ALTCHA_HMAC_KEY;

	if (!hmacKey) {
		throw new Error("Missing ALTCHA_HMAC_KEY environment variable.");
	}

	return hmacKey;
}

export async function createAltchaChallenge() {
	return createChallenge({
		hmacKey: getAltchaHmacKey(),
		expires: new Date(Date.now() + ALTCHA_EXPIRE_MS),
		maxNumber: ALTCHA_MAX_NUMBER,
	});
}

export async function verifyAltchaPayload(payload: string) {
	if (!payload) {
		return false;
	}

	return verifySolution(payload, getAltchaHmacKey(), true);
}
