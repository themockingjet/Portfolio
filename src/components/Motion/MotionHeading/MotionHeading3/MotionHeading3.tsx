//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";

import { MotionHeading3Props } from "./MotionHeading3.types";
import { child_variants } from "@utils/motion";

export function MotionHeading3(props: MotionHeading3Props) {
	//

	return (
		<motion.h3
			className={cn("font-bold tracking-tighter", props.className)}
			variants={child_variants}
			viewport={{ once: false }}
			{...props}
		>
			{props.children}
		</motion.h3>
	);
}
