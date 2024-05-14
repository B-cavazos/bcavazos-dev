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
		"container rounded-2 backdrop-blur-sm bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 shadow-xl rounded-3xl"; //needs opacity, bg fill+opacity
	// If classProp is provided, append it to className
	if (classProp) {
		className += ` ${classProp}`;
	}

	return (
		<div className={className}>
			<div className="p-12 shadow-inner rounded-3xl">
				<p> {fillings}</p>
			</div>
		</div>
	);
};

export default ColorContainer;
