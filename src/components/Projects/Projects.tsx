//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";
import { MotionULReveal } from "@components/Motion/MotionUL/MotionULReveal";

export function Projects() {
	return (
		<section className="flex flex-col h-auto px-6 mb-6 overflow-hidden">
			<MotionDivReveal
				className="flex space-x-4 w-full"
				viewport={{ margin: "0% 0% 0% 0%" }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<h1 className="font-semibold tracking-tighter text-4xl py-6 dark:text-pale-blue">Projects</h1>
				<div className="flex-1 h-1 bg-dark-blue dark:bg-pale-blue self-center">
					<svg width="5" height="5" viewBox="0 0 5 5" fill="none">
						<path d="M0 0h5z" fill="none" />
					</svg>
				</div>
			</MotionDivReveal>

			<div className="flex flex-col space-y-6">
				<div className="flex-col space-y-4 text-sm">
					<MotionHeading3Reveal className="font-bold">Simple Web Reservation App</MotionHeading3Reveal>
					<MotionDivReveal>
						<p>
							Web app that is designed to streamline reservation processes for small clinics, single-unit
							rooms, or apartments. It offers a user-friendly and efficient solution for managing bookings and
							appointments, making it easy for both businesses and customers to schedule and confirm
							reservations with ease.
						</p>
					</MotionDivReveal>
					<MotionULReveal className="flex flex-wrap">
						<MotionListReveal className="code-language bg-code-yellow ">JavaScript</MotionListReveal>
						<MotionListReveal className="code-language bg-code-blue ">TypeScript</MotionListReveal>
						<MotionListReveal className="code-language bg-code-orange ">HTML & CSS</MotionListReveal>
					</MotionULReveal>

					<MotionDivReveal>
						<div className="flex items-center justify-center h-24 bg-gray-300 rounded w-48 dark:bg-gray-700 overflow-hidden">
							<img src="/img/swa.bmp" alt="reservation" />
						</div>
					</MotionDivReveal>
					<MotionDivReveal className="w-full">
						<div className="flex-1 h-1 bg-dark-blue dark:bg-pale-blue self-center">
							<svg width="5" height="5" viewBox="0 0 5 5" fill="none">
								<path d="M0 0h5z" fill="none" />
							</svg>
						</div>
					</MotionDivReveal>
				</div>
				<div className="flex-col space-y-4 text-sm">
					<MotionHeading3Reveal className="font-bold">
						<a href="https://github.com/themockingjet/discord-axie-bot-main">Discord Bot: Axie Infinity</a>
					</MotionHeading3Reveal>
					<MotionDivReveal>
						<p>
							An automated Discord bot that provides users with real-time updates on the latest Axie Infinity
							prices. It can also be used to calculate the breeding cost of Axies, allowing users to make
							informed decisions when buying and selling Axies.
						</p>
					</MotionDivReveal>
					<MotionULReveal className="flex flex-wrap">
						<MotionListReveal className="code-language bg-code-yellow">ExpressJS</MotionListReveal>
						<MotionListReveal className="code-language bg-code-pink">GraphQL</MotionListReveal>
						<MotionListReveal className="code-language bg-code-purple">Heroku</MotionListReveal>
						<MotionListReveal className="code-language bg-code-blue">Axie Infinity API</MotionListReveal>
						<MotionListReveal className="code-language bg-code-blue">Discord API</MotionListReveal>
					</MotionULReveal>
					<MotionDivReveal className="w-full">
						<div className="flex-1 h-1 bg-dark-blue dark:bg-pale-blue self-center">
							<svg width="5" height="5" viewBox="0 0 5 5" fill="none">
								<path d="M0 0h5z" fill="none" />
							</svg>
						</div>
					</MotionDivReveal>
				</div>
				<div className="flex-col space-y-4 text-sm h-full">
					<MotionHeading3Reveal className="font-bold">
						<a href="https://github.com/themockingjet/discord-crypto-converter">
							Discord Bot: Cryptocurrency Price Ticker
						</a>
					</MotionHeading3Reveal>
					<MotionDivReveal>
						<p>
							An automated Discord bot that provides users with real-time price changes for various
							cryptocurrencies. It can also be used to calculate price conversions between different
							cryptocurrencies, allowing users to make informed decisions when buying and selling
							cryptocurrencies.
						</p>
					</MotionDivReveal>
					<MotionULReveal className="flex flex-wrap h-full">
						<MotionListReveal className="code-language bg-code-yellow">ExpressJS</MotionListReveal>
						<MotionListReveal className="code-language bg-code-purple">Heroku</MotionListReveal>
						<MotionListReveal className="code-language bg-code-green">CoinGecko API</MotionListReveal>
						<MotionListReveal className="code-language bg-code-blue">Discord API</MotionListReveal>
					</MotionULReveal>
					<MotionDivReveal className="w-full">
						<div className="flex-1 h-1 bg-dark-blue dark:bg-pale-blue self-center">
							<svg width="5" height="5" viewBox="0 0 5 5" fill="none">
								<path d="M0 0h5z" fill="none" />
							</svg>
						</div>
					</MotionDivReveal>
				</div>
				<div className="flex-col space-y-4 text-sm">
					<MotionHeading3Reveal className="font-bold">
						<a href="https://github.com/themockingjet/Faculty-Load-Monitoring">
							Thesis: Faculty Load Monitoring And Scheduling System for IT Department
						</a>
					</MotionHeading3Reveal>
					<MotionDivReveal>
						<p>
							A software that eliminated scheduling conflicts, reduced paper consumption, and simplified the
							scheduling process, saving time and reducing complexity for faculty and administrators. This
							achievement brought efficiency and harmony to the department's operations, marking it as a
							significant past accomplishment.
						</p>
					</MotionDivReveal>
					<MotionULReveal className="flex flex-wrap">
						<MotionListReveal className="code-language bg-code-green">C# WPF</MotionListReveal>
						<MotionListReveal className="code-language bg-white">MySQL</MotionListReveal>
					</MotionULReveal>
				</div>
			</div>
		</section>
	);
}
