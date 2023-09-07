//
//
//

export type HeaderProps = {
    isModalOpen?: boolean;
    setIsModalOpen?: (isModalOpen: boolean) => void;
    yPosition?: number;
    isScrollTop?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
