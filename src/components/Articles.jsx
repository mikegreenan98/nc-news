import ArticlesDisplay from "./ArticlesDisplay";
import ArticleFilter from "./ArticlesFilter";
import SingleArticle from './SingleArticle';
import { useState } from "react";


const Articles = ({zoomInArticle, setZoomInArticle}) => {
    console.log('HERE IN Articles with zoominArticle set to: ' + zoomInArticle);
  const [currentFilter, setCurrentFilter] = useState({ temp: "initial temp Filter" });

    if(zoomInArticle !== 0){
        return<SingleArticle 
                    zoomInArticle={zoomInArticle}
                    setZoomInArticle={setZoomInArticle}/>;}
    return(
        <div>
            <ArticleFilter
                setCurrentFilter={setCurrentFilter}/>
            <ArticlesDisplay 
                currentFilter={currentFilter}
                setZoomInArticle={setZoomInArticle}
                />
        </div>
    )
}
export default Articles;