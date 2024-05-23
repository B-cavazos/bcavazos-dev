import React, { FC, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import { ProjectProps } from "@/types";

const CardComponent: FC<ProjectProps> = ({ project }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const screenWidth = window.innerWidth;
	return (
		<>
			<Card
				className="montserrat text-left"
				isPressable={true}
				onPress={onOpen}
			>
				<CardBody className="overflow-visible p-0">
					<Image
						alt={`${project.title} Image`}
						className="object-cover rounded-t-xl rounded-b-none "
						src={project.image}
						width={350}
						isZoomed
					/>
					{/* confirm image sizing */}
				</CardBody>
				<CardHeader className="pt-1 px-4 flex-col items-start">
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
			{/* Modal */}
			<Modal
				size={screenWidth <= 768 ? "5xl" : "full"}
				isOpen={isOpen}
				onClose={onClose}
				placement="center"
				isDismissable={false}
				scrollBehavior="outside"
				backdrop="blur"
				classNames={{
					closeButton: "hover:bg-white/5 active:bg-white/10",
				}}
			>
				<ModalContent className="z-50 bg-[#835e9c]/50 backdrop-blur-md h-fill items-center text-sand ">
					{(onClose) => (
						<div className="flex flex-col max-w-7xl">
							<ModalHeader className="flex flex-col gap-1 font-Kodchasan bold">
								<h1 className="text-3xl">{project.title}</h1>
								<h2>{project.subcategory}</h2>
							</ModalHeader>
							<ModalBody className="flex lg:flex-row lg:grid-cols-12 gap-9 justify-items-center align-middle montserrat px-10">
								<div className="col-span-6">
									<img
										src={project.image}
										alt={`Visual example of ${project.title}`}
										width={""}
									/>
								</div>

								<div className="col-span-2 flex flex-col justify-around">
									<p>{project.description}</p>
									<p>Created with: tools and tools</p>
								</div>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</div>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default CardComponent;
