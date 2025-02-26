import { NavLinks, NavLinksProps } from "@/components/ui/navLinks";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoIcon } from "@/components/icons/logo";
import { MobileMenu } from "./mobileMenu";
import { NAV_OPTIONS } from "@/config/navigation";
import React from "react";
import { SearchIcon } from "@/components/icons/search";

const navLinks: NavLinksProps["links"] = NAV_OPTIONS.map(({ href, title }) => ({
	href,
	element: <span className="font-[700] text-[14px] leading-[17.89px]">{title}</span>,
}));

export function Header() {
	return (
		<header className="top-0 right-0 left-0 z-50 absolute lg:relative flex flex-row justify-between items-center lg:gap-[10px] bg-surface lg:bg-transparent px-[20px] lg:px-0 rounded-bl-md rounded-br-md h-[45px] lg:h-[54px]">
			<MobileMenu />

			<Button className="rounded-md w-[185px] shrink-0">
				<Link href="/" />
				<LogoIcon className="h-[17px] lg:h-[23px]" />
			</Button>

			<nav className="hidden lg:flex flex-row justify-center items-center gap-[30px] bg-surface px-[40px] rounded-md w-full h-full">
				<NavLinks links={navLinks} />
			</nav>

			<Button className="flex justify-center items-center bg-surface rounded-md lg:w-[108px] lg:h-full size-fit shrink-0">
				<SearchIcon />
			</Button>
		</header>
	);
}
