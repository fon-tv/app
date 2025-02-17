import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons/instagram";
import { LogoIcon } from "@/components/icons/logo";
import { TelegramIcon } from "@/components/icons/telegram";
import { VKIcon } from "@/components/icons/vk";
import { YoutubeIcon } from "@/components/icons/youtube";

export const Footer: React.FC = () => {
	return (
		<footer className="flex lg:flex-row flex-col gap-[10px]">
			<div className="bg-surface p-[30px] lg:p-[40px] rounded-sm w-full h-[144px]">
				<LogoIcon className="h-[16.76px] lg:h-[29px]"/>
			</div>
			<div className="gap-[7.5px] grid grid-cols-4 lg:grid-cols-2 min-w-[133px] min-h-[49px] lg:min-h-full">
				<Button>
					<a href="https://vk.com"></a>
					<VKIcon />
				</Button>
				<Button>
					<a href="https://vk.com"></a>
					<TelegramIcon />
				</Button>
				<Button>
					<InstagramIcon />
				</Button>
				<Button>
					<YoutubeIcon />
				</Button>
			</div>
		</footer>
	);
};
