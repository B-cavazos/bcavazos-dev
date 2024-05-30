import { HistoryItem } from "@/types";

export type SiteConfig = typeof siteConfig;
export type HomeCopy = typeof HomeCopy;

export const siteConfig = {
	name: "Brittney Cavazos Portfolio",
	description: "A portfolio focusing on web development and graphic design",
	navItems: [
		{
			label: "About",
			href: "/",
		},
		{
			label: "Skillset",
			href: "/#skillset",
		},
		{
			label: "Projects & History",
			href: "/#proj",
		},
		{
			label: "Contact",
			href: "/#contact",
		},
	],
	navMenuItems: [
		{
			label: "About",
			href: "/#about",
		},
		{
			label: "Skillset",
			href: "/#skillset",
		},
		{
			label: "Projects & History",
			href: "/#proj",
		},
		{
			label: "Contact",
			href: "/#contact",
		},
		{
			label: "Resume",
			href: "/Cavazos_resume_24.pdf",
		},
	],
	links: {
		github: "https://github.com/b-cavazos",
		resume: "/Cavazos_resume_24.pdf",
	},
};

export const HomeCopy = {
	description: [
		"I am a Web Developer & Graphic Designer who loves to make things. In my work, I prioritize understanding how a product can best communicate with users both visually and functionally.",
		"When I am not building things, I like to spend time with my two cats and play a lot of Dance Dance Revolution.",
	],
	projectItems: [
		{
			title: "Love Unmasked",
			category: ["Development"],
			subcategory: ["Mobile App Development"],
			image_lg: "./../images/loveunmasked_large.png",
			image_sm: "./../images/loveunmasked_small.png",
			description:
				"Love Unmasked is a mobile dating app specifically designed for healthcare professionals, providing a supportive and engaging platform for them to connect and form meaningful relationships. As part of the development team, I contributed to implementing key features that seamlessly integrated the front-end and back-end, including password setup, managing state in the front end when new matches are made, and sending confirmation codes.",
			technologies: [
				"ReactNative",
				"TypeScript",
				"Styled Components",
				"NodeJS",
				"Expo",
			],
		},
		{
			title: "Bank of Dad",
			category: ["Design"],
			subcategory: ["T-shirt Design"],
			image_lg: "./../images/bankofdad_large.png",
			image_sm: "./../images/bankofdad_small.png",
			description:
				"For this project I was tasked to create a T-shirt design. I was given the copy to use . This design is meant to light-heartedly display the frustration a father may feel when he is consistently pestered for money by his children.",
			technologies: ["Adobe Illustrator"],
		},
		{
			title: "Fresno Frenzy IV",
			category: ["Design"],
			subcategory: ["Marketing", "Logo Design"],
			image_lg: "./../images/ff4_large.png",
			image_sm: "./../images/ff4_small.png",
			description:
				"I designed a digital flyer and logo for Fresno Frenzy, a local Dance Dance Revolution tournament that attracts players from all across the west coast. Inspired by the debate surrounding DDR's viability in e-sports, I aimed to create a logo reminiscent of those seen at traditional sports events. The flyer evokes a sense of grandeur and space while subtly nodding to the game's branding.",
			technologies: ["Adobe Illustrator", "Adobe Photoshop"],
		},
		{
			title: "Payroll Plus",
			category: ["Design"],
			subcategory: ["Marketing", "Brochure Design"],
			image_lg: "./../images/payrollplus_large.jpg",
			image_sm: "./../images/payrollplus_small.jpg",
			description:
				"Payroll Plus is a payroll management platform. This brochure showcases the platform's payroll management services, incorporates the brand's signature green and white colors, and is designed to blend informativeness with Payroll Plus's professional yet approachable identity",
			technologies: ["Adobe InDesign"],
		},
		{
			title: "NERF Party Cupcake Toppers",
			category: ["Design"],
			subcategory: ["Entertainment"],
			image_lg: "./../images/nerf_large.png",
			image_sm: "./../images/nerf_small.png",
			description:
				"I was commissioned by a coworker to create custom cupcake toppers for his son's NERF-themed birthday party. The toppers, designed to be playful and boyish, added a fun touch to the celebration.",
			technologies: ["Adobe Illustrator"],
		},
		{
			title: "JANUS",
			category: ["Design"],
			subcategory: ["Newsletter"],
			image_lg: "./../images/janus_large.jpg",
			image_sm: "./../images/janus_small.jpg",
			description:
				"For the January edition of the American Labor Alliance's internal newsletter, inspired by the theme of 'Janus'—the god of new beginnings, transition, and time—our focus was on women's experiences in the workforce. The design incorporates elements that symbolize both themes: the typography and imagery emphasize the idea of womanhood, while the color palette of pinks, purples, and yellows evokes the sunrise of a new day. Triangular shapes represent continuous forward movement, reflecting the concept of new beginnings and the passage of time.",
			technologies: ["Adobe InDesign"],
		},
	],
	History: [
		{
			type: "Education",
			company: "Western Governors University",
			title: "B.S. Software Engineering",
			start: "2024",
			end: "Present",
			points: ["ABET accredited institution"],
		},
		{
			type: "Work",
			company: "Bitwise Industries",
			title: "Software Engineer",
			start: "2022",
			end: "2023",
			points: [
				"Developed and implemented key features with React Native with Typescript, Expo, Redux, and Styled Components, enhancing app performance and user experience",
				"Collaborated with senior developers in a SCRUM environment to update applications, create new features, and resolve bugs.",
				"Contributed effectively to a cross-functional team and occasionally led stand-up meetings.",
			],
		},
		{
			type: "Apprenticeship",
			company: "Alphaworks Technologies",
			start: "2021",
			end: "2022",
			title: "React Apprentice",
			points: [
				"Gained expertise by learning how to leverage the power of ReactJS.",
				"Adapted to new technologies quickly and delivered results in a professional setting, contributing to project success.",
				"Co-taught a 6-week web-development course, assisting and motivating over 20 students to grasp the basics of HTML and CSS.",
			],
		},
		{
			type: "Work",
			company: "3INK Productions / Smashing Factory",
			start: "2018",
			end: "2020",
			title: "Production Artist",
			points: [
				"Utilized Adobe Illustrator to create precise color separations, design proofs, and artwork used by both local and nationwide companies.",
				"Played a key role in the quality-control process by approving test prints, and meticulously checking registration and color matching against Pantone swatches to ensure accurate reproduction of designs.",
				"Maintained effective communication with customers, actively engaging in discussions to ensure clarity and understanding of design requirements, resulting in successful execution and customer satisfaction.",
			],
		},
	] as HistoryItem[],
};
