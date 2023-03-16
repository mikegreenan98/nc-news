import {useState, useEffect} from "react";
import { fetchArticles } from "../api";
import RenderArticlesList from "./RenderArticlesList"



const ArticlesDisplay = ({currentFilter}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(currentFilter).then((articles) => {
            setArticlesList(articles);
            setIsLoading(false);
        });
    },[currentFilter]);


    if(isLoading) {return <h2>Loading articles...</h2>}

    return <RenderArticlesList list={articlesList}/>
}

export default ArticlesDisplay;