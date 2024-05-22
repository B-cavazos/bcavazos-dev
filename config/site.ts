import { HistoryItem } from "@/types";

export type SiteConfig = typeof siteConfig;
export type HomeCopy = typeof HomeCopy;

export const siteConfig = {
	name: "Brittney Cavazos Portfolio",
	description: "A portfolio focusing on web development and graphic design",
	navItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Skillset",
			href: "#skillset",
		},
		{
			label: "Projects & History",
			href: "#proj",
		},
		{
			label: "Contact",
			href: "#contact",
		},
	],
	navMenuItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Skillset",
			href: "#skillset",
		},
		{
			label: "Projects & History",
			href: "#proj",
		},
		{
			label: "Contact",
			href: "../public/Resume.tsx",
		},
		{
			label: "Resume",
			href: "#contact",
		},
	],
	links: {
		github: "https://github.com/b-cavazos",
		sponsor: "https://patreon.com/jrgarciadev",
		resume: "/resume",
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
			image: "../images/bankofdad_large.png",
			href: "",
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
			name: "Bitwise Industries",
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
			type: "Education",
			institution: "Bitwise Industries",
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
			institution: "Bitwise Industries",
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
