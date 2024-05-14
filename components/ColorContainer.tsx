import { FC } from "react";
type ColorContainerProps = {
	fillings: any;
	classProp: string;
};

const ColorContainer: FC<ColorContainerProps> = ({
	fillings,
	classProp,
}: {
	fillings: any;
	classProp: string;
}) => {
	// Base class for the component
	let className =
		"container p-12 rounded-2 backdrop-blur-sm bg-gradient-to-b from-lilac2/20 from-40% via-sand/20 to-orange/15 shadow-xl shadow-blue/50 rounded-3xl";
	// If classProp is provided, append it to className
	if (classProp) {
		className += ` ${classProp}`;
	}

	return (
		<div className={className}>
			<p> {fillings}</p>
		</div>
	);
};

export default ColorContainer;
