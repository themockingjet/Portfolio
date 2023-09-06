//
//
//

import { MotionHeading } from "@components/Motion/MotionHeading";
import { MotionDiv } from "@components/Motion/MotionDiv";
import { MotionText } from "@components/Motion/MotionText";
import { MotionUL } from "@components/Motion/MotionUL";
import { MotionList } from "@components/Motion/MotionList";

export function Projects() {
	return (
		<section className="flex flex-col h-auto px-6 mb-6 overflow-hidden">
			<div className="flex space-x-4">
				<MotionHeading whileInView={"fade-in"} initial="hidden" transition={{ duration: 1 }}>
					Projects
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
			<div className="flex flex-col space-y-6">
				<div className="flex-col space-y-4 text-sm">
					<h3 className="font-bold">Simple Web Reservation App</h3>

					<p className="">
						Web app that is designed to streamline reservation processes for small clinics, single-unit rooms, or
						apartments. It offers a user-friendly and efficient solution for managing bookings and appointments,
						making it easy for both businesses and customers to schedule and confirm reservations with ease.
					</p>
					<div className="flex flex-wrap">
						<p className="code-language">ReactJS</p>
						<p className="code-language">ExpressJS </p>
						<p className="code-language">MySQL</p>
					</div>
					<div className="flex items-center justify-center h-24 bg-gray-300 rounded w-48 dark:bg-gray-700 overflow-hidden">
						<img src="/img/swa.bmp" alt="reservation" />
					</div>
					<hr className="flex-1 h-0.5 bg-black self-center"></hr>
				</div>
				<div className="flex-col space-y-4 text-sm">
					<h3 className="font-bold">
						<a href="https://github.com/themockingjet/discord-axie-bot-main">Discord Bot: Axie Infinity</a>
					</h3>
					<p>
						An automated Discord bot that provides users with real-time updates on the latest Axie Infinity
						prices. It can also be used to calculate the breeding cost of Axies, allowing users to make informed
						decisions when buying and selling Axies.
					</p>
					<div className="flex flex-wrap">
						<p className="code-language">ExpressJS</p>
						<p className="code-language">GraphQL</p>
						<p className="code-language">Axie Infinity API</p>
						<p className="code-language">Heroku</p>
					</div>
					<hr className="flex-1 h-0.5 bg-black self-center"></hr>
				</div>
				<div className="flex-col space-y-4 text-sm">
					<h3 className="font-bold">
						<a href="https://github.com/themockingjet/discord-crypto-converter">
							Discord Bot: Cryptocurrency Price Ticker
						</a>
					</h3>
					<p>
						An automated Discord bot that provides users with real-time price changes for various
						cryptocurrencies. It can also be used to calculate price conversions between different
						cryptocurrencies, allowing users to make informed decisions when buying and selling cryptocurrencies.
					</p>
					<div className="flex flex-wrap">
						<p className="code-language">ExpressJS</p>
						<p className="code-language">GraphQL</p>
						<p className="code-language">Axie Infinity API</p>
						<p className="code-language">Heroku</p>
					</div>
					<hr className="flex-1 h-0.5 bg-black self-center"></hr>
				</div>
				<div className="flex-col space-y-4 text-sm">
					<h3 className="font-bold">
						<a href="https://github.com/themockingjet/Faculty-Load-Monitoring">
							Thesis: Faculty Load Monitoring And Scheduling System for IT Department
						</a>
					</h3>
					<p>
						A software that eliminated scheduling conflicts, reduced paper consumption, and simplified the
						scheduling process, saving time and reducing complexity for faculty and administrators. This
						achievement brought efficiency and harmony to the department's operations, marking it as a
						significant past accomplishment.
					</p>
					<div className="flex flex-wrap">
						<p className="code-language">C# WPF</p>
						<p className="code-language">MySQL</p>
					</div>
				</div>
			</div>
		</section>
	);
}
