//
//
//

import { Children } from "react";
import { motion } from "framer-motion";
import { MotionULRevealProps } from "./MotionULReveal.types";
import { cn } from "@utils";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";

export function MotionULReveal(props: MotionULRevealProps) {
	//
	const arrChildren = Children.toArray(props.children);

	return (
		<div className={cn("relative overflow-hidden", props.className)}>
			<motion.ul
				className={"list-disc list-inside  overflow-hidden"}
				variants={{
					hidden: { opacity: 0, y: "100%" },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				whileInView={"visible"}
				transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
				{...props}
			>
				{arrChildren.map((item, index) => {
					return (
						<MotionListReveal className="mt-0" key={index}>
							{item !== "" ? item : null}
						</MotionListReveal>
					);
				})}
			</motion.ul>
		</div>
	);
}
