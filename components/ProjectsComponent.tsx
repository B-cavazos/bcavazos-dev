import { FC } from "react";
import CardComponent from "./CardComponent";
import { HomeCopy } from "@/config/site";
const ProjectsComponent: FC = () => {
	const projects = HomeCopy.projectItems;
	return (
		<div className="p-6">
			<p>Development Design All</p>
			<div className="grid grid-cols-2 gap-x-6 gap-y-6">
				{projects.map((project, index) => (
					<CardComponent project={project} />
				))}
			</div>
		</div>
	);
};

export default ProjectsComponent;
