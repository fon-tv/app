"use client";

import { ComponentProps, useMemo } from "react";

import { NavLink } from "./navLink";
import { usePathname } from "next/navigation";

export type NavOption = {
	href: string;
	end?: boolean;
	element: React.ReactNode;
};

type NavProps = {
	options: NavOption[];
	navLinkClassName?: string;
} & ComponentProps<"nav">;

export function NavBar({ options, navLinkClassName, ...props }: NavProps) {
	const pathname = usePathname();

	const optionsToRender = useMemo(
		() =>
			options.map(({ href, end, element }) => (
				<NavLink
					key={href}
					href={href}
					active={end ? pathname === href : pathname?.startsWith(href)}
					className={navLinkClassName}
				>
					{element}
				</NavLink>
			)),
		[options, pathname, navLinkClassName]
	);

	return <nav {...props}>{optionsToRender}</nav>;
}
