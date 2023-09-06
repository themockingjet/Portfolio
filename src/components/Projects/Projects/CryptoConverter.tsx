//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";
import { MotionULParent } from "@components/Motion/MotionUL/MotionULParent";

export function CryptoConverter() {
    return (
        <MotionDivReveal className="p-6">
            <div className="card h-full flex-col space-y-4 text-sm md:text-base">
                <MotionHeading3Reveal className="font-bold" coverClassName="bg-sky-blue dark:bg-indigo">
                    Discord Bot: Cryptocurrency Price Ticker |
                    <a
                        className="text-sunset dark:text-orange"
                        href="https://github.com/themockingjet/discord-crypto-converter"
                    >
                        {" "}
                        Github
                    </a>
                </MotionHeading3Reveal>
                <MotionDivReveal coverClassName="bg-sky-blue dark:bg-indigo">
                    <p>
                        An automated Discord bot that provides users with real-time price changes for various
                        cryptocurrencies. It can also be used to calculate price conversions between different
                        cryptocurrencies, allowing users to make informed decisions when buying and selling cryptocurrencies.
                    </p>
                </MotionDivReveal>
                <MotionULParent coverClassName="bg-sky-blue dark:bg-indigo" className="flex flex-wrap">
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-yellow">
                        ExpressJS
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-purple">
                        Heroku
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-green">
                        CoinGecko API
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-blue">
                        Discord API
                    </MotionListReveal>
                </MotionULParent>
            </div>
        </MotionDivReveal>
    );
}
