import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

declare global {
	namespace JSX {
		interface IntrinsicElements {
			colorContainer: {
				fillings: any;
				className: string;
			};
		}
	}
}
