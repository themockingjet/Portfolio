//
//
//

import { motion } from "framer-motion";

import { MotionULProps } from "./MotionUL.types";
import { parent_variants } from "@utils/motion";
import { cn } from "@utils";

export function MotionUL(props: MotionULProps) {
	return (
		<motion.ul
			className={cn("list-disc list-inside", props.className)}
			viewport={{ once: false }}
			variants={parent_variants}
			{...props}
		>
			{props.children}
		</motion.ul>
	);
}
