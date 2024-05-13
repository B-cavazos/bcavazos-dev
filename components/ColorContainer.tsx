import { FC } from "react";
type ColorContainerProps = {
	fillings: any;
	className: string;
};

const ColorContainer: FC<ColorContainerProps> = ({
	fillings,
	className,
}: {
	fillings: any;
	className: string;
}) => {
	console.log("testing container component");
	return (
		<div className={className}>
			<p> {fillings}</p>
		</div>
	);
};

export default ColorContainer;
