//
//
//

import { useEffect, useState } from "react";
import { AnimatePresence, animate, inView } from "framer-motion";
import { cn } from "@utils";

import { DarkmodeToggle } from "@components/DarkmodeToggle";
import { HeaderNavbar } from "./HeaderNavbar";
import { HeaderModal } from "./HeaderModal";

import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
	//
	const [isModalOpen, setIsModalOpen] = useState(false);

	const disableScrolling = () => {
		// Gets the main container
		const main_container = document.getElementById("main-container");
		// Disables Background Scrolling whilst the SideDrawer/Modal is open
		if (typeof main_container != "undefined" && main_container != null) {
			if (isModalOpen) {
				main_container.style.overflow = "hidden";
			} else {
				main_container.style.overflow = "unset";
			}
		}
	};

	useEffect(() => {
		disableScrolling();
	}, [isModalOpen]);

	return (
		<>
			<header className={cn("min-h-24 h-24 w-full px-6 fixed top-0 bg-white", props.className)}>
				<div className="flex h-full w-full items-center justify-between">
					<DarkmodeToggle />
					<AnimatePresence>{isModalOpen && <HeaderModal />}</AnimatePresence>
					<HeaderNavbar onClick={() => setIsModalOpen(!isModalOpen)} />
				</div>
			</header>
		</>
	);
}
