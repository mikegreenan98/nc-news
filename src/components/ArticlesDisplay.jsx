import {useState, useEffect} from "react";
import { fetchArticles } from "../api";
import RenderArticlesList from "./RenderArticlesList"
import { useSearchParams } from "react-router-dom";



const ArticlesDisplay = ({currentFilter}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        const topic = searchParams.get("topic");
        setIsLoading(true);
        fetchArticles(topic).then((articles) => {
            setArticlesList(articles);
            setIsLoading(false);
        });
    },[currentFilter, searchParams]);


    if(isLoading) {return <h2>Loading articles...</h2>}

    return <RenderArticlesList list={articlesList}/>
}

export default ArticlesDisplay;