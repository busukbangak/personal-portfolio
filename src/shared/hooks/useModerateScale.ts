import useHorizontalScale from "./useHorizontalScale";

export default function useVerticalScale(size: number, factor = 1) {
    return size + (useHorizontalScale(size) - size) * factor;
}
