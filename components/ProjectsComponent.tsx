"use client";
import { FC, useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { HomeCopy } from "@/config/site";
import { Button } from "@nextui-org/button";
const ProjectsComponent: FC = () => {
	const projects = HomeCopy.projectItems;
	const [category, setCategory] = useState(["Design", "Development"]);
	useState();
	const [designActive, setDesignActive] = useState(false);
	const [developmentActive, setDevelopmentActive] = useState(false);
	const [allActive, setAllActive] = useState(true);
	useEffect(() => {
		if (category.length == 1 && category.includes("Design")) {
			setDesignActive(true);
			setDevelopmentActive(false);
			setAllActive(false);
		} else if (category.length == 1 && category.includes("Development")) {
			setDevelopmentActive(true);
			setDesignActive(false);
			setAllActive(false);
		} else {
			setDesignActive(false);
			setDevelopmentActive(false);
			setAllActive(true);
		}
	}, [setDesignActive, setDevelopmentActive, setAllActive, category]);

	return (
		<div className="p-6 tracking-wider">
			<p className="lowercase text-lilac montserrat-bold pb-6 tracking-wider">
				<Button
					variant="light"
					size="sm"
					className={`lowercase montserrat-bold ${
						designActive ? "text-sky" : "text-lilac hover:text-plum"
					}`}
					onClick={() => setCategory(["Design"])}
				>
					Design
				</Button>
				<span aria-hidden="true">/</span>
				<Button
					variant="light"
					size="sm"
					onClick={() => setCategory(["Development"])}
					className={`lowercase montserrat-bold ${
						developmentActive
							? "text-sky"
							: "text-lilac hover:text-plum"
					}`}
				>
					Development
				</Button>
				<span aria-hidden="true">/</span>
				<Button
					variant="light"
					size="sm"
					className={`lowercase montserrat-bold ${
						allActive ? "text-sky" : "text-lilac hover:text-plum"
					}`}
					onClick={() => setCategory(["Design", "Development"])}
				>
					All
				</Button>
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
				{projects.map((project, index) => {
					if (
						project.category.some((cat) => category.includes(cat))
					) {
						return <CardComponent project={project} key={index} />;
					}
				})}
			</div>
		</div>
	);
};

export default ProjectsComponent;
