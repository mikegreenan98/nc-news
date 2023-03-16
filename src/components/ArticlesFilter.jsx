import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const ArticlesFilter = ({setCurrentFilter}) => {
    const [searchParams2, setSearchParams2] = useSearchParams();
    const paramsObj = {};
    paramsObj.topic = searchParams2.get("topic");
    paramsObj.order = searchParams2.get("order");
    paramsObj.sort_by = searchParams2.get("sort_by");
    const [topic, setTopic] = useState(paramsObj.topic);
    const [order, setOrder] = useState(paramsObj.order);
    const [sortBy, setSortBy] = useState(paramsObj.sort_by);

    // doing this to avoid having a 'submit' button and handler on form below
    useEffect(()=>{
        setCurrentFilter({topic: topic, order: order, sort_by: sortBy});
    },[topic,order,sortBy]);


    return(
            <div id="articlesFilter">
                <form>

                    <label id="orderBanner" htmlFor="order">Select an order to view articles in: </label>
                    <select
                    value={order}
                    name="order"
                    id="order"
                    onChange={(event)=>{
                        setOrder(event.target.value);
                    }}
                    >
                        <option id="noSelectionYet" disabled={true} value="noSelectionYet">select an order</option>
                        <option id="DESC" value="DESC">Descending</option>
                        <option id="ASC" value="ASC">Ascending</option>
                    </select>
                    <br></br>
                    <label id="sortBanner" htmlFor="sortBy">Select what to sort by: </label>
                    <select
                    value={sortBy}
                    name="sortBy"
                    id="sortBy"
                    onChange={(event)=>{
                        setSortBy(event.target.value);
                    }}
                    >
                        <option id="noSelectionYet" disabled={true} value="noSelectionYet">select sort_by</option>
                        <option id="created_at" value="created_at">Date</option>
                        <option id="author" value="author">Author</option>
                        <option id="votes" value="votes">Votes</option>
                        <option id="title" value="title">Title</option>
                        <option id="topic" value="topic">Topic</option>
                        <option id="article_id" value="article_id">Id</option>
                    </select>

                </form>
            </div>
        )
    }
    
export default ArticlesFilter;