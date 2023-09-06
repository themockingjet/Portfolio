//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionDivProps = {
	parent?: boolean;
	variants?: HTMLMotionProps<"div">["variants"];
	animate?: HTMLMotionProps<"div">["animate"];
	className?: string;
	children: React.ReactNode;
} & HTMLMotionProps<"div">;
