import { Position } from './position';
export declare enum Quadrant {
    TL = "top-left",
    BL = "bottom-left",
    TR = "top-right",
    BR = "bottom-right"
}
export declare const getHorizontalQuadrant: (element: HTMLElement, layoutContainer: HTMLElement | undefined) => Position.LEFT | Position.RIGHT | Position.CENTER;
export declare const getQuadrantWithRespectToViewport: (element: HTMLElement) => Quadrant | null;
//# sourceMappingURL=getQuadrant.d.ts.map