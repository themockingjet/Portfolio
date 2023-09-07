//
//
//

import { ButtonHamburger } from "@components/ButtonHamburger";
import { cn } from "@utils";

export function HeaderNavbar(props: any) {
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
                <div className="flex flex-col md:flex-row lg:space-x-10 xl:space-x-20">
                    <a
                        className="hover:text-indigo-500 dark:hover:text-indigo-400 my-1 text-sm font-medium dark:text-gray-200 md:mx-4 md:my-0 lg:text-base"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="hover:text-indigo-500 dark:hover:text-indigo-400 my-1 text-sm font-medium dark:text-gray-200 md:mx-4 md:my-0 lg:text-base"
                        href="#experience"
                    >
                        Experience
                    </a>
                    <a
                        className="hover:text-indigo-500 dark:hover:text-indigo-400 my-1 text-sm font-medium dark:text-gray-200 md:mx-4 md:my-0 lg:text-base"
                        href="#projects"
                    >
                        Projects
                    </a>

                    <a
                        className="hover:text-indigo-500 dark:hover:text-indigo-400 my-1 text-sm font-medium dark:text-gray-200 md:mx-4 md:my-0 lg:text-base"
                        href="#"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
