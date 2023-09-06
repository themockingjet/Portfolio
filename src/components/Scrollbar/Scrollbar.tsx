//
//
//
import { Scrollbars } from "react-custom-scrollbars-2";
import { ScrollbarProps } from "./Scrollbar.types";

export function Scrollbar(props: ScrollbarProps) {
    return (
        <Scrollbars
            className="overflow-y-auto overflow-x-hidden"
            onScroll={props.handleScroll}
            onScrollFrame={props.onScrollFrame}
            onScrollStart={props.handleScrollStart}
            onScrollStop={props.handleScrollStop}
            onUpdate={props.handleUpdate}
            renderView={(props) => <div {...props} style={{ ...props.style, overflowX: "hidden" }} />}
            renderTrackVertical={props.renderTrackVertical}
            renderThumbVertical={props.renderThumbVertical}
            autoHide={props.autoHide || true}
            autoHideTimeout={props.autoHideTimeout || 400}
            autoHideDuration={props.autoHideDuration || 350}
            autoHeight={props.autoHeight || false}
            autoHeightMin={props.autoHeightMin || 0}
            autoHeightMax={props.autoHeightMin || "100vh"}
            thumbMinSize={props.thumbMinSize || 30}
            thumbSize={200}
            universal={props.universal || false}
            {...props}
        >
            {props.children}
        </Scrollbars>
    );
}
