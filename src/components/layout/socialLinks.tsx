import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { InstagramIcon } from "@/components/icons/instagram";
import { TelegramIcon } from "@/components/icons/telegram";
import { VKIcon } from "@/components/icons/vk";
import { YoutubeIcon } from "@/components/icons/youtube";

type SocialLinksProps = {
	buttonClassName?: string;
} & ComponentProps<"div">;

export function SocialLinks({buttonClassName, ...props}: SocialLinksProps) {
	return (
		<div {...props}>
			<Button className={buttonClassName}>
				<a href="https://vk.com"></a>
				<VKIcon />
			</Button>
			<Button className={buttonClassName}>
				<a href="https://vk.com"></a>
				<TelegramIcon />
			</Button>
			<Button className={buttonClassName}>
				<InstagramIcon />
			</Button>
			<Button className={buttonClassName}>
				<YoutubeIcon />
			</Button>
		</div>
	);
}
