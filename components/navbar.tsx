import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

//import { ThemeSwitch } from "@/components/theme-switch";
import { Star, GithubIcon } from "@/components/icons";

export const Navbar = () => {
	return (
		<NextUINavbar
			maxWidth="xl"
			position="sticky"
			className=" bg-sand/50 backdrop-blur-xl"
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				{/* brand */}
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex justify-start items-center gap-1"
						aria-label="Go to the start of the page"
						href="/"
					>
						<Star width={20} height={20} />
					</NextLink>
				</NavbarBrand>
				{/* left links */}
				<ul className="hidden md:flex gap-6 justify-start ml-2 montserrat-bold text-plum">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>
			{/* left buttons */}
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				{/* Github */}
				<NavbarItem className="hidden sm:flex gap-2">
					<Link
						isExternal
						href={siteConfig.links.github}
						aria-label="Github"
					>
						<GithubIcon className="text-default-500" />
					</Link>
					{/* <ThemeSwitch /> */}
				</NavbarItem>
				{/* Resume */}
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm montserrat-bold text-sand bg-lilac tracking-wide" //work on fade
						href={siteConfig.links.resume} //add resume
						variant="flat"
					>
						Resume
					</Button>
				</NavbarItem>
			</NavbarContent>
			{/* mobile github and toggle */}
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link
					isExternal
					href={siteConfig.links.github}
					aria-label="Github"
				>
					<GithubIcon className="text-default-500 plum" />
				</Link>
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle />
			</NavbarContent>
			{/* mobile links */}
			<NavbarMenu className=" bg-sand/50 backdrop-blur-xl">
				<div className="mx-4 mt-2 flex flex-col gap-2 montserrat">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link href={item.href} size="lg" color="foreground">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
