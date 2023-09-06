//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionULProps = {
	variants?: HTMLMotionProps<"ul">["variants"];
	animate?: HTMLMotionProps<"ul">["animate"];
	className?: string;
	children: React.ReactNode;
} & HTMLMotionProps<"ul">;
