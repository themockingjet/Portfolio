//
//
//

import { inView } from "framer-motion";

import { MotionHeading } from "@components/Motion/MotionHeading";
import { MotionDiv } from "@components/Motion/MotionDiv";
import { MotionText } from "@components/Motion/MotionText";
import { MotionHeading3 } from "@components/Motion/MotionHeading/MotionHeading3";
import { TextGroup } from "@components/TextGroup";

import { prof_experience } from "@utils/experience";

export function Experience() {
	//

	return (
		<section className="flex flex-col min-h-screen h-auto px-6overflow-hidden pb-2">
			<div className="flex space-x-4">
				<MotionHeading whileInView={"fade-in"} initial="hidden" transition={{ duration: 1 }}>
					Experience
				</MotionHeading>
				<MotionDiv
					whileInView={"sl-in"}
					initial="hidden-left"
					transition={{ duration: 0.8, type: "spring" }}
					className="flex-1 h-1 bg-dark-blue self-center"
				>
					<div></div>
				</MotionDiv>
			</div>
			<div className="flex flex-col space-y-6">
				{prof_experience.map((item, index) => (
					<MotionDiv key={index} className="flex-col space-y-2" initial="hidden" whileInView={"fade-in"}>
						<div>
							<MotionHeading3 whileInView={"su-in"} initial="su-out">
								{item.title} | <a href={item.link}>${item.company}</a>
							</MotionHeading3>
							<MotionText className="font-medium">{item.date}</MotionText>
						</div>
						<TextGroup data={item.exp} />
					</MotionDiv>
				))}
			</div>
		</section>
	);
}
