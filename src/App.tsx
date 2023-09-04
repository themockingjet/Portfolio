//
//
//

import { useEffect, useState } from "react";
import { Scrollbar } from "@components/Scrollbar";

import { Header } from "@components/Header";
import { Introduction } from "@pages/Introduction";
import { About } from "@pages/About";
import { Experience } from "@pages/Experience";
import { Projects } from "@pages/Projects";
import { Footer } from "@components/Footer";

const App = () => {
	//
	const [yPosition, setYPosition] = useState(0);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);

		const timeAnimate = setTimeout(() => {
			setAnimate(false);
		}, 1500);

		return () => {
			clearTimeout(timeAnimate);
		};
	}, []);

	if (animate) {
		return (
			//
			<div className="flex flex-col justify-center items-center h-screen">
				<div className="animate-bounce text-5xl font-bold">Loading...</div>
			</div>
		);
	}

	return (
		<Scrollbar className="min-h-screen h-screen">
			<div id="main-container" className="h-full">
				<Header />
				<Introduction />
				<About />
				<Experience />
				<Projects />
				<Footer />
			</div>
		</Scrollbar>
	);
};

export default App;
