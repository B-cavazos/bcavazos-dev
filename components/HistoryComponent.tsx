"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { HomeCopy } from "@/config/site";
import { HistoryItem } from "@/types";
import { FaPlus } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";
const HistoryComponent: React.FC = () => {
	const info: HistoryItem[] = HomeCopy.History;
	const itemClasses = {
		base: "bg-gradient-to-b from-lilac/80 from-10% to-sand to-90% shadow-sm shadow-custom-blue",
		trigger: "px-2 py-0 rounded-lg h-14 flex items-center",
		indicator: "text-large",
		content: "px-2",
	};
	return (
		<Accordion variant="splitted" className="" itemClasses={itemClasses}>
			{info.map((item, index) => (
				<AccordionItem
					key={index}
					aria-label={`History Item ${index + 1}`}
					title={
						<div className="flex items-center justify-between  montserrat text-plum md:mr-6 text-sm md:text-medium">
							<div className="mr-2">
								<span className="font-light">
									{item.title} @
								</span>
								<span className="font-bold"> {item.name}</span>
							</div>
							<div>
								<div className="font-bold italic invisible md:visible">
									{item.start} - {item.end}
								</div>
							</div>
						</div>
					}
					indicator={({ isOpen }) =>
						isOpen ? (
							<PiLineVerticalBold
								title={"close accordion item"}
								color="purple"
							/>
						) : (
							<FaPlus
								title={"open accordian item"}
								color="purple"
							/>
						)
					}
					classNames={{
						base: "bg-gradient-to-b from-lilac/80 from-10% to-sand to-90% shadow-sm shadow-custom-blue",
					}} //shadow won't override
				>
					<div className="-mt-3 montserrat text-plum">
						<div className="flex flex-row justify-between">
							<p className="text-16 font-light text-small md:text-medium italic">
								{item.title}
							</p>
							<div className="font-light italic text-small md:invisible">
								{item.start} - {item.end}
							</div>
						</div>

						<ul className="text-16 font-medium leading-4 md:-mt-2 pr-6 md:pr-12 list-image[url(../public/Star.png)]">
							{item.points.map((point, idx) => (
								<li className="my-6 md:my-4 " key={idx}>
									{point}
								</li>
							))}
						</ul>
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default HistoryComponent;
