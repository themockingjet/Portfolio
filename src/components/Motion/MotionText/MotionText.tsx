//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";

import { MotionTextProps } from "./MotionText.types";
import { child_variants } from "@utils/motion";

export function MotionText(props: MotionTextProps) {
	return (
		<motion.p className={cn("", props.className)} viewport={{ once: false }} variants={child_variants} {...props}>
			{props.children}
		</motion.p>
	);
}
