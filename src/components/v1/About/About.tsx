//
//
//

import { ContentDivider } from "../ContentDivider";
import { SpinImage } from "../SpinImage";
import { MotionSlideVerticalGroup } from "../Motion/MotionSlideVerticalGroup";
import { MotionSlideVertical } from "../Motion/MotionSlideVertical";
import { BackgroundTwo } from "../Background";

export function About() {
    //

    return (
        <section id="about" className="relative h-screen w-screen bg-[#baf6f1]">
            <BackgroundTwo />
            <div className=" flex h-full w-full flex-col justify-center px-6 pb-6 xl:container md:px-12 md:pb-12 lg:px-28 xl:mx-auto">
                <MotionSlideVertical className="flex w-full space-x-4">
                    <ContentDivider>About Me</ContentDivider>
                </MotionSlideVertical>
                <div className="flex flex-col space-y-6">
                    <div className="flex-col space-y-6">
                        {/* image */}
                        <SpinImage />
                        {/* content */}
                        <MotionSlideVertical className="flex-col space-y-4">
                            <MotionSlideVerticalGroup stagger={true}>
                                <p>
                                    Hello, I'm Jet Joseph and I enjoy coding. I initially began exploring various fields in
                                    the IT industry, from Web Development to IT Operations Specialist. However, I realized
                                    that my true passion lies in web development.
                                </p>
                                <p>
                                    Fast-forward to today, I've been learning and building projects to improve my skills in
                                    back-end and front-end development. I'm currently looking for opportunities to work with
                                    other passionate developers.
                                </p>
                                <p>Here are the few technologies I've been working with recently:</p>
                            </MotionSlideVerticalGroup>
                        </MotionSlideVertical>
                        <div className="flex h-full w-full flex-wrap font-roboto-mono lg:w-auto">
                            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                                <ul className="list-inside list-disc">
                                    <li className="flex font-semibold text-sunset underline dark:text-orange">
                                        <MotionSlideVertical>Languages</MotionSlideVertical>
                                    </li>
                                    <MotionSlideVertical>
                                        <MotionSlideVerticalGroup stagger={true}>
                                            <li>JavaScript</li>
                                            <li>TypeScript</li>
                                            <li>HTML & CSS</li>
                                        </MotionSlideVerticalGroup>
                                    </MotionSlideVertical>
                                </ul>
                            </div>

                            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                                <ul className="list-inside list-disc">
                                    <li className="flex font-semibold text-sunset underline dark:text-orange">
                                        <MotionSlideVertical>Frameworks</MotionSlideVertical>
                                    </li>
                                    <MotionSlideVertical>
                                        <MotionSlideVerticalGroup stagger={true}>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>Express</li>
                                            <li>Tailwind CSS</li>
                                        </MotionSlideVerticalGroup>
                                    </MotionSlideVertical>
                                </ul>
                            </div>

                            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                                <ul>
                                    <li className="flex font-semibold text-sunset underline dark:text-orange">
                                        <MotionSlideVertical>Databases</MotionSlideVertical>
                                    </li>
                                    <MotionSlideVertical>
                                        <MotionSlideVerticalGroup stagger={true}>
                                            <li>MySQL</li>
                                            <li>MongoDB</li>
                                        </MotionSlideVerticalGroup>
                                    </MotionSlideVertical>
                                </ul>
                            </div>

                            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                                <ul>
                                    <li className="flex font-semibold text-sunset underline dark:text-orange">
                                        <MotionSlideVertical>Tools</MotionSlideVertical>
                                    </li>
                                    <MotionSlideVertical>
                                        <MotionSlideVerticalGroup stagger={true}>
                                            <li>GitHub</li>
                                            <li>VS Code</li>
                                            <li>Postman</li>
                                        </MotionSlideVerticalGroup>
                                    </MotionSlideVertical>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
