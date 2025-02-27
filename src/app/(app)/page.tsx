import { CategoryNewsBlock } from "@/components/layout/categoryNewsBlock";
import { NewsCard } from "@/features/news/components/card";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

const MINIMUM_NEWS_IN_BLOCK = 2;

const getCategoryNewsBlocks = unstable_cache(
	async () => {
		const blocksMap: Map<{ title: string }, Array<{ id: number; title: string; image: string }>> = new Map();

		const newsSections = await prisma.news_section.findMany({
			select: {
				category: {
					select: {
						id: true,
						title: true,
					},
				},
			},
			where: {
				is_displayed_in_home_page: true,
			},
			orderBy: {
				priority: "desc",
			},
		});

		for (const newsSection of newsSections) {
			const data = await prisma.news.findMany({
				select: {
					id: true,
					title: true,
					image: true,
				},
				where: {
					is_exclusive: false,
					is_material: false,
					category_id: newsSection.category.id,
				},
				orderBy: {
					created_at: "desc",
				},
				take: 5,
			});
			if (data.length < MINIMUM_NEWS_IN_BLOCK) continue;
			blocksMap.set(newsSection.category, data);
		}

		const categoryBlocks: Array<{
			category: { title: string };
			news: Array<{ id: number; title: string; image: string }>;
		}> = [];

		blocksMap.forEach((value, key) => {
			categoryBlocks.push({
				category: key,
				news: value,
			});
		});

		return categoryBlocks;
	},
	undefined,
	{ revalidate: 300, tags: ["newsList"] }
);

const getMaterials = unstable_cache(
	async () => {
		const data = await prisma.news.findMany({
			select: {
				id: true,
				title: true,
				image: true,
				content: true,
				created_at: true,
				category: {
					select: {
						title: true,
					},
				}
			},
			where: {
				is_material: true,
			},
			orderBy: {
				created_at: "desc",
			},
			take: 5,
		});
		return data;
	},
	undefined,
	{ revalidate: 300, tags: ["newsList"] }
);

export default async function Home() {
	const [categoryNewsBlocks, materials] = await Promise.all([getCategoryNewsBlocks(), getMaterials()]);

	return (
		<>
			{categoryNewsBlocks.map((block) => (
				<CategoryNewsBlock key={block.category.title} category={block.category} news={block.news} />
			))}
			<div className="flex flex-col gap-[20px] lg:gap-[30px]">
				<h5 className="opacity-70 font-[800] text-[16px] lg:text-[30px] leading-[20.45px] lg:leading-[38.34px]">
					МАТЕРИАЛЫ
				</h5>
				<div className="flex flex-col gap-[10px] lg:gap-[20px]">
					{materials.map((item) => (
						<NewsCard key={item.id} news={item} />
					))}
				</div>
			</div>
		</>
	);
}
