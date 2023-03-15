import { useEffect } from "react";
import { Link } from "react-router-dom";

const RenderArticlesList = ({list, setTopicFilter}) => {
    
    console.log("ISSUE - CAN'T GET BACK TO TOPICS BECAUSE CAN'T CHANGE STATE HERE");
    // useEffect(()=>{
    //     setTopicFilter("");
    // },[list]);
    
    
    return(
        <div>
            <ul>
                {list.map((article) => {
                    return(
                    <div className="article">
                    <li key={article.article_id} className="articleCard">
                        <p>Title: {article.title}</p>
                        <p>Id: {article.article_id}</p>
                        <p>Author: {article.author}</p>
                        <img className="articleImage" src={article.article_img_url} alt=""></img>
                        <p>Topic: {article.topic}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Date: {article.created_at.substring(0,10)}</p>
                        <Link to={`/articles/${article.article_id}`}>
                        <button>View this article</button>
                        </Link>
                    </li>
                    </div>);
                })}
            </ul>
        </div>
    )

}

export default RenderArticlesList;
