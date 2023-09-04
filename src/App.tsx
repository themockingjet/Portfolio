//
//
//

import { useEffect, useState } from "react";

import { Header } from "@root/src/components/Header";
import { Introduction } from "@pages/Introduction";
import { About } from "./pages/About";
import { Scrollbar } from "@components/shared/Scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence } from "framer-motion";

const App = () => {
	//
	const [yPosition, setYPosition] = useState(0);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);

		const timeAnimate = setTimeout(() => {
			setAnimate(false);
		}, 2000);

		return () => {
			clearTimeout(timeAnimate);
		};
	}, []);

	// if (animate) {
	// 	return (
	// 		//
	// 		<div className="flex flex-col justify-center items-center h-screen">
	// 			<div className="animate-bounce text-5xl font-bold">Loading...</div>
	// 		</div>
	// 	);
	// }

	return (
		<Scrollbar className="min-h-screen h-screen">
			<div id="main-container" className="h-full">
				<Header />
				<Introduction />
				<About />
				<div className="flex flex-col">
					<div className="flex flex-col space-y-4 h-full bg-red-300 p-4">
						<div>
							<p>Hi My name is</p>
							<h1 className="text-5xl w-full font-black tracking-tight">Jet Joseph</h1>
							<h3 className="text-2xl py-2 font-bold tracking-tight">Aspiring Web Developer</h3>
							<p className="text-xl py-2 tracking-tight">
								I am a budding web developer with a passion for crafting robust and efficient web solutions.
								Currently, I'm focused on honing my skills in front-end and back-end development, with a
								particular interest in creating seamless user experiences and optimizing website performance.
							</p>
						</div>
						<div className="flex py-4 space-x-5">
							<FontAwesomeIcon size="3x" icon={faSquareGithub} className="text-black dark:text-white" />
							<FontAwesomeIcon size="3x" icon={faLinkedin} className="text-black dark:text-white" />
							<FontAwesomeIcon size="3x" icon={faFacebook} className="text-black dark:text-white" />
						</div>
					</div>
					<section className="flex flex-col h-auto bg-blue-300 text-xl">
						<p className="font-black tracking-wide w-full bg-amber-500 p-4 sticky top-0">ABOUT</p>
						<p className="font-medium p-4">
							Hello there! I'm Jet Joseph, a passionate backend web developer with a journey that began in
							2020. I initially explored various fields in the IT industry, from Web Development to IT
							Operations Specialist. However, I discovered my true passion lies in web development.
						</p>
						<p className="tracking-wide font-medium p-4">
							My commitment to web development goes hand in hand with a dedication to lifelong learning. I'm
							passionate about staying updated with the latest trends, technologies, and UX design principles.
							I see every challenge as an opportunity to grow, and I believe that continuous learning is key to
							delivering innovative solutions to clients and users.
						</p>
						<p className="tracking-wide font-medium p-4">
							When I'm not coding, I enjoy hanging out with my dog, playing video games, and watching anime.
						</p>
					</section>
					<section className="flex flex-col h-full bg-red-300">
						<p className="text-xl font-black tracking-wide w-full bg-amber-500 p-4 sticky top-0">Experience</p>
						<div className="p-4 flex-col text-xl font-medium">
							<h4>Nov 2021 - Jan 2023</h4>
							<h1>
								Freelance Game Tester | <a href="https://daqa.net/">DAQA</a>
							</h1>
							<ul>
								<li>
									Consistent Project Involvement: Actively participated in an average of three projects per
									week, conducting functional testing and beta testing to ensure product quality and
									reliability.
								</li>
								<li>
									Proactive Learning and Collaboration: Engaged in proactive learning and collaboration
									within the DAQA Community on Discord, attending QA trainings to enhance efficiency and
									drive continuous improvement in quality assurance processes.
								</li>
							</ul>
						</div>
						<div className="p-4 flex-col text-xl font-medium">
							<h4>Mar - Nov 2022</h4>
							<h1>
								IT Operations Specials | <a href="https://www.pnb.com.ph/">PNB - Head Office</a>
							</h1>
							<ul>
								<li>
									Automation Script Development: Developed and implemented automation scripts for daily
									operations, resulting in a 40% reduction in manual work.
								</li>
								<li>
									System Optimization: Successfully managed open system operations, optimizing the
									performance and functionality of various systems and processes, leading to improved
									efficiency and enhanced productivity.System Optimization: Successfully managed open
									system operations, optimizing the performance and functionality of various systems and
									processes, leading to improved efficiency and enhanced productivity.
								</li>
								<li>
									Incident Report Management: Proactively handled and meticulously documented incident
									reports related to the operations department's responsibilities, ensuring swift issue
									resolution and increased transparency in workflow.
								</li>
							</ul>
						</div>
						<div className="p-4 flex-col text-xl font-medium">
							<h4>July - Mar 2022</h4>
							<h1>Freelance Web Developer</h1>
							<ul>
								<li>
									{" "}
									Front-End Proficiency: Gained proficiency in HTML, CSS, and JavaScript for creating
									user-friendly web interfaces.
								</li>
								<li>
									Developed PL/SQL Backend Skills: Developed skills in PL/SQL for efficient database
									management and server-side logic.
								</li>
								<li>
									Selenium Automation Learning: Learned Selenium automation to enhance testing efficiency
									and product quality.
								</li>
							</ul>
						</div>
						<div className="p-4 flex-col text-xl font-medium">
							<h4>Apr - July 2021</h4>
							<h1>
								Web Developer Training |{" "}
								<a href="https://www.linkedin.com/company/qualis-consulting-inc/?originalSubdomain=ph">
									Qualis Consulting, Inc
								</a>
							</h1>
							<ul>
								<li>
									{" "}
									Front-End Proficiency: Gained proficiency in HTML, CSS, and JavaScript for creating
									user-friendly web interfaces.
								</li>
								<li>
									Developed PL/SQL Backend Skills: Developed skills in PL/SQL for efficient database
									management and server-side logic.
								</li>
								<li>
									Selenium Automation Learning: Learned Selenium automation to enhance testing efficiency
									and product quality.
								</li>
							</ul>
						</div>
					</section>
					<section className="flex flex-col h-auto bg-blue-300 text-xl">
						<p className="font-black tracking-wide w-full bg-amber-500 p-4 sticky top-0">Projects</p>
						<div className="p-4 flex-col text-xl font-medium">
							<h1 className="font-bold">Simple Web Reservation App</h1>
							<p>
								Web app that is designed to streamline reservation processes for small clinics, single-unit
								rooms, or apartments. It offers a user-friendly and efficient solution for managing bookings
								and appointments, making it easy for both businesses and customers to schedule and confirm
								reservations with ease.
							</p>
							<div>ReactJS | ExpressJS | MySQL</div>
						</div>
						<div className="p-4 flex-col text-xl font-medium">
							<h1 className="font-bold">Discord Bot: Axie Infinity</h1>
							<a href="https://github.com/themockingjet/discord-axie-bot-main">repo</a>
							<p>
								An automated Discord bot that provides users with real-time updates on the latest Axie
								Infinity prices. It can also be used to calculate the breeding cost of Axies, allowing users
								to make informed decisions when buying and selling Axies.
							</p>
							<div>ExpressJS | GraphQL | Axie Infinity API | Heroku </div>
						</div>
						<div className="p-4 flex-col text-xl font-medium">
							<h1 className="font-bold">Discord Bot: Cryptocurrency Price Ticker</h1>
							<a href="https://github.com/themockingjet/discord-crypto-converter">repo</a>
							<p>
								An automated Discord bot that provides users with real-time price changes for various
								cryptocurrencies. It can also be used to calculate price conversions between different
								cryptocurrencies, allowing users to make informed decisions when buying and selling
								cryptocurrencies.
							</p>
							<div>ExpressJS | GraphQL | Axie Infinity API | Heroku </div>
						</div>
						<div className="p-4 flex-col text-xl font-medium">
							<h1 className="font-bold">
								Thesis: Faculty Load Monitoring And Scheduling System for IT Department
							</h1>
							<a href="https://github.com/themockingjet/Faculty-Load-Monitoring">repo</a>
							<p>
								A software that eliminated scheduling conflicts, reduced paper consumption, and simplified
								the scheduling process, saving time and reducing complexity for faculty and administrators.
								This achievement brought efficiency and harmony to the department's operations, marking it as
								a significant past accomplishment.
							</p>
							<div>C# WPF | MySQL </div>
						</div>
					</section>
					<section>Coded in Visual Studio Code by yours truly. Built with ReactJS and Tailwind CSS</section>
				</div>
			</div>
		</Scrollbar>
		// </div>
	);
};

export default App;
