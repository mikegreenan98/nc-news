import {useState, useEffect} from "react";
import RenderArticlesList from "./RenderArticlesList";
import {fetchArticlesForTopic} from "../api"


const DisplayArticlesForTopic = ({topicFilter}) => {
    console.log('HERE IN DisplayArticlesForTopic with: ' + topicFilter);
    const [articlesForTopic, setArticlesForTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchArticlesForTopic(topicFilter).then((articles) => {
            setArticlesForTopic(articles);
            setIsLoading(false);
        });
    },[topicFilter]);

    if(isLoading) {return <h2>Loading articles for {topicFilter} topic...</h2>}


    return <RenderArticlesList list={articlesForTopic}/>
    
}


export default DisplayArticlesForTopic;