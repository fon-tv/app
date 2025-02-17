import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type BannerProps = ComponentProps<"div"> & {
	imageUrl: string;
	imageAlt: string;
	href: string;
	size: "md" | "lg";
};

export const Banner: React.FC<BannerProps> = ({ imageUrl, imageAlt, href, size, ...props }) => {
	const className = cn("relative rounded-sm w-full rounded-sm lg:rounded-md overflow-hidden", {
		"h-[36.67px] lg:h-[74px]": size === "md",
		"h-[70px] lg:h-[150px]": size === "lg",
	});
	return (
		<div className={className} {...props}>
			<img
				src={imageUrl}
				alt={imageAlt}
				className={"object-cover h-full"}
			/>
			<a className="top-0 right-0 bottom-0 left-0 absolute" href={href} target="_blank" rel="noreferrer" />
		</div>
	);
};
