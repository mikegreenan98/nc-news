
import { useState } from "react";
import { postComment } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/user";


const AddComment = ({article_id, wantToAddComment, setWantToAddComment}) =>{
    const [newComment, setNewComment] = useState("");
    const [statusString, setStatusString] = useState("STATUS: No comment entered yet...");
    const {user} = useContext(UserContext);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newComment === ""){
            setStatusString("STATUS: Comments can not be empty - please insert some text");
        } else if(user === 'Anonomous'){
            setStatusString("STATUS: You can't add anonomous comments - please login first");
        }
        else {
            // setIsPosting(true);
            setStatusString("STATUS: Comment is being inserted - please wait ...");
            const postObj = {
                username: user, //user id the global 'user' context
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
                console.log(err);
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



