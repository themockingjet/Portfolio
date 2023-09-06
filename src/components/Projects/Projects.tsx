//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { SimpleWebApp } from "./Projects/SimpleWebApp";
import { LineSeparator } from "@components/LineSeparator";
import { Axie } from "./Projects/Axie";
import { CryptoConverter } from "./Projects/CryptoConverter";
import { Flamss } from "./Projects/Flamss";

export function Projects() {
    return (
        <section
            id="projects"
            className="flex h-auto flex-col overflow-hidden px-6 pb-6 xl:container md:px-12 lg:px-28 xl:mx-auto"
        >
            <MotionDivReveal
                className="flex w-full space-x-4"
                viewport={{ margin: "0% 0% 0% 0%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h1 className="text-sunset py-6 text-4xl font-semibold tracking-tighter dark:text-pale-blue md:pb-8">
                    Projects
                </h1>
                <div className="dark:bg-orange h-1 flex-1 self-center bg-dark-blue">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <path d="M0 0h5z" fill="none" />
                    </svg>
                </div>
            </MotionDivReveal>

            <div className="flex flex-col space-y-6 ">
                <SimpleWebApp />
                <LineSeparator />
                <Axie />
                <LineSeparator />
                <CryptoConverter />
                <LineSeparator />
                <Flamss />
            </div>
        </section>
    );
}
