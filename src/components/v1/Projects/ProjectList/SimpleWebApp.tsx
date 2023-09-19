//
//
//

import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";
import { MotionSlideVerticalGroup } from "@components/v1/Motion/MotionSlideVerticalGroup";

export function SimpleWebApp() {
    //
    return (
        <MotionSlideVertical className="p-6" viewport={{ margin: "-20% 0% -20% 0%" }}>
            <div className="card flex-col space-y-4 text-sm md:text-base">
                <MotionSlideVerticalGroup stagger={true}>
                    <h3 className=" font-bold tracking-normal">
                        Simple Web Reservation App |{" "}
                        <a className="text-sunset dark:text-orange" href="https://github.com/themockingjet/simple-web-app">
                            GitHub
                        </a>
                    </h3>
                    <p>
                        Web app that is designed to streamline reservation processes for small clinics, single-unit rooms, or
                        apartments. It offers a user-friendly and efficient solution for managing bookings and appointments,
                        making it easy for both businesses and customers to schedule and confirm reservations with ease.
                    </p>
                    <ul className="flex flex-wrap">
                        <li className="code-language bg-code-yellow">JavaScript</li>
                        <li className="code-language bg-code-blue">TypeScript</li>
                        <li className="code-language bg-code-orange">HTML & CSS</li>
                    </ul>
                </MotionSlideVerticalGroup>
            </div>
        </MotionSlideVertical>
    );
}
