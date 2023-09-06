//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";

import { MotionTextProps } from "./MotionText.types";
import { child_variants } from "@utils/motion";

export function MotionText(props: MotionTextProps) {
	return (
		<motion.p
			className={cn("text-sm", props.className)}
			viewport={{ once: false, amount: "all", margin: "-100px 0px -100px 0px" }}
			variants={child_variants}
			whileInView={"fade-in"}
			initial="hidden"
			{...props}
		>
			{props.children}
		</motion.p>
	);
}
