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
			className={`${
				theme ? "bg-light-blue" : "bg-dark-blue"
			} relative inline-flex h-10 w-10 items-center justify-center rounded-full`}
		>
			<FontAwesomeIcon
				icon={theme ? faSun : faMoon}
				size="xl"
				className={`${
					!theme ? "active:animate-toggle-spin text-light-blue" : "text-yellow-400 active:animate-toggle-spin"
				} duration-300 transition-transform absolute`}
			/>
		</Switch>
	);
}
