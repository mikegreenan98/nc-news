import {useState, useEffect} from "react";
import { fetchOneArticle } from "../api";
import {useParams} from "react-router-dom";
import CommentsDisplay from "./CommentsDisplay";

const SingleArticle = ({zoomInArticle, setZoomInArticle}) => {
    console.log('HERE IN SingleArticle with zoomIN = ' + zoomInArticle);
    console.log(typeof setZoomInArticle);

    const [isLoading, setIsLoading] = useState(true);
    const [currentArticle, setCurrentArticle] = useState(true);
    const [temp, setTemp] = useState(false);
    const [commentToDel, setCommentToDel] = useState(null);


    //ISSUE #1 - DO I EVEN BOTHER DOING THIS - JUST IGNORE PARAMS MAYBE !!!!
    // const {article_id} = useParams();

    /* if reached here via api call with :article_id 
    then unpack that, validate and set zoomInArticle to that */
    // if(zoomInArticle === 0){
    //     console.log(article_id);
    //     useEffect(() => {
        // tbd - VALIDATION OS ARTICLE ID NEXT
    //         setZoomInArticle(article_id);
    //     });
    // };


    useEffect(() => {
        setIsLoading(true);
        fetchOneArticle(zoomInArticle).then((data) => {
            // console.log(data);
            setCurrentArticle(data);
            setIsLoading(false);

            //ISSUE IF DON'T DO THIS - CANT GET BACK FROM SINGLE_ARTICLE 
            // BECAUSE NEVER RESET TO ZERO
            // BUT IF DO THIS, GTE OTHER ISSUES (IE CAN'T DWELL ON SINGLE ARTICLE)
            setZoomInArticle(0); 
        });
    },[]);
// },[zoomInArticle]); // ALSO PART OF ABOVE ISSUE - WHAT TO USE HERE IF DO ABOVE

    if(isLoading) {return <h2>Loading the required article...</h2>}

    // console.log(currentArticle);

    return(
        <div className="singleArticleCard">
            <p>Title: {currentArticle.title}</p>
            <p>Id: {currentArticle.article_id}</p>
            <p>Author: {currentArticle.author}</p>
            <img className="articleImage" src={currentArticle.article_img_url} alt=""></img>
            <p>Topic: {currentArticle.topic}</p>
            <p>Votes: {currentArticle.votes}</p>
            <p>Date: {currentArticle.created_at.substring(0,10)}</p>
            <p>Body: {currentArticle.body}</p>
            <br></br>
            <br></br>
            <button>Vote</button>
            <button>Add comment</button>
            <CommentsDisplay 
                zoomInArticle={zoomInArticle}
                setZoomInArticle={setZoomInArticle} 
                setCommentToDel={setCommentToDel}/>
        </div>
    )
}

export default SingleArticle;