//
//
//

import { prof_experience } from "@utils/experience";
import { ContentDividerReverse } from "@components/v1/ContentDivider";
import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { MotionSlideVerticalData } from "@components/v1/Motion/MotionSlideVerticalData";
import { BackgroundThree } from "../Background";

export function Experience() {
    //

    return (
        <section id="experience" className="relative h-screen min-h-screen w-screen">
            <BackgroundThree />
            <div className="flex h-auto flex-col px-6 pb-6 pt-24 xl:container md:px-12 lg:px-28 xl:mx-auto">
                <MotionSlideVertical className="flex w-full space-x-4">
                    <ContentDividerReverse>Experience</ContentDividerReverse>
                </MotionSlideVertical>
                <div className="flex flex-col space-y-6">
                    {prof_experience.map((item, index) => (
                        <div key={index} className="flex-col">
                            <MotionSlideVertical className=" dark:text-pale-blue">
                                {item.title} |{" "}
                                <a href={item.link} className="text-[#F15A59] dark:text-orange/90">
                                    {item.company}
                                </a>
                            </MotionSlideVertical>
                            <MotionSlideVertical className="pb-2 text-sm font-medium tracking-tight text-black/50 dark:text-crystal/70 md:font-bold lg:text-base ">
                                {item.date}
                            </MotionSlideVertical>
                            <MotionSlideVerticalData data={item.exp} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
