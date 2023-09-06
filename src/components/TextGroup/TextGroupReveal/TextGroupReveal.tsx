//
//
//

import { motion } from "framer-motion";
import { TextGroupRevealProps } from "./TextGroupReveal.types";
import { MotionListReveal } from "@components/Motion/MotionList/MotionListReveal";

export function TextGroupReveal({ data }: TextGroupRevealProps) {
    return (
        <div className="relative flex overflow-hidden">
            <motion.ul
                className="list-disc flex-col space-y-2 overflow-hidden pl-4 text-sm"
                variants={{
                    hidden: { opacity: 0, y: "50%" },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
            >
                {data.map((item, index) => (
                    <MotionListReveal key={index}>
                        <p className={`line-clamp-2 hover:line-clamp-none dark:text-crystal/80 lg:text-base`}>
                            <b className="tracking-wide dark:text-pale-blue">{item.keyword}</b> {item.description}
                        </p>
                    </MotionListReveal>
                ))}
            </motion.ul>
        </div>
    );
}
