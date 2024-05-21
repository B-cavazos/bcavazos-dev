import {
	FaReact,
	FaHtml5,
	FaGitAlt,
	FaGithub,
	FaFigma,
	FaSketch,
	FaGithubSquare,
} from "react-icons/fa";
import {
	SiDbeaver,
	SiSwagger,
	SiVisualstudio,
	SiAdobecreativecloud,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobeindesign,
} from "react-icons/si";
//needs animations
export const Skillsets = () => {
	return (
		<div className="flex flex-wrap grid-cols-2 gap-y-12 md:gap-x-20 lg:gap-y-18 justify-between md:justify-center w-auto p-12 montserrat-bold text-plum text-sm text-center ">
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaReact color="inherit" size="2em" title="React" />
				<p className="mt-4">React</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaReact size="2em" title="React Native" />
				<p className="mt-4">React Native</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaHtml5 size="2em" title="HTML" />
				<p className="mt-4">HTML</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiDbeaver size="2em" title="DBeaver" />
				<p className="mt-4">DBeaver</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiSwagger size="2em" title="Swagger UI" />
				<p className="mt-4">SwaggerUI</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiVisualstudio size="2em" title="Visual Studio Code" />
				<p className="mt-4">Visual Studio Code</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaGitAlt size="2em" title="Git" />
				<p className="mt-4">Git</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaGithubSquare size="2em" title="Github" />
				<p className="mt-4">Github</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaFigma size="2em" title="Figma" />
				<p className="mt-4">Figma</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<FaSketch size="2em" title="Sketch" />
				<p className="mt-4">Sketch</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiAdobecreativecloud size="2em" title="Adobe Creative Cloud" />
				<p className="mt-4">Creative Cloud</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiAdobeillustrator size="2em" title="Adobe Illustrator" />
				<p className="mt-4">Illustrator</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiAdobephotoshop size="2em" title="Adobe Photoshop" />
				<p className="mt-4">Photoshop</p>
			</div>
			<div className="flex flex-col basis-1/2 md:basis-0 justify-start items-center">
				<SiAdobeindesign size="2em" title="Adobe InDesign" />
				<p className="mt-4">InDesign</p>
			</div>
		</div>
	);
};
