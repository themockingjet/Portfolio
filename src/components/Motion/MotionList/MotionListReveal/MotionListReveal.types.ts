//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionListRevealProps = {
    coverClassName?: string;
    children?: React.ReactNode;
} & HTMLMotionProps<"li">;
