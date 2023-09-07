//
//
//
import { LazyMotion, domAnimation } from "framer-motion";

import { prof_experience } from "@utils/experience";
import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { TextGroupReveal } from "@components/TextGroup/TextGroupReveal";

export function Experience() {
    //

    return (
        <LazyMotion features={domAnimation}>
            <div id="experience" className="collapse absolute -mt-32"></div>
            <section className="flex h-auto min-h-screen flex-col overflow-hidden px-6 pb-6 xl:container md:px-12 md:pb-12 lg:px-28 xl:mx-auto">
                <MotionDivReveal
                    className="flex w-full space-x-4"
                    viewport={{ margin: "0% 0% 0% 0%" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h1 className="py-6 text-4xl font-semibold tracking-tighter text-sunset dark:text-pale-blue md:pb-8">
                        Experience
                    </h1>
                    <div className="h-1 flex-1 self-center bg-dark-blue dark:bg-orange">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <path d="M0 0h5z" fill="none" />
                        </svg>
                    </div>
                </MotionDivReveal>
                <div className="flex flex-col space-y-6">
                    {prof_experience.map((item, index) => (
                        <div key={index} className="flex-col">
                            <MotionHeading3Reveal className=" dark:text-pale-blue">
                                {item.title} |{" "}
                                <a href={item.link} className="text-[#F15A59] dark:text-orange/90">
                                    {item.company}
                                </a>
                            </MotionHeading3Reveal>
                            <MotionDivReveal className="pb-2 text-sm font-medium tracking-tight text-black/50 dark:text-crystal/70 md:font-bold lg:text-base ">
                                {item.date}
                            </MotionDivReveal>
                            <TextGroupReveal data={item.exp} />
                        </div>
                    ))}
                </div>
            </section>
        </LazyMotion>
    );
}
