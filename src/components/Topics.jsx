import {useState} from "react";
import TopicsFilter from "./TopicsFilter";
const {debug} = require('../utils/debugger');


const Topics = () => {
    debug(`Topic`);
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