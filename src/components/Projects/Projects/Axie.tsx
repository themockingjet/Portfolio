//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";
import { MotionULParent } from "@components/Motion/MotionUL/MotionULParent";

export function Axie() {
    return (
        <MotionDivReveal className="p-6">
            <div className="card flex-col space-y-4 text-sm md:text-base">
                <MotionHeading3Reveal className="font-bold" coverClassName="bg-sky-blue dark:bg-indigo">
                    Discord Bot: Axie Infinity |{" "}
                    <a
                        className="text-sunset dark:text-orange"
                        href="https://github.com/themockingjet/discord-axie-bot-main"
                    >
                        Github
                    </a>
                </MotionHeading3Reveal>
                <MotionDivReveal coverClassName="bg-sky-blue dark:bg-indigo">
                    <p>
                        An automated Discord bot that provides users with real-time updates on the latest Axie Infinity
                        prices. It can also be used to calculate the breeding cost of Axies, allowing users to make informed
                        decisions when buying and selling Axies.
                    </p>
                </MotionDivReveal>
                <MotionULParent coverClassName="bg-sky-blue dark:bg-indigo" className="flex flex-wrap">
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-yellow">
                        ExpressJS
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-pink">
                        GraphQL
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-purple">
                        Heroku
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-blue">
                        Axie Infinity API
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-blue">
                        Discord API
                    </MotionListReveal>
                </MotionULParent>
            </div>
        </MotionDivReveal>
    );
}
