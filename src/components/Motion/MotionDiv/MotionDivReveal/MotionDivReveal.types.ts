//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionDivRevealProps = {
    coverClassName?: string;
    children?: React.ReactNode;
} & HTMLMotionProps<"div">;
