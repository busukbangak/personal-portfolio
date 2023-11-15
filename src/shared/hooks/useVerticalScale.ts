import useWindowDimensions from "./useWindowDimensions";
import { GUIDELINE_BASE_HEIGHT, GUIDELINE_BASE_WIDTH } from "../types/metrics";

export default function useVerticalScale(size: number) {
    const { height } = useWindowDimensions();

    return (height / GUIDELINE_BASE_HEIGHT) * size;
}
