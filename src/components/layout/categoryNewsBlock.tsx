import { Banner } from "../ui/banner";
import { NewsImageCard } from "@/features/news/components/imageCard";

type CategoryNewsBlockProps = {
	category: { title: string };
	news: { id: number; title: string; image: string }[];
};

export function CategoryNewsBlock({ category, news }: CategoryNewsBlockProps) {
	const firstRow = news.slice(0, 2);
	const secondRow = news.slice(2, 3);
	const thirdRow = news.slice(3, 5);
	return (
		<div className="flex flex-col gap-[20px] lg:gap-[30px]">
			<h5 className="opacity-70 font-[800] text-[16px] lg:text-[30px] leading-[20.45px] lg:leading-[38.34px]">
				{category.title}
			</h5>
			<div className="flex flex-col gap-[10px] lg:gap-[20px] w-full">
				<div className="gap-[10px] lg:gap-[20px] grid grid-cols-1 md:grid-cols-2">
					{firstRow.map((item) => (
						<NewsImageCard key={item.id} news={item} />
					))}
				</div>
				{secondRow && (
					<div className="gap-[10px] lg:gap-[20px] grid grid-cols-1">
						{secondRow.map((item, index) => (
							<NewsImageCard key={index} news={item} wide />
						))}
					</div>
				)}
				<Banner className="hidden md:flex" size="lg" imageUrl="bannerLg.png" imageAlt="BannerRed" href="" />
				{thirdRow && (
					<div className="gap-[10px] lg:gap-[20px] grid grid-cols-1 md:grid-cols-2">
						{thirdRow.map((item, index) => (
							<NewsImageCard key={index} news={item} />
						))}
					</div>
				)}
				<Banner className="md:hidden flex" size="lg" imageUrl="bannerLg.png" imageAlt="Banner" href="" />
			</div>
		</div>
	);
}
