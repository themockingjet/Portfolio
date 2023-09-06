//
//
//

import { ButtonHamburger } from "@components/ButtonHamburger";

export function HeaderNavbar(props: any) {
	//

	return (
		<div className="relative z-10">
			<div className="mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					{/* <!-- Mobile menu button --> */}
					<div className="flex md:hidden">
						<ButtonHamburger
							className=""
							onClick={() => {
								props.onClick();
							}}
						/>
					</div>
				</div>

				{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
				<div className="hidden lg:inline-flex">
					<div className="flex flex-col md:flex-row md:mx-6">
						<a
							className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
							href="#"
						>
							About
						</a>
						<a
							className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
							href="#"
						>
							Experience
						</a>
						<a
							className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
							href="#"
						>
							Projects
						</a>

						<a
							className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
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
