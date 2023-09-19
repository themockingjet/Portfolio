//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionSlideVerticalProps = {
    stagger?: boolean;
    children?: React.ReactNode;
} & HTMLMotionProps<"div">;
