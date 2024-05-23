import React, { FC } from "react";
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
	console.log("isOpen : ", isOpen);
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
			<Modal size="full" isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Modal Title
							</ModalHeader>
							<ModalBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Nullam pulvinar risus non
									risus hendrerit venenatis. Pellentesque sit
									amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Nullam pulvinar risus non
									risus hendrerit venenatis. Pellentesque sit
									amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute
									tempor cupidatat consequat elit dolor
									adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit
									officia eiusmod Lorem aliqua enim laboris do
									dolor eiusmod.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={onClose}
								>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default CardComponent;
