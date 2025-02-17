import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavLinkProps = {
	active?: boolean;
} & React.ComponentProps<typeof Link>;

const defaultClassName = "[&_*]:opacity-50 hover:[&_*]:opacity-100 [&.active_*]:opacity-100";

export function NavLink({ className, active, children, ...props }: NavLinkProps) {
	const cName = cn([defaultClassName, className, active && "active"]);
	return (
		<Link
			{...props}
			className={cName}
		>
			{children}
		</Link>
	);
}