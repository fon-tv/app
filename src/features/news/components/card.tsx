import { ComponentProps } from "react";
import Link from "next/link";
import { News } from "@/types/news";
import { cn } from "@/lib/utils";

type NewsCardProps = { news: News } & ComponentProps<"article">;

const defaultClassName = "relative h-[141px] w-full md:h-[215px] rounded-md bg-surface p-[10px] flex flex-row gap-[20px]"

export function NewsCard({ news, className, ...props }: NewsCardProps) {
	const cName = cn([defaultClassName, className]);
	return (
		<article
			{...props}
			className={cName}
		>
			<Link className="top-0 right-0 bottom-0 left-0 absolute" href={`/news/${news.id}`}/>
			<div className="bg-gray-700 rounded-md grow-0 w-[100px] md:w-[264px] lg:w-[379px] h-[121px] md:h-[195px] shrink-0"></div>
			<div className="flex flex-col gap-[20px] py-[10px]">
				<span className="opacity-50 text-[12px] leading-[15px]">
					28 окт 17:51 <span>&#183;</span> Футбол
				</span>
				<h6 className="font-bold text-[12px] md:text-[18px] leading-[15px] md:leading-[23px]">{news.title}</h6>
				<p className="text-[12px] md:text-[18px] leading-[15px] md:leading-[20px]">{news.body}</p>
			</div>
		</article>
	);
}
