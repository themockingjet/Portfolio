//
//
//

import { motion } from "framer-motion";
import { TextGroupRevealProps } from "./TextGroupReveal.types";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";

export function TextGroupReveal({ data }: TextGroupRevealProps) {
	return (
		<div className="relative overflow-hidden flex">
			<motion.ul
				className="list-disc pl-4 flex-col space-y-2 text-sm overflow-hidden"
				variants={{
					hidden: { opacity: 0, y: "50%" },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				whileInView={"visible"}
				transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
			>
				{data.map((item, index) => (
					<MotionListReveal key={index}>
						<p className={`line-clamp-2 hover:line-clamp-none`}>
							<b>
								<u>{item.keyword}</u>
							</b>{" "}
							{item.description}
						</p>
					</MotionListReveal>
				))}
			</motion.ul>
		</div>
	);
}
