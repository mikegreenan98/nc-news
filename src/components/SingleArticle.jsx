import {useState, useEffect} from "react";
import { fetchOneArticle, patchCommentVote } from "../api";
import CommentsDisplay from "./CommentsDisplay";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentArticle, setCurrentArticle] = useState(true);
    const [commentToDel, setCommentToDel] = useState(null);


    const {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetchOneArticle(article_id).then((article) => {
            setCurrentArticle(article);
            setIsLoading(false);
    });
    },[article_id]);

    //Optimistically rendering: setting currentArticle votes before API call.
    //State change forces a re-render so user sees vote increase immediately 
    const incVotes = (inc) => {
        setCurrentArticle({...currentArticle, votes: currentArticle.votes + inc});
        patchCommentVote(currentArticle,inc).catch(() => {
            // if error on patch, revert currentArticle to its previous state
            setCurrentArticle({...currentArticle, votes: currentArticle.votes - inc})});
    };

    if(isLoading){
        return <h2>Loading the required article...</h2>;
    }

    return(
        <div className="singleArticleCard">
            <p className = "singleArticleTitle"><b>{currentArticle.title}</b></p>
            <img className="articleImage" src={currentArticle.article_img_url} alt=""></img>
            <p className="quote"><i>{currentArticle.body}</i></p>
            <p className="postedBy">Posted by <b>{currentArticle.author}</b> on <b>{currentArticle.created_at.substring(0,10)}</b> ~~~ Votes: <b>{currentArticle.votes}</b></p>
            <div className="singleArticleCardInners">
            <button onClick={() => {
                incVotes(1);
            }}>Vote for</button>
            <button onClick={() => {
                incVotes(-1);
            }}>Vote against</button>
            <button>Add comment</button>
            <Link to={`/articles/`}>
                <button>Return to articles</button>
            </Link>
            </div>
            <CommentsDisplay 
                article_id={article_id}
                setCommentToDel={setCommentToDel}/>
        </div>
    )
}

export default SingleArticle;