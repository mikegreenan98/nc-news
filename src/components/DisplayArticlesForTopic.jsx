import {useState, useEffect} from "react";
import RenderArticlesList from "./RenderArticlesList";
import {fetchArticlesForTopic} from "../api";
import { useParams } from "react-router";


const DisplayArticlesForTopic = ({topicFilter, setTopicFilter}) => {
    console.log('DisplayArticlesForTopic - topicFIlter: ' + topicFilter);
    const {topicFromParams} = useParams();
    console.log('DisplayArticlesForTopic - topcFromParams ' + topicFromParams);

    const [articlesForTopic, setArticlesForTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        fetchArticlesForTopic(topicFilter).then((articles) => {
            setArticlesForTopic(articles);
            setIsLoading(false);
        });
    },[topicFilter]);
    
    if (topicFilter === ""){
        console.log('no filter yet - so returning without displaying')
        return;
    }

    if(isLoading) {return <h2>Loading articles for {topicFilter} topic...</h2>}

    return <RenderArticlesList list={articlesForTopic}/>
    
}


export default DisplayArticlesForTopic;