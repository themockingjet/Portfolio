//
//
//

import { prof_experience } from "@utils/experience";
import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { TextGroupReveal } from "@components/TextGroup/TextGroupReveal";

export function Experience() {
	//

	return (
		<section className="flex flex-col min-h-screen h-auto px-6 overflow-hidden pb-6">
			<MotionDivReveal
				className="flex space-x-4 w-full"
				viewport={{ margin: "0% 0% 0% 0%" }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<h1 className="font-semibold tracking-tighter text-4xl py-6 dark:text-pale-blue">Experience</h1>
				<div className="flex-1 h-1 bg-dark-blue dark:bg-pale-blue self-center">
					<svg width="5" height="5" viewBox="0 0 5 5" fill="none">
						<path d="M0 0h5z" fill="none" />
					</svg>
				</div>
			</MotionDivReveal>
			<div className="flex flex-col space-y-6">
				{prof_experience.map((item, index) => (
					<div key={index} className="flex-col space-y-2 ">
						<MotionHeading3Reveal>
							{item.title} | <a href={item.link}>{item.company}</a>
						</MotionHeading3Reveal>
						<MotionDivReveal className="font-medium text-sm">{item.date}</MotionDivReveal>
						<TextGroupReveal data={item.exp} />
					</div>
				))}
			</div>
		</section>
	);
}
