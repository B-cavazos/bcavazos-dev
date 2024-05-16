import { HomeCopy } from "@/config/site";
export const Skillsets = () => {
	const data = HomeCopy.skillset;
	return (
		<div>
			<p>
				{data.map((d) => {
					d.label;
				})}
			</p>
		</div>
	);
};
