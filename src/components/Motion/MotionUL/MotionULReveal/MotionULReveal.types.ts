//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionULRevealProps = {
    coverClassName?: string;
    className?: string;
    children?: React.ReactNode;
} & HTMLMotionProps<"ul">;
