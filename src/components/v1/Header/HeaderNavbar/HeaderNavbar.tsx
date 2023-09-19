//
//
//

import { ButtonHamburger } from "@components/v1/ButtonHamburger";
import { cn } from "@utils";
import { HeaderNavbarProps } from "./HeaderNavbar.types";

export function HeaderNavbar(props: HeaderNavbarProps) {
    //

    return (
        <div className={cn("", props.className)}>
            <div className="flex items-center justify-between">
                {/* <!-- Mobile menu button --> */}
                <div className="flex lg:hidden">
                    <ButtonHamburger
                        onClick={() => {
                            props.onClick();
                        }}
                    />
                </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="hidden lg:inline-flex">
                <div className="flex flex-col items-center md:flex-row lg:space-x-10 xl:space-x-20">
                    <a
                        className="text-sm font-bold hover:text-black dark:hover:text-sky-blue lg:text-base xl:text-lg"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="text-sm font-bold hover:text-black dark:hover:text-sky-blue lg:text-base xl:text-lg"
                        href="#experience"
                    >
                        Experience
                    </a>
                    <a
                        className="text-sm font-bold hover:text-black dark:hover:text-sky-blue lg:text-base xl:text-lg"
                        href="#projects"
                    >
                        Projects
                    </a>

                    <a
                        className="resume text-sm font-bold hover:text-black dark:hover:text-sky-blue lg:text-base xl:text-lg"
                        href="https://drive.google.com/file/d/1fFbtLDSx2hOb_GNZvc_bXeqYx39EfeT3/view?usp=drive_link"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
