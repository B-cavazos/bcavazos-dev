import React from "react";
import { GithubIcon, Star } from "@/components/icons";
import DividerComponent from "@/components/DividerComponent";
import ColorContainer from "@/components/ColorContainer";
import AboutBio from "@/components/AboutBio";
import { Skillsets } from "@/components/Skillsets";
import ProjectsComponent from "@/components/ProjectsComponent";
import HistoryComponent from "@/components/HistoryComponent";
import ContactForm from "@/components/FormComponent";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

export default function Home() {
	return (
		<section className="flex flex-col gap-12 lg:gap-40 py-8 md:py-10 justify-center items-center">
			{/* About */}
			<section className="flex flex-col lg:flex-row md:col-span-2 sm:p-12 gap-6 justify-between">
				{/* Name */}
				<div className="flex flex-col place-content-center text-center items-center kodchasan-bold pb-12 md:pb-0 md:py-6">
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
					<div className="flex w-100 mt-12 mb-6 gap-6">
						<Button
							isExternal
							as={Link}
							className="text-sm montserrat-bold text-plum border-plum hover:bg-plum hover:text-sand tracking-wide"
							href={siteConfig.links.resume}
							variant="bordered"
						>
							Resume
						</Button>
						<Link
							isExternal
							href={siteConfig.links.github}
							aria-label="Github"
						>
							<GithubIcon
								className="text-default-500"
								size={40}
							/>
						</Link>
					</div>
				</div>
				{/* bio */}
				<ColorContainer
					classProp={
						"flex flex-col justify-center montserrat leading-relaxed text-plum basis-1/2"
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
				<div className="flex flex-col md:flex-row md:grid-cols-2">
					<div className="w-100 mb-12 md:mb-0 md:w-1/2">
						<ColorContainer
							ComponentProp={ContactForm}
							classProp=""
						/>
					</div>
					<div className="text-plum montserrat text-xl text-center md:text-left md:px-24">
						<p className="leading-relaxed">
							<span className="font-bold">
								Fill out this form and get in touch with me
								directly!
							</span>
							<br />
							<br />
							If you want to see more about my work history, you
							can checkout my{" "}
							<Link
								isExternal
								href={siteConfig.links.linkedin}
								aria-label="LinkedIn profile"
								className="text-xl"
							>
								LinkedIn profile
							</Link>{" "}
							or see my{" "}
							<Link
								isExternal
								href={siteConfig.links.resume}
								aria-label="Resume"
								className="text-xl"
							>
								Resume
							</Link>{" "}
							.<br /> Lastly,{" "}
							<Link
								isExternal
								href={siteConfig.links.github}
								aria-label="Github profile"
								className="text-xl"
							>
								Github
							</Link>{" "}
							is where to go to take a peek at my coding history
							<br />
							<br />
							Hope to hear from you soon!
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
