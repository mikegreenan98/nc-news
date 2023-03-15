

import {useState, useEffect} from "react";
import { fetchTopics} from "../api";
import { Link } from "react-router-dom";

const TopicsFilter = ({setTopicFilter, topicFilter}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [topicsList, setTopicsList] = useState([]);

    //fetch all topics from the API
    useEffect(() => {
        setIsLoading(true);
        fetchTopics().then((topics) => {
            setTopicsList(topics);
            setIsLoading(false);
            console.log(topicsList);
        });
    },[topicFilter]); //only need to render this once


    if(isLoading) {return <h2>Loading topics...</h2>}

    // Render the Topicsfilter, get desired topic 
    // and then 'link' to DisplayArticlesForTopic
    return(
        <div>
        <label htmlFor="selectedTopic">Priority </label>
        <select
          name=""
          id="selectedTopic"
          value={topicFilter}
          onChange={(event) => setTopicFilter(event.target.value)}
        >
        {topicsList.map((topic) => {
            return (
                <option value={topic.slug}>{topic.slug}</option>
            )
        })}
        </select>
        <Link to = {`/articles/?topic=${topicFilter}`}>
        <button>View this article</button>
        </Link>
        </div>
    )
}

export default TopicsFilter;

