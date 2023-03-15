import {useState} from "react";
import TopicsFilter from "./TopicsFilter";
import DisplayArticlesForTopic from "./DisplayArticlesForTopic";

const Topics = () => {
    const [topicFilter, setTopicFilter] = useState({});
    console.log('HERE IN Topics');
    return(
        <div>
            <TopicsFilter topicFilter={topicFilter} setTopicFilter={setTopicFilter}/>
            {/* <DisplayArticlesForTopic topicFilter={topicFilter}/> */}
        </div>
    )
}




export default Topics;