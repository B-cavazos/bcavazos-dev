"use client";
import React, { FC } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { ProjectProps } from "@/types";

const CardComponent: FC<ProjectProps> = ({ project }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isBrowser = () => typeof window !== "undefined";
	const screenWidth = isBrowser() ? window.innerWidth : 0;
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
						className="object-cover aspect-[4/3] rounded-b-none"
						src={project.image_sm}
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
				<ModalContent className="z-50 bg-[#835e9c]/50 backdrop-blur-md h-fill items-center lg:pt-12 text-sand ">
					{(onClose) => (
						<div className="flex flex-col max-w-7xl">
							<ModalHeader className="flex flex-col gap-1 ml-10 md:ml-0 font-Kodchasan bold">
								<h1 className="text-3xl">{project.title}</h1>
								<h2>{project.subcategory}</h2>
							</ModalHeader>
							<ModalBody className="flex items-center lg:items-start lg:flex-row lg:gap-9 justify-items-center align-middle montserrat px-10">
								<Image
									src={
										screenWidth <= 768
											? project.image_sm
											: project.image_lg
									}
									alt={`Visual example of ${project.title}`}
									className=" max-w-[400px] md:max-h-[750px] md:max-w-[600px] mx-4 md:mx-0"
									unoptimized
								/>

								<div className="flex flex-col self-center mx-10 md:mx-0 h-fill">
									<p>{project.description}</p> <br />
									<br />
									<p>
										{project.technologies.map((item, idx) =>
											project.technologies.indexOf(
												item
											) ===
											project.technologies.length - 1
												? item
												: `${item}, \u0020  \u0020`
										)}
									</p>
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
