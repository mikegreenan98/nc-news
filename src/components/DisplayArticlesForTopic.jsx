import {useState, useEffect} from "react";
import RenderArticlesList from "./RenderArticlesList";
import {fetchArticlesForTopic} from "../api";
import { useParams } from "react-router";
import ErrorAPI from "./ErrorAPI";



const DisplayArticlesForTopic = ({topicFilter, setTopicFilter}) => {
    console.log('DisplayArticlesForTopic - topicFIlter: ' + topicFilter);
    const {topicFromParams} = useParams();
    console.log('DisplayArticlesForTopic - topcFromParams ' + topicFromParams);
    const [error, setError] = useState(null);


    const [articlesForTopic, setArticlesForTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        setError(null); // FIX 2: addd this here MIKE - it works!!!
        fetchArticlesForTopic(topicFilter)
        .then((articles) => {
            setArticlesForTopic(articles);
            setIsLoading(false);
        })
        .catch((errorObj)=>{
            console.log(errorObj);
            setError(errorObj);
        });
    },[topicFilter]);
    
    if (topicFilter === ""){
        console.log('no filter yet - so returning without displaying')
        return;
    }

    if(error !== null){
        return(
            <div>
            {console.log('calling errorApi from singleArticle with error =')}
            {console.table(error)}
            <ErrorAPI errorObj={error} setError={setError}/>
            </div>
        ) 
    }



    if(isLoading) {return <h2>Loading articles for {topicFilter} topic...</h2>}

    return <RenderArticlesList list={articlesForTopic}/>
    
}


export default DisplayArticlesForTopic;