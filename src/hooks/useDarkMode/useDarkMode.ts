//
//
//

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useDarkMode() {
	const storedDarkMode = localStorage.getItem("DARK_MODE");

	const systemTheme = useMediaQuery(
		{
			query: "(prefers-color-scheme: dark)",
		},
		undefined,
		(isSystemDark) => setTheme(isSystemDark)
	);

	const [theme, setTheme] = useState(storedDarkMode ? storedDarkMode === "true" : systemTheme);

	useEffect(() => {
		const root = window.document.documentElement;

		if (theme) {
			localStorage.setItem("DARK_MODE", theme.toString());
			root.classList.add("dark");
		} else {
			localStorage.setItem("DARK_MODE", theme.toString());
			root.classList.remove("dark");
		}
	}, [theme]);

	return { theme, setTheme };
}
