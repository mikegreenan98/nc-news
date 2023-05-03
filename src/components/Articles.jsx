import ArticlesDisplay from "./ArticlesDisplay";
import ArticleFilter from "./ArticlesFilter";
import { useState } from "react";
const {debug} = require('../utils/debugger');


const Articles = () => {
    debug(`Articles`);

    const [currentFilter, setCurrentFilter] = useState({});

    return(
        <div>
            <ArticleFilter setCurrentFilter={setCurrentFilter}/>
            <ArticlesDisplay currentFilter={currentFilter}/>
        </div>
    )
}
export default Articles;