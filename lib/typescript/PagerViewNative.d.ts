import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import type { Orientation, PagerViewOnPageScrollEvent, PagerViewOnPageSelectedEvent, PageScrollStateChangedNativeEvent, TransitionStyle } from './types';
declare type PagerViewNativeProps = {
    childrenKeys: string[];
    count: number;
    offscreenPageLimit?: number;
    offset: number;
    onMoveShouldSetResponderCapture: (event: GestureResponderEvent) => boolean;
    onPageScroll?: (event: PagerViewOnPageScrollEvent) => void;
    onPageScrollStateChanged?: (event: PageScrollStateChangedNativeEvent) => void;
    onPageSelected?: (event: PagerViewOnPageSelectedEvent) => void;
    orientation?: Orientation;
    overdrag?: boolean;
    pageMargin?: number;
    scrollEnabled?: boolean;
    showPageIndicator?: boolean;
    style: StyleProp<ViewStyle>;
    transitionStyle?: TransitionStyle;
};
export declare const PagerViewViewManager: import("react-native").HostComponent<PagerViewNativeProps>;
export declare function getViewManagerConfig(viewManagerName?: string): {
    Commands: {
        [key: string]: number;
    };
};
export {};
