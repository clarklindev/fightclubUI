type UseIntersectOptions = {
    root?: HTMLElement | null;
    rootMargin?: string;
    threshold?: number | number[];
};
type UseIntersectResult = [(node: HTMLElement | null) => void, IntersectionObserverEntry | undefined];
export declare const useIntersect: (options?: UseIntersectOptions) => UseIntersectResult;
export {};
//# sourceMappingURL=useIntersect.d.ts.map