//
//
//

import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { MotionSlideVerticalGroup } from "@components/v1/Motion/MotionSlideVerticalGroup";
import { cn } from "@utils";
import { TechStackProps } from "./TechStack.types";

export function TechStack({ className }: TechStackProps) {
    return (
        <div className={cn("mx-auto flex flex-wrap font-roboto-mono", className)}>
            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                <ul className="w-3/4 list-inside list-disc lg:w-full xl:w-auto">
                    <li className="flex font-semibold text-sunset underline dark:text-orange">
                        <MotionSlideVertical>Languages</MotionSlideVertical>
                    </li>
                    <MotionSlideVertical>
                        <MotionSlideVerticalGroup stagger={true}>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>NodeJS</li>
                            <li>HTML & CSS</li>
                        </MotionSlideVerticalGroup>
                    </MotionSlideVertical>
                </ul>
            </div>

            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                <ul className="w-3/4 list-inside list-disc lg:w-full xl:w-auto">
                    <li className="flex font-semibold text-sunset underline dark:text-orange">
                        <MotionSlideVertical>Frameworks</MotionSlideVertical>
                    </li>
                    <MotionSlideVertical>
                        <MotionSlideVerticalGroup stagger={true}>
                            <li>ReactJS</li>
                            <li>Express</li>
                            <li>Tailwind CSS</li>
                        </MotionSlideVerticalGroup>
                    </MotionSlideVertical>
                </ul>
            </div>

            <div className="flex basis-1/2 flex-col items-center md:basis-1/4">
                <ul className="w-3/4 list-inside list-disc lg:w-full xl:w-auto">
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
                <ul className="w-3/4 list-inside list-disc lg:w-full xl:w-auto">
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
    );
}
