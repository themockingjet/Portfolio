//
//
//

import { m } from "framer-motion";
import { MotionSlideVerticalProps } from "./MotionSlideVertical.types";

const containerA = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
    },
};

const containerB = {
    hidden: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export function MotionSlideVertical(props: MotionSlideVerticalProps) {
    //
    if (props.stagger) {
        return (
            <m.div viewport={{ margin: "-10% 0% -10% 0%" }} className="overflow-hidden" variants={containerB}>
                {props.children}
            </m.div>
        );
    }

    return (
        <div className="overflow-hidden">
            <m.div
                viewport={{ margin: "-10% 0% -10% 0%" }}
                className="overflow-hidden"
                variants={containerA}
                initial="hidden"
                whileInView="visible"
                {...props}
            >
                {props.children}
            </m.div>
        </div>
    );
}
