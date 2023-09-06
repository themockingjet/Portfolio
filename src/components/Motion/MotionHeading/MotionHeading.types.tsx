//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionHeadingProps = {
	variants?: HTMLMotionProps<"h1">["variants"];
	animate?: HTMLMotionProps<"h1">["animate"];
	className?: string;
	children: React.ReactNode;
} & HTMLMotionProps<"h1">;
