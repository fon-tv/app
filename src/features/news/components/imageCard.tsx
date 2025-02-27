import { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getS3MediaFileUrl } from "@/utils/s3";

type NewsImageCardProps = {
	wide?: boolean;
	news: {
		id: number;
		image: string;
		title: string;
	};
} & ComponentProps<"article">;

const defaultClassName =
	"relative w-full h-[141px] h-[150px] lg:h-[280px] rounded-md overflow-hidden";

export function NewsImageCard({ news, wide, className, ...props }: NewsImageCardProps) {
	const cName = cn(defaultClassName, className, {
		"md:h-[199px] lg:h-[280px]": wide,
	});
	const sizes = wide
		? "(max-width: 768px) 440px, (max-width: 1200px) 1000px, 1000px"
		: "(max-width: 768px) 440px, (max-width: 1200px) 359px, 490px";

	return (
		<article {...props} className={cName}>
			<Link className="top-0 right-0 bottom-0 left-0 z-10 absolute" href={`/news/detailed/${news.id}`} />
			<Image
				alt={news.title}
				fill
				sizes={sizes}
				src={getS3MediaFileUrl(news.image)}
                className="z-0 object-cover"
			/>
            <h6 className="bottom-[20px] left-[20px] absolute font-bold text-[12px] md:text-[18px] leading-[15px] md:leading-[23px]">
                {news.title}    
            </h6>
		</article>
	);
}
