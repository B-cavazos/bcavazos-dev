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
export type ColorContainerProps = {
	classProp?: string;
	ComponentProp: React.ComponentType;
};

export interface ProjectItem {
	title: string;
	category: string[];
	subcategory: string;
	image: string;
	description: string;
}

export interface ProjectProps {
	project: ProjectItem;
}

export interface HistoryItem {
	type: string;
	name: string;
	start: string;
	end: string;
	title: string;
	points: string[];
}
