//
//
//

import { MotionList } from "@components/Motion/MotionList";
import { MotionUL } from "@components/Motion/MotionUL";

import { TextGroupProps } from "./TextGroup.types";
import { child_variants } from "@utils/motion";

export function TextGroup({ data }: TextGroupProps) {
	//
	return (
		<MotionUL
			className="list-disc pl-4 flex-col space-y-2 text-sm snap-y"
			initial="su-out"
			whileInView={"su-in"}
			transition={{ staggerChildren: 0.05 }}
		>
			{data &&
				data.map((item, index) => (
					<MotionList key={index} variants={child_variants}>
						<p className={`line-clamp-2 hover:line-clamp-none`}>
							<b>
								<u>{item.keyword}</u>
							</b>{" "}
							{item.description}
						</p>
					</MotionList>
				))}
		</MotionUL>
	);
}
