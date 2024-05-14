import React from "react";
import { HomeCopy } from "@/config/site";
import { Star } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import ColorContainer from "@/components/ColorContainer";

export default function Home() {
	return (
		<section className="flex flex-col gap-4 py-8 md:py-10">
			{/* About */}
			<div className="flex justify-center">
				{/* Name */}
				<div className="container text-center kodchasan-bold p-6">
					<div>
						<h1 className="text-plum text-8xl">
							Brittney <br /> Cavazos
						</h1>
						<br />
						<p className="text-blue-900">
							Front end, mobile development, logo, & print design
						</p>
					</div>
					{/* <Star /> */}
				</div>
				{/* bio */}
				<ColorContainer
					classProp={
						"col-6 justify-center montserrat leading-relaxed text-plum"
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
