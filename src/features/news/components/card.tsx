import { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getS3MediaFileUrl } from "@/utils/s3";

type NewsCardProps = {
	news: {
		id: number;
		created_at: Date;
		image: string;
		title: string;
		content: string;
		category: {
			title: string;
		};
	};
} & ComponentProps<"article">;

const defaultClassName =
	"relative h-[141px] w-full md:h-[215px] rounded-md bg-surface p-[10px] pr-[20px] flex flex-row gap-[20px]";

const dateFormatter = new Intl.DateTimeFormat("ru", { day: "numeric", month: "short", year: "numeric" });
const formatNewsDate = (date: Date | string) => dateFormatter.format(new Date(date));

export function NewsCard({ news, className, ...props }: NewsCardProps) {
	const cName = cn([defaultClassName, className]);
	return (
		<article {...props} className={cName}>
			<Link className="top-0 right-0 bottom-0 left-0 absolute" href={`/news/detailed/${news.id}`} />
			<div className="relative rounded-md grow-0 w-[100px] md:w-[264px] lg:w-[379px] h-[121px] md:h-[195px] overflow-hidden shrink-0">
				<Image
					alt={news.title}
					fill
					sizes="(max-width: 768px) 100px, (max-width: 1200px) 264px, 379px"
					src={getS3MediaFileUrl(news.image)}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-[20px] py-[10px]">
				<span className="opacity-50 text-[12px] leading-[15px]">
					{formatNewsDate(news.created_at)} <span>&#183;</span> {news.category.title}
				</span>
				<h6 className="font-bold text-[12px] md:text-[18px] leading-[15px] md:leading-[23px]">{news.title}</h6>
				<p className="text-[12px] md:text-[18px] line-clamp-2 md:line-clamp-4 leading-[15px] md:leading-[20px]">{news.content}</p>
			</div>	
		</article>
	);
}
