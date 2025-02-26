"use client";

import { NavLink } from "./navLink";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

export type NavLinksProps = {
	links: {
		href: string;
		end?: boolean;
		element: React.ReactNode;
	}[];
	navLinkClassName?: string;
};

export function NavLinks({ links, navLinkClassName}: NavLinksProps) {
	const pathname = usePathname();

	const linksToRender = useMemo(
		() =>
			links.map(({ href, end, element }) => (
				<NavLink
					key={href}
					href={href}
					active={end ? pathname === href : pathname?.startsWith(href)}
					className={navLinkClassName}
				>
					{element}
				</NavLink>
			)),
		[links, pathname, navLinkClassName]
	);

	return <>{linksToRender}</>;
}
