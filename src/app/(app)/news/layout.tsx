import { NavBar, NavOption } from "@/components/ui/navBar";

import { Button } from "@/components/ui/button";

const categories = [
	{
		title: "Все новости",
		href: "/news/all",
	},
	{
		title: "Футбол",
		href: "/news/football",
	},
	{
		title: "Хоккей",
		href: "/news/hockey",
	},
	{
		title: "Баскетбол",
		href: "/news/basketball",
	},
];

const navOptions: NavOption[] = categories.map(({ href, title }) => ({
	href,
	element: <Button className="font-[700] text-[14px] leading-[17.89px]">{title}</Button>,
}));

export default function NewsCategoryLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col gap-[28px]">
			<NavBar
				options={navOptions}
				navLinkClassName="[&.active_*]:bg-primary"
				className="flex flex-row gap-[10px] h-[40px]"
			/>
			<ul className="flex flex-col gap-[10px]">{children}</ul>
		</div>
	);
}
