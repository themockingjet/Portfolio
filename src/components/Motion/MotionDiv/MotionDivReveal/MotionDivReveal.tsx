//
//
//

import { motion } from "framer-motion";
import { MotionDivRevealProps } from "./MotionDivReveal.types";

export function MotionDivReveal(props: MotionDivRevealProps) {
	return (
		<div className="relative overflow-hidden flex">
			<motion.div
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
			</motion.div>
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
