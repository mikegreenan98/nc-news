import {useState} from "react";
import TopicsFilter from "./TopicsFilter";
import DisplayArticlesForTopic from "./DisplayArticlesForTopic";

const Topics = () => {
    const [topicFilter, setTopicFilter] = useState("");
    console.log('HERE IN Topics and topicFileter is ' + topicFilter);



    console.log("ISSUE - CAN'T USE LINKS SO HAVE TO NAVIGATE VIA HERE");
    return(
        <div>
            {topicFilter === "" ? 
            <TopicsFilter 
                topicFilter={topicFilter} 
                setTopicFilter={setTopicFilter}
            /> :
            <DisplayArticlesForTopic 
                topicFilter={topicFilter}
                setTopicFilter={setTopicFilter}
            />
            }
        </div>
    )
}




export default Topics;