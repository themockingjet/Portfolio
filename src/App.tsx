//
//
//

import { useState } from "react";

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

    return (
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
            <div id="main-container" className="h-full">
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
