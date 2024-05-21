import React from "react";
import { Star } from "@/components/icons";
import DividerComponent from "@/components/DividerComponent";
import ColorContainer from "@/components/ColorContainer";
import AboutBio from "@/components/AboutBio";
import { Skillsets } from "@/components/Skillsets";
import ProjectsComponent from "@/components/ProjectsComponent";
import HistoryComponent from "@/components/HistoryComponent";

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
			<section id="skillset">
				<DividerComponent header={"What Does She Know?"} />
				<ColorContainer
					classProp={"flex justify-center"}
					ComponentProp={Skillsets}
				/>
			</section>
			{/* Project & History */}
			<DividerComponent header={"What Can She Do?"} />
			<section id="proj" className="flex flex-col lg:flex-row lg:gap-4">
				<ColorContainer
					classProp={"w-100 lg:w-1/3"}
					ComponentProp={ProjectsComponent}
				/>
				<div className="flex flex-col-reverse lg:ml-12 w-100 md:w-2/3">
					<h3 className="text-8xl text-wrap text-end text-lilac uppercase tracking-tight kodchasan-bold mt-4 mb-2 mr-4">
						Projects
						<br />& History
					</h3>
					<HistoryComponent />
				</div>
			</section>

			{/* Contact */}
			<section id="contact"></section>
		</section>
	);
}
