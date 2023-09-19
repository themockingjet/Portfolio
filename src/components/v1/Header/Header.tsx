//
//
//

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import { DarkmodeToggle } from "../DarkmodeToggle";
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
        if (isModalOpen) {
            main_container && main_container.classList.add("blur-sm");
        } else {
            main_container && main_container.classList.remove("blur-sm");
        }
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
        <div className="max-h-24 w-full ">
            <div
                className={`fixed inset-x-0 top-0 z-10 flex max-h-24 w-full bg-light-blue dark:bg-dark-blue ${
                    yPosition !== undefined && yPosition < 100 ? "" : isScrollTop ? "shadow-lg" : "hidden"
                }`}
            >
                <AnimatePresence>
                    {yPosition !== undefined && yPosition < 100 ? (
                        <m.div
                            className={`flex h-24 w-full items-center justify-between px-6 xl:container md:px-12 lg:px-28 xl:mx-auto ${
                                yPosition !== undefined && yPosition < 100 ? "" : isScrollTop ? "shadow-lg" : "hidden"
                            }`}
                            initial={{ height: "0rem" }}
                            animate={{ height: "6rem" }}
                            exit={{ height: "0rem" }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <DarkmodeToggle />
                            <HeaderNavbar onClick={() => setIsModalOpen(!isModalOpen)} className="relative z-20" />
                        </m.div>
                    ) : (
                        isScrollTop && (
                            <m.div
                                className={`flex h-20 w-full items-center justify-between px-6 xl:container md:px-12 lg:px-28 xl:mx-auto ${
                                    yPosition !== undefined && yPosition < 100 ? "" : isScrollTop ? "" : "hidden"
                                }`}
                                initial={{ height: "0rem" }}
                                animate={{ height: "5rem" }}
                                exit={{ height: "0rem" }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <DarkmodeToggle />
                                <HeaderNavbar onClick={() => setIsModalOpen(!isModalOpen)} className="relative z-20" />
                            </m.div>
                        )
                    )}
                </AnimatePresence>
                {isModalOpen && <HeaderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)} />}
            </div>
        </div>
    );
}

// <AnimatePresence>
// 				{yPosition < 100 ? (
// 					<Header className={`${yPosition > 18 ? "drop-shadow-lg" : ""}`} />
// 				) : isScrollTop ? (
// 					<Header className={`${yPosition > 18 ? "drop-shadow-lg" : ""}`} />
// 				) : null}
// 			</AnimatePresence>
