import {useState, useEffect} from "react";
import RenderArticlesList from "./RenderArticlesList";
import {fetchArticlesForTopic} from "../api";
import { useParams } from "react-router";


const DisplayArticlesForTopic = ({topicFilter, setTopicFilter}) => {
    console.log('DisplayArticlesForTopic - topicFIlter: ' + topicFilter);
    const {topicFromParams} = useParams();
    console.log('DisplayArticlesForTopic - topcFromParams ' + topicFromParams);
    console.log("ISSUE - CAN'T USE PARAMS BECAUSE LINKS NOT WORKING");

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
        return;
    }
    if(isLoading) {return <h2>Loading articles for {topicFilter} topic...</h2>}
    if(topicFilter === {}) {
        return;
    }
    return <RenderArticlesList list={articlesForTopic} setTopicFilter={setTopicFilter}/>
    
}


export default DisplayArticlesForTopic;