import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const {debug} = require('../utils/debugger');


const ArticlesFilter = ({setCurrentFilter}) => {
debug(`ArticlesFilter`);
const [order, setOrder] = useState(null);
const [sortBy, setSortBy] = useState(null);
const [topic] = useState(null);
const [params] = useSearchParams();

// doing this to avoid having a 'submit' button and handler on form below
useEffect(()=>{
    setCurrentFilter({
        topic: params.get("topic"), 
        order: order !== null ? order : params.get("order"),  
        sort_by: sortBy !== null ? sortBy : params.get("sort_by")
    });
},[params,topic, order, sortBy, setCurrentFilter]);   

    return( 
            <div id="articlesFilter">
                <form>

                    <label id="sortBanner" htmlFor="sortBy">Select a property to sort by: </label>
                    <select
                    value={sortBy !== null ? sortBy : "created_at"}
                    name="sortBy"
                    id="sortBy"
                    onChange={(event)=>{
                        setSortBy(event.target.value);
                    }}
                    >
                        {/* <option id="noSelectionYet" disabled={true} value="noSelectionYet">select sort_by</option> */}
                        <option id="created_at" value="created_at">Date</option>
                        <option id="author" value="author">Author</option>
                        <option id="votes" value="votes">Votes</option>
                        <option id="title" value="title">Title</option>
                        <option id="topic" value="topic">Topic</option>
                        <option id="article_id" value="article_id">Id</option>
                    </select>

                    <br></br>

                    <label id="orderBanner" htmlFor="order">Select order to view articles: </label>
                    <select
                    value={order !== null ? order : "DESC"}
                    name="order"
                    id="order"
                    onChange={(event)=>{
                        setOrder(event.target.value);
                    }}
                    >
                        {/* <option id="noSelectionYet" disabled={true} value="noSelectionYet">select an order</option> */}
                        <option id="DESC" value="DESC">Descending</option>
                        <option id="ASC" value="ASC">Ascending</option>
                    </select>

                </form>
            </div>
        )
    }
    
export default ArticlesFilter;