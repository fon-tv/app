import { NavLinks, NavLinksProps } from "@/components/ui/navLinks";

import { Button } from "@/components/ui/button";
import { OverflowRow } from "@/components/ui/overflowRow";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

const getCategoryList = unstable_cache(
	async () => {
		return await prisma.category.findMany();
	},
	undefined,
	{ revalidate: 10, tags: ["categoryList"] }
);


export default async function NewsCategoryLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const categoryList = await getCategoryList();
	const navLinks: NavLinksProps["links"] = [
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
			<OverflowRow
				wrapperElement={"nav"}
				className="flex flex-row gap-[10px] h-[30px] lg:h-[40px]"
				showTrigger={
					<Button className="bg-primary size-[30px] lg:size-[40px]">
						<Plus />
					</Button>
				}
			>
				<NavLinks links={navLinks} navLinkClassName="[&.active_*]:bg-primary h-[30px] lg:h-[40px]" />
			</OverflowRow>
			<ul className="flex flex-col gap-[10px]">{children}</ul>
		</div>
	);
}
