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
        <section id="projects" className="relative min-h-screen w-screen">
            <BackgroundFour />
            <img src="/img/polygon2.svg" className="absolute h-full w-full drop-shadow-2xl" />
            <div className="flex h-auto flex-col overflow-hidden px-6 pb-6 pt-24 xl:container md:px-12 lg:px-28 xl:mx-auto">
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
