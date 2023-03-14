// import {useState, useEffect} from "react";


const CommentsDisplay = ({zoomInArticle, setZoomInArticle, setCommentToDel}) => {
    console.log('HERE IN CommentsDisplay with zoomInArticle: ' + zoomInArticle);

    return(
        <div>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <button onClick={()=>{setCommentToDel(123456789)}}>Delete a comment TBD</button>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
        </div>
    )
}

export default CommentsDisplay;