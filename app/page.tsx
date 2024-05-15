import React from "react";
import { HomeCopy } from "@/config/site";
import { Star } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import DividerComponent from "@/components/DividerComponent";
import ColorContainer from "@/components/ColorContainer";
import AboutBio from "@/components/AboutBio";

export default function Home() {
	return (
		<section className="flex flex-col gap-4 py-8 md:py-10 justify-center">
			{/* About */}
			<section className="flex flex-col md:flex-row p-12 gap-6">
				{/* Name */}
				<div className="container flex flex-row place-content-center text-center  items-center kodchasan-bold px-6 p-12 basis-1/2">
					<div className="relative">
						<h1 className="text-plum text-8xl tracking-wider">
							Brittney <br /> Cavazos
						</h1>
						<br />
						<p className="text-blue-900 leading-tight -mt-3">
							Front end, mobile development, logo, & print design
						</p>
						<Star className="absolute top-0 -right-11" />
					</div>
				</div>
				{/* bio */}
				<ColorContainer
					classProp={
						"col-6 justify-center montserrat leading-relaxed text-plum basis-1/2"
					}
					ComponentProp={AboutBio}
				/>
			</section>
			{/* Skillsets */}
			<DividerComponent header={"What Does She Know?"} />
			<section id="skillset"></section>
			{/* Project & History */}
			<section id="proj">
				<div className="flex">
					<div>
						<p>History here</p>
					</div>
				</div>
			</section>
			{/* Contact */}
			<section id="contact"></section>
		</section>
	);
}
