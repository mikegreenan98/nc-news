
import { useState } from "react";
import { postComment } from "../api";


const AddComment = ({article_id, wantToAddComment, setWantToAddComment}) =>{
    const [newComment, setNewComment] = useState("");
    // const [isPosting, setIsPosting] = useState(false);
    const [statusString, setStatusString] = useState("STATUS: No comment entered yet...");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newComment === ""){
            setStatusString("STATUS: Comments can not be empty - please insert some text");
        } else {
            // setIsPosting(true);
            setStatusString("STATUS: Comment is being inserted - please wait ...");
            const postObj = {
                username: "jessjelly", //NOTE - HARDCODED HERE FOR THE MOMENT
                body: newComment, //body is the newComment state
            };
            postComment(article_id, postObj)
            .then((res)=>{
                //IF success: comment will be rendered after this by CommentsDisplay in SingleArticle
                setWantToAddComment(false);
                // setIsPosting(false);
                setNewComment("");
            })
            .catch((err)=>{
                //IF API issue: let user know
                setStatusString("STATUS: Comment failed to load - please try to submit again");
            });
        }
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
            <p id="statusString"><b>{statusString}</b></p>
            <button type="submit">Submit comment</button>
        </form>
    )
}

export default AddComment;



