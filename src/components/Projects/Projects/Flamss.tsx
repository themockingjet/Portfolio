//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";
import { MotionULParent } from "@components/Motion/MotionUL/MotionULParent";

export function Flamss() {
    return (
        <MotionDivReveal className="p-6">
            <div className="card flex-col space-y-4 text-sm md:text-base">
                <MotionHeading3Reveal className="font-bold" coverClassName="dark:bg-indigo bg-sky-blue">
                    Faculty Load Monitoring And Scheduling System for IT Department |
                    <a
                        className="text-sunset dark:text-orange"
                        href="https://github.com/themockingjet/Faculty-Load-Monitoring"
                    >
                        {" "}
                        Github
                    </a>
                </MotionHeading3Reveal>
                <MotionDivReveal coverClassName="dark:bg-indigo bg-sky-blue">
                    <p>
                        A software that eliminated scheduling conflicts, reduced paper consumption, and simplified the
                        scheduling process, saving time and reducing complexity for faculty and administrators. This
                        achievement brought efficiency and harmony to the department's operations, marking it as a
                        significant past accomplishment.
                    </p>
                </MotionDivReveal>
                <MotionULParent coverClassName="dark:bg-indigo bg-sky-blue" className="flex flex-wrap">
                    <MotionListReveal coverClassName="dark:bg-indigo bg-sky-blue" className="code-language bg-code-green">
                        C# WPF
                    </MotionListReveal>
                    <MotionListReveal coverClassName="dark:bg-indigo bg-sky-blue" className="code-language bg-white">
                        MySQL
                    </MotionListReveal>
                </MotionULParent>
            </div>
        </MotionDivReveal>
    );
}
