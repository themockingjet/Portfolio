//
//
//

import { MotionDivReveal } from "@components/Motion/MotionDiv/MotionDivReveal";
import { LineSeparatorProps } from "./LineSeparator.types";
import { cn } from "@utils";

export function LineSeparator(props: LineSeparatorProps) {
    //
    return (
        <MotionDivReveal className={cn("w-full", props.className)}>
            <div className={cn("dark:bg-orange bg-sunset my-3 h-1 flex-1 self-center md:my-6", props.lineColor)}>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <path d="M0 0h5z" fill="none" />
                </svg>
            </div>
        </MotionDivReveal>
    );
}
