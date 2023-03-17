import {useState, useEffect} from "react";
import { fetchOneArticle, patchCommentVote } from "../api";
import CommentsDisplay from "./CommentsDisplay";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import ErrorAPI from "./ErrorAPI";

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentArticle, setCurrentArticle] = useState(true);
    const [commentToDel, setCommentToDel] = useState(null);
    const [wantToAddComment, setWantToAddComment] = useState(false);
    const [error, setError] = useState(null);
    const {article_id} = useParams();

    // LOAD ARTICLE FROM API
    useEffect(() => {
        setIsLoading(true);
        setError(null); // FIX 2: addd this here MIKE - it works!!!
        fetchOneArticle(article_id) // i.e. only clears error when change article-id
        .then((article) => {
            setCurrentArticle(article);
            setIsLoading(false);
        })
        .catch((errorObj)=>{
            setError(errorObj);
        });
    },[article_id]);

    // DEALING WITH VOTES
    //Optimistically rendering: setting currentArticle votes before API call.
    //State change forces a re-render so user sees vote increase immediately 
    const incVotes = (inc) => {
        setCurrentArticle({...currentArticle, votes: currentArticle.votes + inc});
        patchCommentVote(currentArticle,inc).catch(() => {
            // if error on patch, revert currentArticle to its previous state
            setCurrentArticle({...currentArticle, votes: currentArticle.votes - inc})});
    };

    //DEAL WITH ADDING A COMMENT
    const addComment = () => {
        console.log("about to step into AddComment...");
        return <AddComment article_id={article_id}/>;
    }

    //RENDER THE COMPONENT
    
    if(error !== null){
        return(
            <div>
            <ErrorAPI errorObj={error} setError={setError} dependencyState={currentArticle}/>
            </div>
        ) 
    }
    
    if(isLoading){
        return <h2>Loading the required article...</h2>;
    }

    return(
        <div className="singleArticleCard">
            <p className = "singleArticleTitle"><b>{currentArticle.title}</b></p>
            <img className="singleArticleImage" src={currentArticle.article_img_url} alt=""></img>
            <p className="quote"><i>{currentArticle.body}</i></p>
            {/* <p className="postedBy">Posted by <b>{currentArticle.author}</b> on <b>{currentArticle.created_at.substring(0,10)}</b> ~~~ Votes: <b>{currentArticle.votes}</b></p> */}
            <p className="postedBy">Posted by <b>{currentArticle.author}</b> on <b>{new Date(currentArticle.created_at).toDateString().substring(4,)}</b> ~~~ Votes: <b>{currentArticle.votes}</b></p>

            <div className="singleArticleCardInners">
            <button onClick={() => {
                incVotes(1);
            }}>Vote for</button>
            <button onClick={() => {
                incVotes(-1);
            }}>Vote against</button>
            <button onClick={()=>{setWantToAddComment(true)}}>Add comment</button>
            <Link to={`/articles/`}>
                <button>Return to articles</button>
            </Link>
            </div>
            <AddComment 
                article_id={article_id} 
                wantToAddComment={wantToAddComment} 
                setWantToAddComment={setWantToAddComment}/>
            <CommentsDisplay 
                article_id={article_id}
                wantToAddComment={wantToAddComment} 
                setCommentToDel={setCommentToDel}/>
        </div>
    )
}

export default SingleArticle;