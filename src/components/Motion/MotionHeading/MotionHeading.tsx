//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";

import { MotionHeadingProps } from "./MotionHeading.types";

import { child_variants } from "@utils/motion";

export function MotionHeading(props: MotionHeadingProps) {
	//

	return (
		<motion.h1
			className={cn("font-semibold tracking-tighter text-2xl py-6", props.className)}
			variants={child_variants}
			viewport={{ once: false }}
			{...props}
		>
			{props.children}
		</motion.h1>
	);
}
