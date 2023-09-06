//
//
//

import * as React from "react";

export type ScrollbarProps = {
	handleScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
	onScrollFrame?: (values: any) => void;
	handleScrollStart?: () => void;
	handleScrollStop?: () => void;
	handleUpdate?: (values: any) => void;
	renderView?: (props: any) => React.ReactNode;
	renderTrackHorizontal?: (props: any) => React.ReactNode;
	renderTrackVertical?: (props: any) => React.ReactNode;
	renderThumbHorizontal?: (props: any) => React.ReactNode;
	renderThumbVertical?: (props: any) => React.ReactNode;
	autoHide?: boolean;
	autoHideTimeout?: number;
	autoHideDuration?: number;
	autoHeight?: boolean;
	autoHeightMin?: number | string;
	autoHeightMax?: number | string;
	thumbMinSize?: number;
	universal?: boolean;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
};
