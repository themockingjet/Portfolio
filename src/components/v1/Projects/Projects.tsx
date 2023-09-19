//
//
//

import { SimpleWebApp } from "./ProjectList/SimpleWebApp";
import { LineSeparator } from "@components/shared/LineSeparator";
import { Axie } from "./ProjectList/Axie";
import { CryptoConverter } from "./ProjectList/CryptoConverter";
import { Flamss } from "./ProjectList/Flamss";
import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { ContentDivider } from "@components/v1/ContentDivider";
import { BackgroundFour } from "../Background";

export function Projects() {
    return (
        <section id="projects" className="relative h-auto min-h-screen w-screen bg-[url('/img/polygon2.svg')] lg:min-h-min">
            <BackgroundFour />
            <img src="/img/polygon2.svg" className="absolute h-full w-full  drop-shadow-2xl" />
            <div className="flex h-full w-full flex-col justify-center px-6 py-32 xl:container md:px-12 md:py-20 lg:px-28 lg:py-28 xl:mx-auto">
                <MotionSlideVertical className="flex w-full space-x-4">
                    <ContentDivider>Projects</ContentDivider>
                </MotionSlideVertical>
                <div className="flex flex-col space-y-6 ">
                    <SimpleWebApp />
                    <LineSeparator />
                    <Axie />
                    <LineSeparator />
                    <CryptoConverter />
                    <LineSeparator />
                    <Flamss />
                </div>
            </div>
        </section>
    );
}
