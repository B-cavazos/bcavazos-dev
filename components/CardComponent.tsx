import React, { FC } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { HomeCopy } from "@/config/site";
import { ProjectItem, ProjectProps } from "@/types";

const CardComponent: FC<ProjectProps> = ({ project }) => {
	return (
		//filter should be moved in here eventually
		<Card className="montserrat text-left" isPressable>
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
				<p className="text-tiny text-sky">
					{project.category.map((category, index) => {
						return <>{category}&nbsp;&nbsp;&nbsp;</>;
					})}
				</p>
			</CardHeader>
		</Card>
	);
};

export default CardComponent;
