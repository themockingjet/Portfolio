//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";

import { MotionHeading3RevealProps } from "./MotionHeading3Reveal.types";

export function MotionHeading3Reveal(props: MotionHeading3RevealProps) {
	return (
		<div className="relative overflow-hidden flex dark:text-pale-blue">
			<motion.h3
				className={cn("font-bold tracking-tighter", props.className)}
				variants={{
					hidden: { opacity: 0, y: "100%" },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				whileInView={"visible"}
				transition={{ duration: 0.5, delay: 0.3 }}
				{...props}
			>
				{props.children}
			</motion.h3>
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
