//
//
//

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Scrollbar } from "@components/Scrollbar";
import { Header } from "@components/Header";
import { Introduction } from "@pages/Introduction";
import { About } from "@pages/About";
import { Experience } from "@pages/Experience";
import { Projects } from "@pages/Projects";
import { Footer } from "@components/Footer";
import { HeaderModal } from "@components/Header/HeaderModal";

const App = () => {
	//
	const [yPosition, setYPosition] = useState(0);
	const [isScrollTop, setIsScrollTop] = useState(false);
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

	// if (animate) {
	// 	return (
	// 		//
	// 		<div className="flex flex-col justify-center items-center h-screen">
	// 			<div className="animate-bounce text-5xl font-bold">Loading...</div>
	// 		</div>
	// 	);
	// }

	return (
		<Scrollbar
			className="min-h-screen h-screen overflow-hidden bg-light-blue dark:bg-dark-blue text-dark-blue  dark:text-medium-blue"
			renderThumbVertical={(props) => (
				<div {...props} className="bg-dark-blue dark:bg-light-blue text-dark-blue rounded-full w-full" />
			)}
			onScrollFrame={(scrollPosition) => {
				setYPosition((prev) => {
					if (scrollPosition.scrollTop < prev) {
						setIsScrollTop(true);
					} else {
						setIsScrollTop(false);
					}
					return scrollPosition.scrollTop;
				});
			}}
		>
			<Header yPosition={yPosition} isScrollTop={isScrollTop} />
			<div id="main-container" className="h-full ">
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
