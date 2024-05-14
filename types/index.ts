import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

declare global {
	namespace JSX {
		interface IntrinsicElements {
			ColorContainer: {
				classProp: string;
				componentProp: React.ComponentType;
			};
		}
	}
}
