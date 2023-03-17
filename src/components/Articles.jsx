import ArticlesDisplay from "./ArticlesDisplay";
import ArticleFilter from "./ArticlesFilter";
import { useState } from "react";


const Articles = () => {
    console.log("in articles");
  const [currentFilter, setCurrentFilter] = useState({});

    return(
        <div>
            <ArticleFilter
                setCurrentFilter={setCurrentFilter}/>
            <ArticlesDisplay 
                currentFilter={currentFilter}/>
        </div>
    )
}
export default Articles;