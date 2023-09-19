//
//
//

import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { MotionSlideVerticalGroup } from "@components/v1/Motion/MotionSlideVerticalGroup";

export function Axie() {
    return (
        <MotionSlideVertical className="p-6">
            <div className="card flex-col space-y-4 text-sm md:text-base">
                <MotionSlideVerticalGroup stagger={true}>
                    <h3 className="font-bold">
                        Discord Bot: Axie Infinity |{" "}
                        <a
                            className="text-sunset dark:text-orange"
                            href="https://github.com/themockingjet/discord-axie-bot-main"
                        >
                            Github
                        </a>
                    </h3>
                    <p>
                        An automated Discord bot that provides users with real-time updates on the latest Axie Infinity
                        prices. It can also be used to calculate the breeding cost of Axies, allowing users to make informed
                        decisions when buying and selling Axies.
                    </p>
                    <ul className="flex flex-wrap">
                        <li className="code-language bg-code-yellow">ExpressJS</li>
                        <li className="code-language bg-code-pink">GraphQL</li>
                        <li className="code-language bg-code-purple">Heroku</li>
                        <li className="code-language bg-code-blue">Axie Infinity API</li>
                        <li className="code-language bg-code-blue">Discord API</li>
                    </ul>
                </MotionSlideVerticalGroup>
            </div>
        </MotionSlideVertical>
    );
}
