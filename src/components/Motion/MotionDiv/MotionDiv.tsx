//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";
import { Children } from "react";

import { MotionDivProps } from "./MotionDiv.types";
import { child_variants, parent_variants } from "@utils/motion";

export function MotionDiv(props: MotionDivProps) {
	//
	const { parent } = props;

	if (parent) {
		return (
			<motion.div
				className={cn("flex", props.className)}
				viewport={{ once: false }}
				variants={parent_variants}
				{...props}
			>
				{props.children}
			</motion.div>
		);
	}

	return (
		<motion.div className={cn("flex", props.className)} viewport={{ once: false }} variants={child_variants} {...props}>
			{props.children}
		</motion.div>
	);
}
