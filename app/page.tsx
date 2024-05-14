import React from "react";
import { HomeCopy } from "@/config/site";
import { Star } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import ColorContainer from "@/components/ColorContainer";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* About */}
			<div className="flex justify-center">
				<div className="container text-center kodchasan-bold">
					<h1 className={title({ color: "violet" })}>
						Brittney Cavazos
					</h1>
					<Star />
					<br />
					<p className={subtitle({ class: "mt-4" })}>
						Front end, mobile development, logo, & print design
					</p>
				</div>
				<ColorContainer
					classProp={
						"max-w-lg justify-center montserrat leading-relaxed"
					}
					fillings={HomeCopy.description}
				/>
			</div>
			{/* Skillsets */}
			<ColorContainer classProp={""} fillings={"Skillsets here"} />
			{/* Project & History */}
			<div className="flex">
				<ColorContainer classProp={""} fillings={"projects here"} />
				<div>
					<p>History here</p>
				</div>
			</div>
			<ColorContainer classProp={""} fillings={"form here"} />

			{/* Contact */}
			<div></div>
		</section>
	);
}
