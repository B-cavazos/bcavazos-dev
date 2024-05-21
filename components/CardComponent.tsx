import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { HomeCopy } from "@/config/site";

const CardComponent = () => {
	return (
		<Card className="py-4 w-1/2">
			<CardBody className="overflow-visible py-2">
				<Image
					alt="Card background"
					className="object-cover rounded-xl"
					src="https://nextui.org/images/hero-card-complete.jpeg"
					width={270}
				/>
			</CardBody>
			<CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
				<h4 className="font-bold text-large">Frontend Radio</h4>
				<p className="text-tiny uppercase font-bold">Daily Mix</p>
			</CardHeader>
		</Card>
	);
};

export default CardComponent;
