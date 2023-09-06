//
//
//

import { motion } from "framer-motion";
import { MotionULParentProps } from "./MotionULParent.types";
import { cn } from "@utils";

export function MotionULParent(props: MotionULParentProps) {
    return (
        <div className={cn("relative overflow-hidden", props.className)}>
            <motion.ul
                className={"dark:marker:text-orange list-inside list-disc overflow-hidden"}
                variants={{
                    hidden: { opacity: 0, y: "100%" },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }}
                {...props}
            >
                {props.children}
            </motion.ul>
            <motion.div
                viewport={{ margin: "-20% 0% -20% 0%" }}
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className={cn("absolute bottom-0 top-0 h-full w-full bg-light-blue dark:bg-dark-blue", props.coverClassName)}
            />
        </div>
    );
}
