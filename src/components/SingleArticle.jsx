import {useState, useEffect} from "react";
import { fetchOneArticle } from "../api";
import CommentsDisplay from "./CommentsDisplay";

const SingleArticle = ({zoomInArticle, setZoomInArticle}) => {
    console.log('HERE IN SingleArticle with zoomIN = ' + zoomInArticle);

    const [isLoading, setIsLoading] = useState(true);
    const [currentArticle, setCurrentArticle] = useState(true);
    const [commentToDel, setCommentToDel] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchOneArticle(zoomInArticle).then((data) => {
            // console.log(data);
            setCurrentArticle(data);
            setIsLoading(false);
        });
    },[zoomInArticle]);

    if(isLoading) {return <h2>Loading the required article...</h2>}

    return(
        <div className="singleArticleCard">
            <p className = "singleArticleTitle"><b>{currentArticle.title}</b></p>
            <img className="articleImage" src={currentArticle.article_img_url} alt=""></img>
            <p id="quote"><i>{currentArticle.body}</i>   <b>~  Posted by {currentArticle.author} on {currentArticle.created_at.substring(0,10)}</b></p>
            <p>Votes: {currentArticle.votes}</p>
            <div className="singleArticleCardInners">
            <button>Vote for</button>
            <button>Add comment</button>
            <button onClick={() => {setZoomInArticle(0)}}>return to articles</button>
            </div>
            <CommentsDisplay 
                zoomInArticle={zoomInArticle}
                setZoomInArticle={setZoomInArticle} 
                setCommentToDel={setCommentToDel}/>
        </div>
    )
}

export default SingleArticle;