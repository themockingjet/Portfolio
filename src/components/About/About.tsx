//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionULReveal } from "@components/Motion/MotionUL/MotionULReveal";

export function About() {
    //

    return (
        <section
            id="about"
            className="flex h-auto flex-col overflow-hidden px-6 pb-6 xl:container md:px-12 md:pb-12 lg:px-28 xl:mx-auto"
        >
            <MotionDivReveal
                className="flex w-full space-x-4"
                viewport={{ margin: "0% 0% 0% 0%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h1 className="text-sunset py-6 text-4xl font-semibold tracking-tighter dark:text-pale-blue md:pb-8">
                    About Me
                </h1>
                <div className="dark:bg-orange h-1  flex-1 self-center bg-dark-blue">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <path d="M0 0h5z" fill="none" />
                    </svg>
                </div>
            </MotionDivReveal>
            {/* <hr className="flex-1 h-1 bg-dark-blue self-center" /> */}
            <div className="flex flex-col space-y-6">
                <MotionDivReveal transition={{ duration: 0.5, delay: 0 }}>
                    Hello, I'm Jet Joseph and I enjoy coding. I initially began exploring various fields in the IT industry,
                    from Web Development to IT Operations Specialist. However, I realized that my true passion lies in web
                    development.
                </MotionDivReveal>
                <MotionDivReveal transition={{ duration: 0.5, delay: 0 }}>
                    Fast-forward to today, I've been learning and building projects to improve my skills in back-end and
                    front-end development. I'm currently looking for opportunities to work with other passionate developers.
                </MotionDivReveal>
                <MotionDivReveal transition={{ duration: 0.5, delay: 0 }}>
                    Here are the few technologies I've been working with recently:
                </MotionDivReveal>

                <div className="flex h-full w-full flex-wrap font-roboto-mono ">
                    <div className="shrink-0 basis-1/2 md:basis-1/4">
                        <MotionDivReveal
                            className="dark:text-orange text-sunset font-semibold underline"
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            Languages
                        </MotionDivReveal>
                        <MotionULReveal>
                            <a>JavaScript</a>
                            <a>TypeScript</a>
                            <a>HTML & CSS</a>
                        </MotionULReveal>
                    </div>

                    <div className="shrink-0 basis-1/2 md:basis-1/4">
                        <MotionDivReveal
                            className="dark:text-orange text-sunset font-semibold underline"
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            Frameworks
                        </MotionDivReveal>
                        <MotionULReveal>
                            <a>React</a>
                            <a>Node.js</a>
                            <a>Express</a>
                            <a>Tailwind CSS</a>
                        </MotionULReveal>
                    </div>

                    <div className="shrink-0 basis-1/2 md:basis-1/4">
                        <MotionDivReveal
                            className="dark:text-orange text-sunset font-semibold underline"
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            Databases
                        </MotionDivReveal>
                        <MotionULReveal>
                            <a>MySQL</a>
                            <a>MongoDB</a>
                        </MotionULReveal>
                    </div>

                    <div className="shrink-0 basis-1/2 md:basis-1/4">
                        <MotionDivReveal
                            className="dark:text-orange text-sunset font-semibold underline"
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            Tools
                        </MotionDivReveal>
                        <MotionULReveal>
                            <a>GitHub</a>
                            <a>VS Code</a>
                            <a>Postman</a>
                        </MotionULReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
