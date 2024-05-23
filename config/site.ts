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
			title: "Bank of Dad",
			category: ["Development"],
			subcategory: "T-shirt design",
			image: "../images/uglydoll.png",
			description:
				"I was tasked to update a number of existing designs. The copy is the same, but the new design is meant to light-heartedly display the frustration a father may feel when consistently pestered for money by his children.",
		},
		{
			title: "Bank of Dad",
			category: ["Design"],
			image: "../images/bankofdad_large.png",
			href: "",
		},
		{
			title: "Bank of Dad",
			category: ["Design", "Development"],
			image: "../images/bankofdad_large.png",
			href: "",
		},
	],
	History: [
		{
			type: "Work",
			company: "Bitwise Industries",
			title: "Software Engineer",
			start: "2021",
			end: "2023",
			points: [
				"Point 1 where I did this thing",
				"I did this other thing that was pretty cool, let me tell you I hope this impresses you",
				"please hire me. give me an interview, I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this.",
			],
		},
		{
			type: "Education",
			company: "Bitwise Industries",
			start: "2021",
			end: "2023",
			title: "Software Engineer",
			points: [
				"Point 1 where I did this thing",
				"I did this other thing that was pretty cool, let me tell you I hope this impresses you",
				"please hire me. give me an interview, I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this.",
			],
		},
		{
			type: "Apprenticeship",
			company: "Bitwise Industries",
			start: "2021",
			end: "2023",
			title: "Software Engineer",
			points: [
				"Point 1 where I did this thing",
				"I did this other thing that was pretty cool, let me tell you I hope this impresses you",
				"please hire me. give me an interview, I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this. I need this.",
			],
		},
	] as HistoryItem[],
};
