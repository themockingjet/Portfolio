//
//
//

import { Children } from "react";
import { m } from "framer-motion";

import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";
import { MotionULRevealProps } from "./MotionULReveal.types";

import { cn } from "@utils";

export function MotionULReveal(props: MotionULRevealProps) {
    //
    const arrChildren = Children.toArray(props.children);

    return (
        <div className={cn("relative overflow-hidden", props.className)}>
            <m.ul
                className={"dark:marker:text-orange list-inside list-disc overflow-hidden"}
                variants={{
                    hidden: { opacity: 0, y: "100%" },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
                {...props}
            >
                {arrChildren.map((item, index) => {
                    return (
                        <MotionListReveal className="mt-0" key={index}>
                            {item !== "" ? item : null}
                        </MotionListReveal>
                    );
                })}
            </m.ul>
            <m.div
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
