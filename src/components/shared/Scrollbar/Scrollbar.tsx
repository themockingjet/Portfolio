//
//
//
import { Scrollbars } from "react-custom-scrollbars-2";
import { ScrollbarProps } from "./Scrollbar.types";

export function Scrollbar(props: ScrollbarProps) {
	return (
		<Scrollbars
			onScroll={props.handleScroll}
			onScrollFrame={props.handleScrollFrame}
			onScrollStart={props.handleScrollStart}
			onScrollStop={props.handleScrollStop}
			onUpdate={props.handleUpdate}
			renderView={props.renderView}
			renderTrackHorizontal={props.renderTrackHorizontal}
			renderTrackVertical={props.renderTrackVertical}
			renderThumbHorizontal={props.renderThumbHorizontal}
			renderThumbVertical={props.renderThumbVertical}
			autoHide={props.autoHide || true}
			autoHideTimeout={props.autoHideTimeout || 400}
			autoHideDuration={props.autoHideDuration || 350}
			autoHeight={props.autoHeight || false}
			autoHeightMin={props.autoHeightMin || 0}
			autoHeightMax={props.autoHeightMin || "100vh"}
			thumbMinSize={props.thumbMinSize || 30}
			universal={props.universal || false}
			{...props}
		>
			{props.children}
		</Scrollbars>
	);
}
