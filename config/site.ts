export type SiteConfig = typeof siteConfig;
export type HomeCopy = typeof HomeCopy;

export const siteConfig = {
	name: "Brittney Cavazos Portfolio",
	description: "A portfolio focusing on web development and graphic design",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/b-cavazos",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};

export const HomeCopy = {
	description: [
		"I am a Web Developer & Graphic Designer who loves to make things. In my work, I prioritize understanding how a product can best communicate with users both visually and functionally.",
		"When I am not building things, I like to spend time with my two cats and play a lot of Dance Dance Revolution.",
	],
	skillset: [
		{
			label: "React",
			image: "/",
		},
		{
			label: "HTML",
			image: "/",
		},
		{
			label: "CSS",
			image: "/",
		},
		{
			label: "React Native",
			image: "/",
		},
		{
			label: "React Tool Kit",
			image: "/",
		},
		{
			label: "DBeaver",
			image: "/",
		},
		{
			label: "Swagger UI",
			image: "/",
		},
		{
			label: "Visual Studio Code",
			image: "/",
		},
		{
			label: "Git",
			image: "/",
		},
		{
			label: "Github",
			image: "/",
		},
		{
			label: "Figma",
			image: "/",
		},
		{
			label: "Sketch",
			image: "/",
		},
		{
			label: "Adobe Illustrator",
			image: "/",
		},
		{
			label: "Adobe Photoshop",
			image: "/",
		},
		{
			label: "Adobe InDesign",
			image: "/",
		},
	],
	projectItems: [
		{
			title: "name",
			category: [],
			image: "/",
			href: "",
		},
	],
	History: [
		{
			type: "",
			name: "",
			start: "",
			end: "",
			title: "",
			points: ["", "", ""],
		},
	],
};
