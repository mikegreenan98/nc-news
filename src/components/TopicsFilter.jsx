

import {useState, useEffect} from "react";
import { fetchTopics} from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const TopicsFilter = ({setTopicFilter, topicFilter}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [topicsList, setTopicsList] = useState([]);
    console.log(`In topicsfilter, isLoading =${isLoading} and topicFilter=${topicFilter}`);
    const navigate = useNavigate();
    
    //fetch all topics from the API
    useEffect(() => {
        setIsLoading(true);
        fetchTopics()
        .then((topics) => {
            setTopicsList(topics);
            setIsLoading(false);
        })
    },[topicFilter]);
    
    const handleChange = (event) =>{
        setTopicFilter(event.target.value);
        console.log("event.target.value is " + event.target.value);
        // navigate(`/articles?topic=${topicFilter}`);
        // <Link to = {`/articles?topic=${topicFilter}`}/>
        console.log("ISSUE - ABOVE LINK OR NAVIGATE DON'T WORK");
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
          name=""
          id="selectedTopic"
        //   value={topicFilter} //NOT SURE HOW TO USE THIS ???
          onChange={handleChange}
          onClick={handleChange} //note - had to add this to capture if click on first item
        >
        {topicsList.map((topic,index) => {
            return <option>{topic.slug}</option>
        })}
        </select>
        </div>
    )
}

export default TopicsFilter;

