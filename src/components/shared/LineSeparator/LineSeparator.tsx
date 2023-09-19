//
//
//

import { LineSeparatorProps } from "./LineSeparator.types";
import { cn } from "@utils";
import { MotionSlideVertical } from "@components/v1/Motion/MotionSlideVertical";

export function LineSeparator(props: LineSeparatorProps) {
    //
    return (
        <MotionSlideVertical className={cn("w-full", props.className)}>
            <div className={cn("my-3 h-1 flex-1 self-center bg-dark-blue dark:bg-orange md:my-6", props.lineColor)}>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <path d="M0 0h5z" fill="none" />
                </svg>
            </div>
        </MotionSlideVertical>
    );
}
