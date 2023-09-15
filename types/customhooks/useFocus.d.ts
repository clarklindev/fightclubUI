export function useFocus(): (boolean | {
    onFocus: () => void;
    onBlur: () => void;
})[];
