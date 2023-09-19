//
//
//

import { MotionSlideVertical } from "../MotionSlideVertical/MotionSlideVertical";
import { MotionSlideVerticalDataProps } from "./MotionSlideVerticalData.types";

export function MotionSlideVerticalData({ data }: MotionSlideVerticalDataProps) {
    return (
        <ul className="relative list-disc flex-col space-y-2 overflow-hidden pl-4 text-sm">
            {data.map((item, index) => (
                <MotionSlideVertical key={index}>
                    <p className={`line-clamp-2 hover:line-clamp-none dark:text-crystal/80 lg:text-base`}>
                        <b className="tracking-wide dark:text-pale-blue">{item.keyword}</b> {item.description}
                    </p>
                </MotionSlideVertical>
            ))}
        </ul>
    );
}
