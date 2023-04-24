import {useState} from "react";
import TopicsFilter from "./TopicsFilter";
// import DisplayArticlesForTopic from "./DisplayArticlesForTopic";

const Topics = () => {
    const [topicFilter, setTopicFilter] = useState("");
    return(
        <div>
            <TopicsFilter 
                topicFilter={topicFilter} 
                setTopicFilter={setTopicFilter}
            />
            {/* <DisplayArticlesForTopic 
                topicFilter={topicFilter}
                setTopicFilter={setTopicFilter}
            /> */}
        </div>
    ) 
}




export default Topics;