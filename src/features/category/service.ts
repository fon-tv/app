import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getCategoryList = unstable_cache(
	async () => {
		return await prisma.category.findMany();
	},
	undefined,
	{ revalidate: 300, tags: ["categoryList"] }
);
