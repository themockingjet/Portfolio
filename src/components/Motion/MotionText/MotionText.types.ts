//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionTextProps = {
	variants?: HTMLMotionProps<"p">["variants"];
	animate?: HTMLMotionProps<"p">["animate"];
	className?: string;
	children: React.ReactNode;
} & HTMLMotionProps<"p">;
