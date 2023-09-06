//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { MotionHeading3Reveal } from "@components/Motion/MotionHeading/MotionHeading3Reveal";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";
import { MotionULParent } from "@components/Motion/MotionUL/MotionULParent";

export function SimpleWebApp() {
    //
    return (
        <MotionDivReveal className="p-6">
            <div className="card flex-col space-y-4 text-sm md:text-base">
                <MotionHeading3Reveal className=" font-bold tracking-normal" coverClassName="bg-sky-blue dark:bg-indigo">
                    Simple Web Reservation App |{" "}
                    <a className="text-sunset dark:text-orange" href="https://github.com/themockingjet/simple-web-app">
                        GitHub
                    </a>
                </MotionHeading3Reveal>
                <MotionDivReveal className="dark:text-crystal/80" coverClassName="bg-sky-blue dark:bg-indigo">
                    <p>
                        Web app that is designed to streamline reservation processes for small clinics, single-unit rooms, or
                        apartments. It offers a user-friendly and efficient solution for managing bookings and appointments,
                        making it easy for both businesses and customers to schedule and confirm reservations with ease.
                    </p>
                </MotionDivReveal>
                <MotionULParent coverClassName="bg-sky-blue dark:bg-indigo" className="flex flex-wrap">
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-yellow ">
                        JavaScript
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-blue ">
                        TypeScript
                    </MotionListReveal>
                    <MotionListReveal coverClassName="bg-sky-blue dark:bg-indigo" className="code-language bg-code-orange ">
                        HTML & CSS
                    </MotionListReveal>
                </MotionULParent>
            </div>
        </MotionDivReveal>
    );
}
