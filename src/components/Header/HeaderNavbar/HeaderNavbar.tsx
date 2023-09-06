//
//
//

import { ButtonHamburger } from "@components/ButtonHamburger";

export function HeaderNavbar(props: any) {
    //

    return (
        <div className="relative z-10">
            <div className="mx-auto md:flex md:items-center md:justify-between">
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
                            className="my-1 text-sm font-medium hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0 lg:text-base"
                            href="#about"
                        >
                            About
                        </a>
                        <a
                            className="my-1 text-sm font-medium hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0 lg:text-base"
                            href="#experience"
                        >
                            Experience
                        </a>
                        <a
                            className="my-1 text-sm font-medium hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0 lg:text-base"
                            href="#projects"
                        >
                            Projects
                        </a>

                        <a
                            className="my-1 text-sm font-medium hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0 lg:text-base"
                            href="#"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
