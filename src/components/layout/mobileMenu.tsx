import { NavLinks, NavLinksProps } from "@/components/ui/navLinks";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { BurgerIcon } from "@/components/icons/burger";
import Link from "next/link";
import { LogoIcon } from "../icons/logo";
import { NAV_OPTIONS } from "@/config/navigation";
import { SocialLinks } from "./socialLinks";

const navLinks: NavLinksProps["links"] = NAV_OPTIONS.map(({ href, title }) => ({
	href,
	element: (
		<SheetClose asChild>
			<span className="font-[700] text-[14px] leading-[17.89px]">{title}</span>
		</SheetClose>
	),
}));

export function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger className="lg:hidden">
				<BurgerIcon />
			</SheetTrigger>
			<SheetContent side={"left"} className="flex flex-col p-[50px] w-[320px]">
				<div className="w-[132px]">
					<SheetHeader>
						<SheetTitle>
							<SheetClose asChild>
								<Link href="/">
									<LogoIcon className="pl-[10px] h-[22px]" />
								</Link>
							</SheetClose>
						</SheetTitle>
					</SheetHeader>
					<nav className="flex flex-col justify-between py-[40px] pl-[10px] h-full">
						<NavLinks links={navLinks} />
					</nav>
					<SheetFooter>
						<SocialLinks
							className="gap-[7.5px] grid grid-cols-2 grid-rows-2 w-full h-full min-h-[132px]"
							buttonClassName="bg-background"
						/>
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	);
}
