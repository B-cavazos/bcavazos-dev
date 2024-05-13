import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig, HomeCopy } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import ColorContainer from "@/components/ColorContainer";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* About */}
			<div className="flex text-center justify-center">
				<div className="container">
					<h1 className={title({ color: "violet" })}>Brittney Cavazos</h1>
					<br />
					<p className={subtitle({ class: "mt-4" })}>
						Front end, mobile development, logo, & print design
					</p>
				</div>
				<ColorContainer
					classProp={"max-w-lg text-center justify-center"}
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
