
import { useState } from "react";
import { postComment } from "../api";


const AddComment = ({article_id, wantToAddComment, setWantToAddComment}) =>{
    const [newComment, setNewComment] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [statusString, setStatusString] = useState("STATUS: No comment entered yet...");
    // console.log(`in addComment, article: ${article_id} wantToAddCommment=${wantToAddComment} , isposting = ${isPosting}`);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPosting(true);
        setStatusString("STATUS: Comment is being inserted - please wait ...");
        const postObj = {
            username: "jessjelly", //NOTE - HARDCODED HERE FOR THE MOMENT
            body: newComment, //body is the newComment state
        };
        postComment(article_id, postObj)
        .then((res)=>{
            //IF success: comment will be rendered after this by CommentsDisplay in SingleArticle
            setWantToAddComment(false);
            setIsPosting(false);
        })
        .catch((err)=>{
            //IF API issue: let user know
            setStatusString("STATUS: Comment failed to load - please try to submit again");
        });
    }

    if(!wantToAddComment){
        return;
    }


    return(
        <form onSubmit={handleSubmit} className="addCommentForm">
            <textarea
                id="commentTextBox"
                placeholder="Enter your comment on the article here..."
                onChange={(event) => {
                    setNewComment(event.target.value);
                }}>
            </textarea>
            {isPosting ? 
                <p id="statusString"><b>{statusString}</b></p> : null}
            <button type="submit">Submit comment</button>
        </form>
    )
}

export default AddComment;



