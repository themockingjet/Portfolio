//
//
//

import { IconRoll } from "@components/v1/IconRoll";
import { MotionSlideVertical } from "../Motion/MotionSlideVertical";
import { MotionSlideVerticalGroup } from "../Motion/MotionSlideVerticalGroup";
import { BackgroundOne } from "../Background";

export function Introduction() {
    //

    return (
        <section className="relative h-screen max-h-screen">
            <img src="/img/circles1.svg" className="absolute h-full w-full drop-shadow-2xl dark:shadow-light-blue" />
            <BackgroundOne />
            <div className="flex h-full flex-col items-center justify-center px-6 xl:container md:px-12 lg:px-28 xl:mx-auto">
                <div className="rounded-xl shadow-xl drop-shadow-xl dark:shadow-light-blue">
                    <MotionSlideVertical className="card-gradient relative flex-col p-6 md:p-12 lg:p-20">
                        <MotionSlideVerticalGroup stagger={true}>
                            <p className="font-roboto-mono text-lg font-bold dark:text-orange lg:text-xl">Hi, my name is</p>
                            <h1 className="inline-flex w-full text-5xl font-black tracking-tight text-sunset shadow-sm drop-shadow-sm dark:text-pale-blue md:py-3 md:text-7xl md:tracking-wide md:shadow-md md:drop-shadow-md xl:text-9xl">
                                Jet Joseph.
                            </h1>
                            <div className="drop-shadow-sm">
                                <h3 className="py-1 text-2xl font-bold tracking-tight text-sunset/80 drop-shadow-sm dark:text-pale-blue/60 md:text-5xl">
                                    I want to build things for the web.
                                </h3>
                            </div>
                            <p className="py-4 leading-tight dark:text-crystal md:w-3/4 md:py-6">
                                I'm a Junior Web Developer, driven by my passion for creating engaging and functional online
                                experiences.
                            </p>
                        </MotionSlideVerticalGroup>
                        <IconRoll className="flex space-x-5 self-start md:space-x-10" />
                    </MotionSlideVertical>
                </div>
            </div>
        </section>
    );
}
