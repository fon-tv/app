import { LogoIcon } from "@/components/icons/logo";
import { SocialLinks } from "./socialLinks";

export const Footer: React.FC = () => {
	return (
		<footer className="flex lg:flex-row flex-col gap-[10px]">
			<div className="bg-surface p-[30px] lg:p-[40px] rounded-sm w-full h-[144px]">
				<LogoIcon className="h-[16.76px] lg:h-[29px]" />
			</div>

			<SocialLinks className="gap-[7.5px] grid grid-cols-4 lg:grid-cols-2 min-w-[133px] min-h-[49px] lg:min-h-full" />
		</footer>
	);
};
