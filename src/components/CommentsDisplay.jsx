// import {useState, useEffect} from "react";


const CommentsDisplay = ({article_id, setCommentToDel}) => {
    console.log('HERE IN CommentsDisplay with article_id: ' + article_id);

    return(
        <div id="commentsList">
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <p>Comments list for this article TBD</p>
            <button onClick={()=>{setCommentToDel(123456789)}}>Delete a comment TBD</button>
        </div>
    )
}

export default CommentsDisplay;