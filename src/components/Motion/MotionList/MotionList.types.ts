//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionListProps = {
	variants?: HTMLMotionProps<"li">["variants"];
	animate?: HTMLMotionProps<"li">["animate"];
	className?: string;
	children: React.ReactNode;
} & HTMLMotionProps<"li">;
