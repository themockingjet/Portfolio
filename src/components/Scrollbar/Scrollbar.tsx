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
            renderTrackVertical={(props) => <div {...props} className="right-0 z-50 h-full" />}
            renderThumbVertical={(props) => (
                <div {...props} className="z-50 rounded-full bg-dark-blue dark:bg-light-blue xl:w-12" />
            )}
            renderThumbHorizontal={(props) => (
                <div {...props} className="z-50 rounded-full bg-dark-blue dark:bg-light-blue xl:w-12" />
            )}
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
