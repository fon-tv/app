"use client";

import type React from "react";
import { useState, useRef, useEffect, useLayoutEffect, type PropsWithChildren, useCallback } from "react";
import { cn } from "@/lib/utils";

type OverflowRowProps = PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement> & {
		wrapperElement?: React.ElementType;
		showTrigger: React.ReactElement;
	};

const defaultClassName = "relative flex items-center";

export function OverflowRow({
	children,
	className,
	wrapperElement: Wrapper = "div",
	showTrigger,
	...props
}: OverflowRowProps) {
	const [isOverflowing, setIsOverflowing] = useState(false);
	const [showAll, setShowAll] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const checkOverflow = useCallback(() => {
		if (containerRef.current && contentRef.current) {
			const isContentOverflowing = contentRef.current.scrollWidth > containerRef.current.clientWidth;
			if (isContentOverflowing !== isOverflowing) {
				setIsOverflowing(isContentOverflowing);
			}
		}
	}, [isOverflowing]);

	// Initial check using useLayoutEffect
	useLayoutEffect(() => {
		checkOverflow();
	}, [checkOverflow]);

	// Resize listener using useEffect
	useEffect(() => {
		window.addEventListener("resize", checkOverflow);
		return () => window.removeEventListener("resize", checkOverflow);
	}, [checkOverflow]);

	useEffect(() => {
		const content = contentRef.current;
		if (!content) return;
		const handleScroll = (e: WheelEvent) => {
			if (!showAll) return;
			e.preventDefault();
			content.scrollLeft += e.deltaY;
		};
		content.addEventListener("wheel", handleScroll);
		return () => {
			content.removeEventListener("wheel", handleScroll);
		};
	}, [showAll]);

	const handleShowAll = (e: React.MouseEvent) => {
		e.stopPropagation();
		setShowAll(true);
	};

	const cName = cn(defaultClassName, className);

	return (
		<Wrapper className={cName} ref={containerRef} {...props}>
			<div
				ref={contentRef}
				style={{ scrollbarWidth: "none" }}
				className={cn("h-full flex items-center space-x-2 transition-all duration-300 overflow-y-hidden", {
					"overflow-x-scroll": showAll,
					"overflow-x-hidden": !showAll,
				})}
			>
				{children}
			</div>
			{isOverflowing && (
				<div className="top-0 right-0 bottom-0 left-0 absolute flex items-center h-full pointer-events-none margin-0">
					<div className="right-[-1px] absolute inset-y-0 bg-gradient-to-r from-transparent to-background w-[100px]" />
					<div className="left-[-1px] absolute inset-y-0 bg-gradient-to-l from-transparent to-background w-[100px]" />
					{!showAll && (
						<div className="right-0 bottom-0 z-10 absolute h-full pointer-events-auto" onClick={handleShowAll}>
							{showTrigger}
						</div>
					)}
				</div>
			)}
		</Wrapper>
	);
}
