"use client";
import { FC, useState } from "react";
import CardComponent from "./CardComponent";
import { HomeCopy } from "@/config/site";
import { Button } from "@nextui-org/button";
const ProjectsComponent: FC = () => {
	const projects = HomeCopy.projectItems;
	const [category, setCategory] = useState(["Design", "Development"]);
	useState();
	return (
		<div className="p-6 tracking-wider">
			<p className="lowercase text-lilac montserrat-bold py-6 tracking-wider">
				<Button
					variant="light"
					size="sm"
					className="lowercase text-lilac montserrat-bold"
				>
					Design
				</Button>
				<span aria-hidden="true">//</span>
				<Button
					variant="light"
					size="sm"
					className="lowercase text-lilac montserrat-bold"
				>
					Development
				</Button>
				<span aria-hidden="true">//</span>
				<Button
					variant="light"
					size="sm"
					className="lowercase text-lilac montserrat-bold"
				>
					All
				</Button>
			</p>
			<div className="grid grid-cols-2 gap-x-6 gap-y-6">
				{projects.map((project, index) => (
					<CardComponent project={project} />
				))}
			</div>
		</div>
	);
};

export default ProjectsComponent;
