//
//
//

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useDarkMode() {
	const systemTheme = useMediaQuery(
		{
			query: "(prefers-color-scheme: dark)",
		},
		undefined,
		(isSystemDark) => setTheme(isSystemDark)
	);

	const [theme, setTheme] = useState(systemTheme);

	useEffect(() => {
		const root = window.document.documentElement;

		if (theme) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [theme]);

	return { theme, setTheme };
}
