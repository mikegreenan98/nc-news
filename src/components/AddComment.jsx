
import { useState } from "react";
import { postComment } from "../api";


const AddComment = ({article_id, wantToAddComment, setWantToAddComment}) =>{
    const [newComment, setNewComment] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [statusString, setStatusString] = useState("Enter your comment here...");
    console.log(`in addComment with article: ${article_id} and wantToAddCommment=${wantToAddComment}`);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPosting(true);
        const postObj = {
            username: "MikeG777",
            body: newComment,
        };
        console.log(article_id);
        console.table(postObj);
        postComment(article_id, postObj)
        .then(()=>{
            //IF success: comment will be rendered after this by CommentsDisplay in SingleArticle
            setStatusString("Success - your comment has been posted - you will find it below");
        })
        .catch(()=>{
            //IF API issue: let user know
            setStatusString("Comment failed to load - please try to submit again");
        });
        setIsPosting(false);
    }

    
    if(isPosting){
        //IF still rendering
        setStatusString("Comment is being inserted - please wait ...");
    }

    if(!wantToAddComment){
        console.log('not wantingtoadd');
        return;
    }

    // setWantToAddComment(false);

    return(
        <form onSubmit={handleSubmit} className="addCommentForm">
            <label htmlFor="commentTextBox">Your comment on the article</label>
            <textarea
                id="commentTextBox"
                placeholder="Enter your comment here..."
                onChange={(event) => {
                    setNewComment(event.target.value);
                }}>
            </textarea>
            <p>{statusString}</p>
            <button type="submit">Submit comment</button>
        </form>
    )
}

export default AddComment;



