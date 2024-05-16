import React, { FC } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { HomeCopy } from "@/config/site";
import { ProjectItem, ProjectProps } from "@/types";

const CardComponent: FC<ProjectProps> = ({ project }) => {
	return (
		//filter should be moved in here eventually
		<Card className="my-4 montserrat text-left" isPressable>
			<CardBody className="overflow-visible p-0">
				<Image
					alt="Card background"
					className="object-cover rounded-t-xl rounded-b-none "
					src={project.image}
					width={270}
				/>
			</CardBody>
			<CardHeader className=" pt-1 px-4 flex-col items-start">
				<h4 className="font-bold text-large tracking-wide text-plum">
					{project.title}
				</h4>
				{project.category.map((category, index) => {
					return (
						<p className="text-tiny text-sky" key={index}>
							{category}
						</p>
					);
				})}
			</CardHeader>
		</Card>
	);
};

export default CardComponent;
