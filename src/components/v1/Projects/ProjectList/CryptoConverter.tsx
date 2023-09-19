//
//
//

import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { MotionSlideVerticalGroup } from "@components/v1/Motion/MotionSlideVerticalGroup";

export function CryptoConverter() {
    return (
        <MotionSlideVertical className="p-6">
            <div className="card h-full flex-col space-y-4 text-sm md:text-base">
                <MotionSlideVerticalGroup stagger={true}>
                    <h3 className="font-bold">
                        Discord Bot: Cryptocurrency Price Ticker |
                        <a
                            className="text-sunset dark:text-orange"
                            href="https://github.com/themockingjet/discord-crypto-converter"
                        >
                            {" "}
                            Github
                        </a>
                    </h3>
                    <p>
                        An automated Discord bot that provides users with real-time price changes for various
                        cryptocurrencies. It can also be used to calculate price conversions between different
                        cryptocurrencies, allowing users to make informed decisions when buying and selling cryptocurrencies.
                    </p>
                    <ul className="flex flex-wrap">
                        <li className="code-language bg-code-yellow">ExpressJS</li>
                        <li className="code-language bg-code-purple">Heroku</li>
                        <li className="code-language bg-code-green">CoinGecko API</li>
                        <li className="code-language bg-code-blue">Discord API</li>
                    </ul>
                </MotionSlideVerticalGroup>
            </div>
        </MotionSlideVertical>
    );
}
