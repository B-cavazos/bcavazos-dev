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
	let className = "container";
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
