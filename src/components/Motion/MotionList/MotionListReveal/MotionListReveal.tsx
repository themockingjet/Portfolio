//
//
//

import { motion } from "framer-motion";
import { MotionListRevealProps } from "./MotionListReveal.types";
import { cn } from "@utils";

export function MotionListReveal(props: MotionListRevealProps) {
	return (
		<div className={cn("relative overflow-hidden", props.className)}>
			<motion.li
				className="overflow-hidden"
				variants={{
					hidden: { opacity: 0, y: "100%" },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				whileInView={"visible"}
				transition={{ duration: 0.5 }}
				{...props}
			>
				{props.children}
			</motion.li>
			<motion.div
				viewport={{ margin: "-20% 0% -20% 0%" }}
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				whileInView={"visible"}
				transition={{ duration: 0.5, ease: "easeIn" }}
				className="absolute top-0 bottom-0 w-full h-full bg-light-blue dark:bg-dark-blue"
			/>
		</div>
	);
}
