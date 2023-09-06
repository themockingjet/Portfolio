//
//
//

import { MotionHeading } from "@components/Motion/MotionHeading";
import { MotionDiv } from "@components/Motion/MotionDiv";
import { MotionText } from "@components/Motion/MotionText";
import { MotionUL } from "@components/Motion/MotionUL";
import { MotionList } from "@components/Motion/MotionList";

export function About() {
	//

	return (
		<section className="flex flex-col h-auto px-6 overflow-hidden">
			<div className="flex space-x-4">
				<MotionHeading whileInView={"fade-in"} initial="hidden" transition={{ duration: 1 }}>
					About Me
				</MotionHeading>
				<MotionDiv
					whileInView={"sl-in"}
					initial="hidden-left"
					transition={{ duration: 0.3 }}
					className="flex-1 h-1 bg-dark-blue self-center"
				>
					<div></div>
				</MotionDiv>
			</div>
			{/* <hr className="flex-1 h-1 bg-dark-blue self-center" /> */}
			<div className="flex flex-col space-y-6">
				<MotionText whileInView={"su-in"} initial="su-out" transition={{ duration: 0.6 }}>
					Hello, I'm Jet Joseph and I enjoy coding. I initially began exploring various fields in the IT industry,
					from Web Development to IT Operations Specialist. However, I realized that my true passion lies in web
					development.
				</MotionText>
				<MotionText whileInView={"su-in"} initial="su-out" transition={{ duration: 0.6 }}>
					Fast-forward to today, I've been learning and building projects to improve my skills in back-end and
					front-end development. I'm currently looking for opportunities to work with other passionate developers.
				</MotionText>
				<MotionText whileInView={"su-in"} initial="su-out" transition={{ duration: 0.6 }}>
					Here are the few technologies I've been working with recently:
				</MotionText>

				<div className="flex flex-wrap w-full h-full font-roboto-mono">
					<MotionDiv className="basis-1/2  shrink-0" whileInView={"fade-in"} initial="hidden">
						<MotionText className="font-semibold underline">Languages</MotionText>
						<MotionUL whileInView={"fade-in"} initial="hidden">
							<MotionList>JavaScript</MotionList>
							<MotionList>TypeScript</MotionList>
							<MotionList>HTML & CSS</MotionList>
						</MotionUL>
					</MotionDiv>

					<MotionDiv className="basis-1/2  shrink-0" whileInView={"fade-in"} initial="hidden">
						<MotionText className="font-semibold underline">Frameworks</MotionText>
						<MotionUL whileInView={"fade-in"} initial="hidden">
							<MotionList>React</MotionList>
							<MotionList>Node.js</MotionList>
							<MotionList>Express</MotionList>
							<MotionList>Tailwind CSS</MotionList>
						</MotionUL>
					</MotionDiv>

					<MotionDiv className="basis-1/2  shrink-0" whileInView={"fade-in"} initial="hidden">
						<MotionText className="font-semibold underline">Databases</MotionText>
						<MotionUL whileInView={"fade-in"} initial="hidden">
							<MotionList>MySQL</MotionList>
							<MotionList>MongoDB</MotionList>
						</MotionUL>
					</MotionDiv>

					<MotionDiv className="basis-1/2  shrink-0" whileInView={"fade-in"} initial="hidden">
						<MotionText className="font-semibold underline">Tools</MotionText>
						<MotionUL whileInView={"fade-in"} initial="hidden">
							<MotionList>GitHub</MotionList>
							<MotionList>VS Code</MotionList>
							<MotionList>Postman</MotionList>
						</MotionUL>
					</MotionDiv>
				</div>
			</div>
		</section>
	);
}
