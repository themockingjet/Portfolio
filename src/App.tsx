//
//
//

import { useEffect, useState } from "react";

import { Scrollbar } from "@components/Scrollbar";
import { Header } from "@components/Header";
import { Introduction } from "@components/Introduction";
import { About } from "@components/About";
import { Experience } from "@components/Experience";
import { Projects } from "@components/Projects";
import { Footer } from "@components/Footer";

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
			className="min-h-screen h-screen overflow-hidden bg-light-blue dark:bg-dark-blue text-dark-blue dark:text-crystal"
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
