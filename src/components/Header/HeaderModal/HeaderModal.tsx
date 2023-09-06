//
//
//

import { motion } from "framer-motion";

export function HeaderModal() {
	//

	return (
		// show button from header on top of modal
		<div
			className={`bg-dark-blue bg-opacity-30 flex backdrop-blur-sm justify-end absolute w-screen right-0 top-0 bottom-0 h-screen`}
		>
			<motion.div
				className="flex justify-items-end bg-light-blue dark:bg-dark-blue w-3/4 md:w-1/2 lg:w-1/3 h-screen"
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				exit={{ x: "100%" }}
				transition={{ duration: 0.3, easings: "easeInOut" }}
			>
				<div className="flex flex-col items-center w-full h-full justify-center font-semibold text-xl space-y-10">
					<a className="" href="#">
						About.
					</a>
					<a className="" href="#">
						Experience.
					</a>
					<a className="" href="#">
						Projects.
					</a>

					<a className="" href="#">
						Resume.
					</a>
				</div>
			</motion.div>
		</div>
	);
}
