import {useState, useEffect} from "react";
import { fetchComments } from "../api";


const CommentsDisplay = ({article_id, wantToAddComment, setCommentToDel}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchComments(article_id).then((comments) => {
            setCommentsList(comments);
            setIsLoading(false);
        });
    },[article_id, wantToAddComment]);

    if(isLoading) {return <h2>Loading comments...</h2>}
    return(
    <div className="commentList">
        <p className="commentsListTitle"><b>Comments</b></p>
        <ul>
        {commentsList.map((comment) => {
            return(
            <div className="commentBox">
            <li key={comment.comment_id} className="articleCard">
                <p className="quote">{comment.body}</p>
                <p className="postedBy">Posted by <b>{comment.author}</b> on <b>{comment.created_at.substring(0,10)}</b> in response to article_id <b>{comment.article_id}</b> ~~~ Votes: <b>{comment.votes}</b></p>
                {/* <button>TBD deleteUserComment</button> */}
            </li></div>);
        })}
        </ul>
    </div>
    );
}













export default CommentsDisplay;