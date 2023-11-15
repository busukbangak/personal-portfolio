import useWindowDimensions from "./useWindowDimensions";
import { GUIDELINE_BASE_WIDTH } from "../types/metrics";

export default function useHorizontalScale(size: number) {
    const { width } = useWindowDimensions();

    return (width / GUIDELINE_BASE_WIDTH) * size;
}
