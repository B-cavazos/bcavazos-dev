import { FC } from "react";
import { ColorContainerProps } from "@/types";

const ColorContainer: FC<ColorContainerProps> = ({
	classProp,
	ComponentProp,
}: {
	ComponentProp: React.ComponentType;
	classProp?: string;
}) => {
	// Base class for the component
	let className =
		"container rounded-2 backdrop-blur-sm bg-gradient-to-b from-lilac2/20 from-40% via-sand/20 to-orange/15 shadow-xl shadow-blue-800/40 rounded-3xl";
	if (classProp) {
		className += ` ${classProp}`;
	}

	return (
		<div className={className}>
			<ComponentProp />
		</div>
	);
};

export default ColorContainer;
