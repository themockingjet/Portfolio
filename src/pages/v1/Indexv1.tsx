//
//
//

import { useState } from "react";

import { Scrollbar } from "@components/shared/Scrollbar";
import { Header } from "@components/v1/Header";
import { Introduction } from "@components/v1/Introduction";
import { About } from "@components/v1/About";
import { Experience } from "@components/v1/Experience";
import { Projects } from "@components/v1/Projects";
import { Footer } from "@components/v1/Footer";
import { LazyMotion, domAnimation } from "framer-motion";

export function Indexv1() {
    //
    const [yPosition, setYPosition] = useState(0);
    const [isScrollTop, setIsScrollTop] = useState(false);

    return (
        <LazyMotion features={domAnimation}>
            <Scrollbar
                className="h-screen min-h-screen bg-light-blue text-dark-blue dark:bg-dark-blue dark:text-crystal "
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
        </LazyMotion>
    );
}
