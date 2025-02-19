import { NavBar, NavOption } from "@/components/ui/navBar";

import { Button } from "@/components/ui/button";
import { getCategoryList } from "@/features/category/service";

export default async function NewsCategoryLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const categoryList = await getCategoryList();
	const navOptions: NavOption[] = [
		{
			href: "/news",
			element: <Button className="font-[700] text-[14px] leading-[17.89px]">Все новости</Button>,
			end: true,
		},
		...categoryList.map((category) => ({
			href: `/news/${category.id}`,
			element: <Button className="font-[700] text-[14px] leading-[17.89px]">{category.title}</Button>,
		})),
	];

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
