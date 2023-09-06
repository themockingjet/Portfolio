//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionHeading3Props = {
	variants?: HTMLMotionProps<"h3">["variants"];
	animate?: HTMLMotionProps<"h3">["animate"];
	className?: string;
	children: React.ReactNode;
} & HTMLMotionProps<"h3">;
