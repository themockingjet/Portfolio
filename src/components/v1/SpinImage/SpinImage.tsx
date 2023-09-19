//
//
//

import { useDarkMode } from "usehooks-ts";
import { MotionSpin } from "../Motion/MotionSpin";

export function SpinImage() {
    //

    const { isDarkMode } = useDarkMode();

    return (
        <div className="float-left mr-5 mt-3 inline-flex flex-none overflow-hidden rounded-full md:float-right md:ml-5 md:mr-0 md:mt-0 md:rounded-md lg:float-left lg:mr-5 ">
            <MotionSpin
                src={isDarkMode ? "/img/me_dark.jpg" : "/img/me_light.jpg"}
                className="h-44 w-32 object-cover object-center md:h-72 md:w-48 lg:h-full"
            ></MotionSpin>
        </div>
    );
}
