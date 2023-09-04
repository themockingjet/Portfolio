//
//
//

export type ButtonHamburgerProps = {
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.HTMLAttributes<HTMLButtonElement>;
