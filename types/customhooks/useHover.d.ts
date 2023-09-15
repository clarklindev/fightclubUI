export function useHover(): (boolean | {
    onMouseOver: () => void;
    onMouseOut: () => void;
})[];
