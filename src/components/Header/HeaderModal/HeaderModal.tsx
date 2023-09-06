//
//
//

import { motion } from "framer-motion";

export function HeaderModal() {
    //

    return (
        // show button from header on top of modal
        <div
            className={`absolute bottom-0 right-0 top-0 z-20 flex h-screen w-screen justify-end bg-dark-blue bg-opacity-30 backdrop-blur-sm`}
        >
            <motion.div
                className="flex h-screen w-3/4 justify-items-end bg-light-blue dark:bg-dark-blue md:w-1/2 lg:w-1/3"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, easings: "easeInOut" }}
            >
                <div className="flex h-full w-full flex-col items-center justify-center space-y-10 text-xl font-semibold">
                    <a className="" href="#about">
                        About.
                    </a>
                    <a className="" href="#experience">
                        Experience.
                    </a>
                    <a className="" href="#projects">
                        Projects.
                    </a>

                    <a
                        className=""
                        href="https://drive.google.com/file/d/1SYSOeT5bzQxhN-dMaf1M5MVIXUx4UXh9/view?usp=drive_link"
                    >
                        Resume.
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
