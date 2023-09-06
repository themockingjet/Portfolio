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
                        "min-h-24 fixed inset-x-0 top-0 z-10 h-24 w-full bg-light-blue px-6 xl:container dark:bg-dark-blue md:px-12 lg:px-28 xl:mx-auto",
                        props.className,
                    )}
                    initial={{ height: "0rem" }}
                    animate={{ height: "6rem" }}
                    exit={{ height: "0rem" }}
                    transition={{ duration: 0.18, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.1 }}
                >
                    <div className="z-10 flex h-full w-full items-center justify-between md:px-12 lg:px-28 xl:mx-auto">
                        <DarkmodeToggle />
                        <HeaderNavbar onClick={() => setIsModalOpen(!isModalOpen)} />
                        {isModalOpen && <HeaderModal />}
                    </div>
                </motion.div>
            ) : (
                isScrollTop && (
                    <motion.div
                        className={cn(
                            "min-h-20 fixed top-0 z-20 h-20 w-full bg-light-blue px-6 drop-shadow-lg dark:bg-dark-blue",
                            props.className,
                        )}
                        initial={{ height: "0rem" }}
                        animate={{ height: "5rem" }}
                        exit={{ height: "0rem" }}
                        transition={{ duration: 0.18, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.1 }}
                    >
                        <div className=" flex h-full w-full items-center justify-between px-6 xl:container md:px-12 lg:px-28 xl:mx-auto">
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
