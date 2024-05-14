import { FC } from "react";
import { HomeCopy } from "@/config/site";

const AboutBio: FC = ({}: {}) => {
	return (
		<div>
			<h3>Who is She?</h3>
			<p>{HomeCopy.description}</p>
		</div>
	);
};

export default AboutBio;
