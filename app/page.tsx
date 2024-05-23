import React from "react";
import { Star } from "@/components/icons";
import DividerComponent from "@/components/DividerComponent";
import ColorContainer from "@/components/ColorContainer";
import AboutBio from "@/components/AboutBio";
import { Skillsets } from "@/components/Skillsets";
import ProjectsComponent from "@/components/ProjectsComponent";
import HistoryComponent from "@/components/HistoryComponent";
import ContactForm from "@/components/FormComponent";

export default function Home() {
	return (
		<section className="flex flex-col gap-12 lg:gap-40 py-8 md:py-10 justify-center items-center">
			{/* About */}
			<section className="flex flex-col lg:flex-row md:col-span-2 sm:p-12 gap-6">
				{/* Name */}
				<div className="flex flex-row place-content-center text-center items-center kodchasan-bold pb-12 md:pb-4 lg:pb-12 pr-12">
					<div className="relative pl-11 sm:pl-0">
						<div>
							<h1 className="text-plum text-5xl sm:text-6xl md:text-8xl tracking-wider">
								Brittney <br /> Cavazos
							</h1>
							<Star className="absolute top-0 -right-9 sm:-right-8 md:-right-6 lg:-right-11" />
						</div>

						<br />
						<p className="text-blue-900 leading-tight -mt-3">
							Front end, mobile development, logo, & print design
						</p>
					</div>
				</div>
				{/* bio */}
				<ColorContainer
					classProp={
						"justify-center montserrat leading-relaxed text-plum basis-1/2"
					}
					ComponentProp={AboutBio}
				/>
			</section>
			{/* Skillsets */}
			<section id="skillset" className="w-full">
				<DividerComponent header={"What Does She Know?"} />
				<div className="flex justify-center">
					<ColorContainer
						classProp={"flex justify-center"}
						ComponentProp={Skillsets}
					/>
				</div>
			</section>
			{/* Project & History */}
			<section id="proj">
				<DividerComponent header={"What Can She Do?"} />
				<div className="flex flex-col lg:flex-row gap-16 lg:gap-4">
					<ColorContainer
						classProp={"w-100 lg:w-1/2"}
						ComponentProp={ProjectsComponent}
					/>
					<div className="flex flex-col-reverse justify-between lg:ml-12 w-100 lg:w-1/2">
						<h3 className="text-3xl md:text-6xl lg:text-8xl text-wrap text-end text-lilac uppercase tracking-tight kodchasan-bold mt-4 mb-2 mr-4">
							Projects
							<br />& History
						</h3>
						<HistoryComponent />
					</div>
				</div>
			</section>
			{/* Contact */}
			<section id="contact" className="flex flex-col w-full gap-3">
				<DividerComponent header={"Want to Get in Contact?"} />
				<div className="w-100 md:w-1/2">
					<ColorContainer ComponentProp={ContactForm} classProp="" />
				</div>
			</section>
		</section>
	);
}
