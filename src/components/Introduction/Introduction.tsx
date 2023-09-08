//
//
//
import { LazyMotion, domAnimation } from "framer-motion";

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { IconRoll } from "@components/IconRoll";

export function Introduction() {
    //

    return (
        <LazyMotion features={domAnimation}>
            <section className="h-screen max-h-screen overflow-hidden px-6 xl:container md:px-12 lg:px-28 xl:mx-auto">
                <div className="flex h-full flex-col items-center justify-center space-y-10 ">
                    <div className="flex flex-col rounded-xl bg-gradient-to-r from-cyan-300 to-blue-300 p-3 shadow-xl dark:from-blue-900 dark:to-cyan-900 dark:shadow-white/20 md:p-12 lg:p-20">
                        <MotionDivReveal
                            coverClassName="bg-transparent dark:bg-transparent"
                            viewport={{ margin: "-20% 0% -20% 0%" }}
                        >
                            <p className="font-roboto-mono text-lg font-bold dark:text-orange">Hi, my name is</p>
                        </MotionDivReveal>

                        <MotionDivReveal
                            coverClassName="bg-transparent dark:bg-transparent"
                            viewport={{ margin: "-20% 0% -20% 0%" }}
                        >
                            <h1 className="inline-flex w-full text-4xl font-black tracking-tight text-sunset dark:text-pale-blue md:py-3 md:text-6xl md:tracking-wide xl:text-9xl">
                                Jet Joseph.
                            </h1>
                        </MotionDivReveal>

                        <MotionDivReveal
                            coverClassName="bg-transparent dark:bg-transparent"
                            viewport={{ margin: "-20% 0% -20% 0%" }}
                        >
                            <h3 className="py-1 text-2xl font-bold tracking-tight text-sunset/60 dark:text-pale-blue/60 md:text-5xl">
                                I want to build things for the web.
                            </h3>
                        </MotionDivReveal>

                        <MotionDivReveal
                            coverClassName="bg-transparent dark:bg-transparent"
                            viewport={{ margin: "-20% 0% -20% 0%" }}
                        >
                            <p className="py-4 leading-tight dark:text-crystal md:w-3/4 md:py-6">
                                I'm a Jubior Web Developer, driven by my passion for creating engaging and functional online
                                experiences.
                            </p>
                        </MotionDivReveal>

                        <IconRoll className="flex space-x-5 self-start md:space-x-10">
                            <a href="http://www.facebook.com/themockingjet" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 fill-sunset dark:fill-pale-blue md:h-16"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                                </svg>
                            </a>
                            <a href="http://www.github.com/themockingjet" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 fill-sunset dark:fill-pale-blue md:h-16"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/jet-joseph-34036613a/" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 fill-sunset dark:fill-pale-blue md:h-16"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>
                        </IconRoll>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
