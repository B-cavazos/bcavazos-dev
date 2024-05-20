"use client";
import { FC, useState } from "react";
import CardComponent from "./CardComponent";
import { HomeCopy } from "@/config/site";
import { Button } from "@nextui-org/button";
const ProjectsComponent: FC = () => {
	const projects = HomeCopy.projectItems;
	const [category, setCategory] = useState(["Design", "Development"]);
	useState();
	const [active, setActive] = useState(false);
	return (
		<div className="p-6 tracking-wider">
			<p className="lowercase text-lilac montserrat-bold py-6 tracking-wider">
				<Button
					variant="light"
					size="sm"
					className="lowercase text-lilac montserrat-bold"
					onClick={() => setCategory(["Design"])}
				>
					Design
				</Button>
				<span aria-hidden="true">//</span>
				<Button
					variant="light"
					size="sm"
					className="lowercase text-lilac montserrat-bold"
					onClick={() => setCategory(["Development"])}
				>
					Development
				</Button>
				<span aria-hidden="true">//</span>
				<Button
					variant="light"
					size="sm"
					className="lowercase text-lilac montserrat-bold"
					onClick={() => setCategory(["Design", "Development"])}
				>
					All
				</Button>
			</p>
			<div className="grid grid-cols-2 gap-x-6 gap-y-6">
				{projects.map((project, index) => {
					if (
						project.category.some((cat) => category.includes(cat))
					) {
						return <CardComponent project={project} />;
					}
				})}
			</div>
		</div>
	);
};

export default ProjectsComponent;
