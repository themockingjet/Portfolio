//
//
//

import { cn } from "@utils";
import { m } from "framer-motion";
import { IconRollProps } from "./IconRoll.types";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "@components/shared/Icons";

const container = {
    hidden: { opacity: 0, x: ["0%", "800%"], rotate: [0, 1080] },
    visible: { opacity: 1, x: ["800%", "0%"], rotate: [1080, 0] },
};

export function IconRoll(props: IconRollProps) {
    //
    const icons = [<FacebookIcon />, <GithubIcon />, <LinkedinIcon />];
    return (
        <div className={cn("flex w-full space-x-10 self-start drop-shadow-md", props.className)}>
            {icons.map((icon, index) => {
                return (
                    <m.div
                        className="drop-shadow-md"
                        key={`${index}-${icon}`}
                        viewport={{ margin: "-20% 0% -20% 0%" }}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 2,
                            delay: index * 0.35,
                            type: "spring",
                            damping: 10,
                        }}
                    >
                        {icon}
                    </m.div>
                );
            })}
        </div>
    );
}
