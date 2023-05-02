import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const uuid = require('uuid');

const RenderArticlesList = ({list}) => {

    // bizarre - only re-renders on change to list if I use a temporary local state (list777)
    const [list777, setList777] = useState([]);
    useEffect(()=>{
        setList777([...list]);
        // console.log(list777.length);
},[list, list777.length]); 


    return(
        <div>
            <ul>
                {list777.map((article,index) => {
                    return(
                    <div key={uuid.v4()} className="article">
                    <li key={uuid.v4()} className="articleCard">
                        <p key={article.title+uuid.v4()}>Title: {article.title}</p>
                        <p key={article.article_id+uuid.v4()}>Id: {article.article_id}</p>
                        <p key={article.author+uuid.v4()}>Author: {article.author}</p>
                        <img key={article.article_img_url+uuid.v4()} className="articleImage" src={article.article_img_url} alt=""></img>
                        <p key={article.topic+uuid.v4()}>Topic: {article.topic}</p>
                        <p key={article.votes+uuid.v4()}>Votes: {article.votes}</p>
                        <p key={article.created_at+uuid.v4()}>Date: {new Date(article.created_at).toDateString().substring(4,)}</p>
                        <Link to={`/articles/${article.article_id}`} key={uuid.v4()}>
                        <button className = "ButtonViewArticle">View this article</button>
                        </Link>
                    </li>
                    </div>);
                })}
            </ul>
        </div>
    )

}

export default RenderArticlesList;
