import { NewsCard } from "@/features/news/components/card";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";
import { z } from "zod";

const getNewsList = unstable_cache(
	async (categoryId: number | undefined) => {
		const data = await prisma.news.findMany({
			include: {
				category: {
					select: {
						title: true,
					},
				},
			},
			where: {
				is_exclusive: false,
				is_material: false,
				category_id: categoryId,
			}
		});
		console.log(data);
		return data;
	},
	undefined,
	{ revalidate: 300, tags: ["newsList"] }
);

export default async function Page({ params }: { params: Promise<{ slug: string | undefined }> }) {
	const slug = (await params).slug;
	if (slug && slug.length !== 1) notFound();
	const categoryIdParam = slug?.at(0);
	let categoryId: number | undefined;
	if (categoryIdParam) {
		try {
			categoryId = z.coerce.number().parse(categoryIdParam);
		} catch {
			notFound();
		}
	}

	const [categoryNewsList] = await Promise.all([getNewsList(categoryId)]);

	if (!categoryNewsList.length) {
		return (
			<section className="flex flex-col gap-[28px]">
				<h1 className="font-bold text-[24px] leading-[29.05px]">Новостей не найдено</h1>
			</section>
		);
	}
	return (
		<section className="flex flex-col gap-[28px]">
			{categoryNewsList.map((news) => (
				<NewsCard key={news.id} news={news} />
			))}
		</section>
	);
}
