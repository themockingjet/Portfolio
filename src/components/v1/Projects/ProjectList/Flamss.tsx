//
//
//

import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { MotionSlideVerticalGroup } from "@components/v1/Motion/MotionSlideVerticalGroup";

export function Flamss() {
    return (
        <MotionSlideVertical className="p-6">
            <div className="card flex-col space-y-4 text-sm md:text-base">
                <MotionSlideVerticalGroup stagger={true}>
                    <h3 className="font-bold">
                        Faculty Load Monitoring And Scheduling System for IT Department |
                        <a
                            className="text-sunset dark:text-orange"
                            href="https://github.com/themockingjet/Faculty-Load-Monitoring"
                        >
                            {" "}
                            Github
                        </a>
                    </h3>
                    <p>
                        A software that eliminated scheduling conflicts, reduced paper consumption, and simplified the
                        scheduling process, saving time and reducing complexity for faculty and administrators. This
                        achievement brought efficiency and harmony to the department's operations, marking it as a
                        significant past accomplishment.
                    </p>
                    <ul className="flex flex-wrap">
                        <li className="code-language bg-code-green">C# WPF</li>
                        <li className="code-language bg-white">MySQL</li>
                    </ul>
                </MotionSlideVerticalGroup>
            </div>
        </MotionSlideVertical>
    );
}
