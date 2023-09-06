//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";

import { MotionListProps } from "./MotionList.types";
import { child_variants } from "@utils/motion";

export function MotionList(props: MotionListProps) {
	//
	return (
		<motion.li className={cn("", props.className)} variants={child_variants}>
			{props.children}
		</motion.li>
	);
}
