import ArticlesDisplay from "./ArticlesDisplay";
import ArticleFilter from "./ArticlesFilter";
import { useState } from "react";


const Articles = () => {
  const [currentFilter, setCurrentFilter] = useState({ temp: "initial temp Filter" });

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