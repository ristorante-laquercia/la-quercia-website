import type { DetailedHTMLProps, HTMLAttributes } from "react";

type AltchaWidgetAttributes = DetailedHTMLProps<
	HTMLAttributes<HTMLElement>,
	HTMLElement
> & {
	auto?: "off" | "onfocus" | "onload" | "onsubmit";
	challengejson?: string;
	challengeurl?: string;
	debug?: boolean;
	hidefooter?: boolean;
	hidelogo?: boolean;
	name?: string;
	verifyurl?: string;
};

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			"altcha-widget": AltchaWidgetAttributes;
		}
	}
}
