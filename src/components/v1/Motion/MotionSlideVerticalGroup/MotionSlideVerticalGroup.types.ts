//
//
//

import { HTMLMotionProps } from "framer-motion";

export type MotionSlideVerticalGroupProps = {
    stagger?: boolean;
    children?: React.ReactNode;
} & HTMLMotionProps<"div">;
