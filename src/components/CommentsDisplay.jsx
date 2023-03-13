import {useState, useEffect} from "react";
import { fetchArticles } from "../api";


const CommentsDisplay = ({zoomInArticle, setZoomInArticle, setCommentToDel}) => {
    console.log('HERE IN CommentsDisplay with zoomInArticle: ');
    console.log(zoomInArticle);

    // useEffect(() => {
    //     setZoomInArticle(0);
    // },[]);

    return(
        <div>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
        </div>
    )
}

export default CommentsDisplay;