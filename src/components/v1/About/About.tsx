//
//
//

import { ContentDivider } from "../ContentDivider";
import { SpinImage } from "../SpinImage";
import { MotionSlideVertical } from "../Motion/MotionSlideVertical";
import { BackgroundTwo } from "../Background";
import { TechStack } from "./TechStack";

export function About() {
    //

    return (
        <section id="about" className="relative h-full min-h-screen w-screen bg-[#baf6f1] dark:bg-dark-blue lg:min-h-min">
            <BackgroundTwo />
            <div className="flex h-full w-full flex-col justify-center px-6 py-12 xl:container md:px-12 md:py-20 lg:px-28 lg:py-28 xl:mx-auto">
                <MotionSlideVertical className="flex w-full space-x-4">
                    <ContentDivider>About Me</ContentDivider>
                </MotionSlideVertical>
                <div className="flex-col space-y-6">
                    <MotionSlideVertical className="flex-col space-y-6">
                        <SpinImage />
                        <p>
                            Hello, I'm Jet Joseph and I enjoy coding. I initially began exploring various fields in the IT
                            industry, from Web Development to IT Operations Specialist. However, I realized that my true
                            passion lies in web development.
                        </p>
                        <p>
                            Fast-forward to today, I've been learning and building projects to improve my skills in back-end
                            and front-end development. I'm currently looking for opportunities to work with other passionate
                            developers.
                        </p>
                        <p>Here are the few technologies I've been working with recently:</p>
                        <TechStack className="hidden lg:flex" />
                    </MotionSlideVertical>
                    <TechStack className="flex lg:hidden" />
                </div>
            </div>
        </section>
    );
}
