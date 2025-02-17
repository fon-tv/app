import { Banner } from "@/components/ui/banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
	return (
		<div className="flex flex-col lg:pt-[200px]">
			<div className="z-10 flex flex-col justify-between bg-background mx-0 lg:mx-auto px-[23px] pt-[55px] lg:pt-[49px] pb-[49px] lg:rounded-lg max-w-[1440px] min-h-lvh">
				<div className="flex flex-col gap-[10px] lg:gap-[28px]">
					<Header />
					<div className="flex flex-col gap-[20px]">
						<Banner size="lg" imageUrl="bannerLg.png" imageAlt="BannerRed" href="" />
						<Banner size="md" imageUrl="bannerMd.png" imageAlt="Banner" href="" />
					</div>
					<div className="flex flex-row justify-between gap-[10px]">
						<main className="w-full">
							{children}
						</main>
						<aside className="hidden lg:flex flex-col gap-[10px] min-w-[362px]">
							sidebar content
						</aside>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
