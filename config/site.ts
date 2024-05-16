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
		sponsor: "https://patreon.com/jrgarciadev",
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
			category: ["design"],
			image: "../images/bankofdad_large.png",
			href: "",
		},
		{
			title: "Bank of Dad",
			category: ["design"],
			image: "../images/bankofdad_large.png",
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
