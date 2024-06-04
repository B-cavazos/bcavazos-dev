import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: `${basePath}/Star.png`,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={clsx(
					"min-h-screen font-sans antialiased bg-sand",
					fontSans.variable
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "dark" }}
				>
					<div className="relative flex flex-col">
						{/* <Navbar /> */}
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3 bg-sand">
							<p>Currently Under Construction </p>
							<span>˙˚ʚ(´◡`)ɞ˚˙</span>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
