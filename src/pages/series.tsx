import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchSeriesPopulity } from "../redux/series/slicer";
import ScrollCard from "../components/scrollCard";

const Series = () => {
    const seriesAllDay = useAppSelector(state => state.seriesPopulity.AllDay)
    
    return (
        <div>
            <ScrollCard itens={seriesAllDay} title="Series populity today"/>

        </div>
    )
}

export default Series;