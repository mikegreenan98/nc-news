import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ArticlesFilter = ({setCurrentFilter}) => {
    const [searchParams2] = useSearchParams();
    const [order, setOrder] = useState(searchParams2.get("order"));
    const [sortBy, setSortBy] = useState(searchParams2.get("sort_by"));
    const [topic] = useState(searchParams2.get("topic"));

    // doing this to avoid having a 'submit' button and handler on form below
    useEffect(()=>{
        setCurrentFilter({
            topic: searchParams2.get("topic"), 
            order: order !== null ? order : searchParams2.get("order"), 
            sort_by: sortBy !== null ? sortBy : searchParams2.get("sort_by"),
        });
},[searchParams2, topic, order, sortBy, setCurrentFilter]);  


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