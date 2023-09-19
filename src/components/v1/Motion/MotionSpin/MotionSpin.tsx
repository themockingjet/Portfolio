//
//
//

import { m } from "framer-motion";
import { MotionSpinProps } from "./MotionSpin.types";

const container = {
    hidden: { scale: 0, rotate: 1080 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.5 } },
};

export function MotionSpin({ children, ...props }: MotionSpinProps) {
    return (
        <m.div
            viewport={{ margin: "-10% 0% -10% 0%" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            {...props}
        >
            {children}
        </m.div>
    );
}
