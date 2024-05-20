"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { HomeCopy } from "@/config/site";
import { HistoryItem } from "@/types";

const HistoryComponent: React.FC = () => {
	const info: HistoryItem[] = HomeCopy.History;

	return (
		<Accordion variant="splitted" className="w-100 md:w-1/2">
			{info.map((item, index) => (
				<AccordionItem
					key={index}
					aria-label={`Accordion ${index + 1}`}
					title={item.title}
				>
					<div>
						<p>{item.name}</p>
						<p>
							{item.start} - {item.end}
						</p>
						<ul>
							{item.points.map((point, idx) => (
								<li key={idx}>{point}</li>
							))}
						</ul>
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default HistoryComponent;
