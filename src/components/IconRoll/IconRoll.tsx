//
//
//

import { cn } from "@utils";
import { motion } from "framer-motion";
import { Children } from "react";
import { IconRollProps } from "./IconRoll.types";

export function IconRoll(props: IconRollProps) {
	//
	const arrChildren = Children.toArray(props.children);

	return (
		<div className={cn("flex space-x-6 self-start w-full", props.className)}>
			{arrChildren.map((icon, index) => {
				return (
					<motion.div
						key={`${index}-${icon}`}
						className="overflow-visible"
						viewport={{ margin: "-20% 0% -20% 0%" }}
						variants={{
							hidden: { opacity: 0, x: ["0%", "500%"] },
							// rolling effect
							visible: {
								opacity: 1,
								x: ["500%", "0%"],
								rotate: [1080, 0],
							},
						}}
						initial="hidden"
						whileInView={"visible"}
						transition={{
							duration: 1,
							delay: index * 0.2,
							type: "spring",
						}}
					>
						{icon !== "" ? icon : null}
					</motion.div>
				);
			})}
		</div>
	);
}
