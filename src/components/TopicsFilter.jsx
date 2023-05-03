import {useState, useEffect} from "react";
import { fetchTopics} from "../api";
import { useNavigate } from "react-router-dom";
import ErrorAPI from "./ErrorAPI";
const {debug} = require('../utils/debugger');



const TopicsFilter = ({setTopicFilter, topicFilter}) => {
    debug(`TopicFilter`);
    const [isLoading, setIsLoading] = useState(false);
    const [topicsList, setTopicsList] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    //fetch all topics from the API
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetchTopics()
        .then((topics) => {
            setTopicsList(topics);
            setIsLoading(false);
        })
        .catch((errorObj)=>{
            console.log(errorObj);
            setError(errorObj);
        })
    },[topicFilter]);
    
    // }
    
    if(error !== null){
        return(
            <div>
            <ErrorAPI errorObj={error} setError={setError}/>
            </div>
        ) 
    }

    if(isLoading) {
        return <h2>Loading topics...</h2>
    };

    // Render the Topicsfilter, get desired topic 
    // and then 'link' to DisplayArticlesForTopic
    return(
        <div>
        <label htmlFor="selectedTopic">Select a topic to see all related articles: </label>
        <select
        defaultValue={"noSelectionYet"}
        name=""
        id="selectedTopic"
        onChange={(event)=>{
            setTopicFilter(event.target.value); 
            navigate(`/articles?topic=${event.target.value}`);
        }}
        >
        <option id="noSelectionYet" disabled={true} value="noSelectionYet">select topic</option>
        {topicsList.map((topic,index) => {
            return <option key={index}>{topic.slug}</option>
        })}
        </select>
        </div>
    )
}

export default TopicsFilter;

