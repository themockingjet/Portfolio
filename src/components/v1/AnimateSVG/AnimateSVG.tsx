//
//
//

import { cn } from "@utils";
import { AnimateSVGProps } from "./AnimateSVG.types";

export function AnimateSVG({ children, className }: AnimateSVGProps) {
    return (
        <div className={cn("absolute w-screen", className)}>
            <svg
                className="h-full w-full"
                viewBox="0 0 1280 540"
                width="1280"
                height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                {children}
            </svg>
        </div>
    );
}
