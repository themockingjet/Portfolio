//
//
//

import { ContentDividerProps } from "./ContentDivider.types";

export function ContentDividerReverse({ children }: ContentDividerProps) {
    return (
        <>
            <div className="h-1 flex-1  self-center bg-dark-blue dark:bg-orange">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <path d="M0 0h5z" fill="none" />
                </svg>
            </div>
            <h1 className="py-6 text-4xl font-semibold tracking-tighter text-sunset dark:text-pale-blue md:pb-8">
                {children}
            </h1>
        </>
    );
}
