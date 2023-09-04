//
//
//

import { useState } from "react";
import { Switch } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "@hooks/useDarkMode";

export function DarkmodeToggle() {
	const [toggle, setToggle] = useState(false);
	const { theme, setTheme } = useDarkMode();

	return (
		<Switch
			checked={theme}
			onChange={() => {
				setTheme(!theme);
				setToggle(!toggle);
			}}
			className={`${theme ? "bg-blue-600" : "bg-gray-200"} relative inline-flex h-10 w-20 items-center rounded-full`}
		>
			<FontAwesomeIcon
				icon={theme ? faSun : faMoon}
				size="xl"
				className={`${
					!theme ? "translate-x-12 text-gray-600" : "text-yellow-400 translate-x-2"
				} duration-300 transition-all absolute`}
			/>
			{/* <FontAwesomeIcon
				icon={faMoon}
				size="xl"
				className={`${theme ? "text-gray-400 translate-x-12" : "text-gray-400"} absolute`}
			/> */}
			<span
				className={`${
					theme ? "translate-x-12" : "translate-x-2"
				} inline-block h-6 w-6 transform rounded-full bg-white transition duration-300 `}
			/>
		</Switch>
	);
}
