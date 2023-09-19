//
//
//

import { Children } from "react";

import { MotionSlideVerticalGroupProps } from "./MotionSlideVerticalGroup.types";
import { MotionSlideVertical } from "../MotionSlideVertical/MotionSlideVertical";

export function MotionSlideVerticalGroup({ children, stagger }: MotionSlideVerticalGroupProps) {
    //
    const mappedChildren = Children.map(children, (child) => {
        return <MotionSlideVertical stagger={stagger}>{child}</MotionSlideVertical>;
    });
    return <>{mappedChildren}</>;
}
