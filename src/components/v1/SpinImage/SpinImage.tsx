//
//
//

import { useDarkMode } from "usehooks-ts";
import { MotionSpin } from "../Motion/MotionSpin";

export function SpinImage() {
    //

    const { isDarkMode } = useDarkMode();

    return (
        <div className="float-left mr-5 mt-8 h-44 w-32 overflow-hidden rounded-full object-cover object-center md:float-right md:ml-5 md:mr-0 md:mt-6 md:h-72 md:w-48 md:rounded-md lg:float-left lg:mr-5 lg:h-full">
            <MotionSpin>
                <img src={isDarkMode ? "/img/me_dark.jpg" : "/img/me_light.jpg"} />
            </MotionSpin>
        </div>
    );
}
