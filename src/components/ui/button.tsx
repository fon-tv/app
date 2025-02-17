import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex justify-center items-center gap-2 disabled:opacity-50 rounded-md outline-ring/50 focus-visible:outline-1 dark:outline-ring/40 ring-ring/10 aria-invalid:focus-visible:ring-0 focus-visible:ring-4 dark:ring-ring/20 font-medium text-sm whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 has-[>svg]:cursor-pointer has-[>a]:relative [&_a]:absolute [&_a]:top-0 [&_a]:left-0 [&_a]:right-0 [&_a]:bottom-0",
	{
		variants: {
			variant: {
				default: "bg-surface text-primary-foreground shadow-sm hover:opacity-60",
				destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
				outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "size-full px-4 py-2 has-[>svg]:p-0",
				sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-full",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
