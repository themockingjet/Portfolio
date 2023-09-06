//
//
//

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@utils";

import { DarkmodeToggle } from "@components/DarkmodeToggle";
import { HeaderNavbar } from "./HeaderNavbar";
import { HeaderModal } from "./HeaderModal";

import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
	//
	const { yPosition, isScrollTop } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	// disable scrolling when modal is open using useffect
	useEffect(() => {
		const main_container = document.getElementById("main-container");

		main_container &&
			main_container.addEventListener("scroll", (e) => {
				// prevent going back to top
				e.preventDefault();
			});

		return () => {
			main_container &&
				main_container.removeEventListener("scroll", (e) => {
					// prevent going back to top
					e.preventDefault();
				});
		};
	}, [isModalOpen]);

	return (
		<AnimatePresence>
			{yPosition !== undefined && yPosition < 100 ? (
				<motion.div
					className={cn(
						"bg-light-blue dark:bg-dark-blue px-6 min-h-24 h-24 w-full fixed top-0 z-50",
						props.className
					)}
					initial={{ height: "0rem" }}
					animate={{ height: "6rem" }}
					exit={{ height: "0rem" }}
					transition={{ duration: 0.18, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.1 }}
				>
					<div className="flex h-full w-full items-center justify-between z-10">
						<DarkmodeToggle />
						<HeaderNavbar onClick={() => setIsModalOpen(!isModalOpen)} />
						{isModalOpen && <HeaderModal />}
					</div>
				</motion.div>
			) : (
				isScrollTop && (
					<motion.div
						className={cn(
							"bg-light-blue dark:bg-dark-blue px-6 min-h-20 h-20 w-full fixed top-0 z-50 drop-shadow-lg",
							props.className
						)}
						initial={{ height: "0rem" }}
						animate={{ height: "5rem" }}
						exit={{ height: "0rem" }}
						transition={{ duration: 0.18, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.1 }}
					>
						<div className="flex h-full w-full items-center justify-between z-10">
							<DarkmodeToggle />
							<HeaderNavbar onClick={() => setIsModalOpen(!isModalOpen)} />
							{isModalOpen && <HeaderModal />}
						</div>
					</motion.div>
				)
			)}
		</AnimatePresence>
	);
}

// <AnimatePresence>
// 				{yPosition < 100 ? (
// 					<Header className={`${yPosition > 18 ? "drop-shadow-lg" : ""}`} />
// 				) : isScrollTop ? (
// 					<Header className={`${yPosition > 18 ? "drop-shadow-lg" : ""}`} />
// 				) : null}
// 			</AnimatePresence>
