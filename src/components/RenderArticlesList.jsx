import { useEffect } from "react";
import { Link } from "react-router-dom";
// import {UUID} from 'uuidjs';
// import { UUID } from "https://unpkg.com/uuidjs@^5";
const uuid = require('uuid');

const RenderArticlesList = ({list}) => {
    // const uuid = UUID.generate(); 
    
    // useEffect(()=>{
    //     // forceUpdate();
    // },[list]);


    return(
        <div>
            <ul>
                {list.map((article,index) => {
                    return(
                    <div key={uuid.v4()} className="article">
                    {/* <li key={article.article_id} className="articleCard"> */}
                    {/* <li key={index} className="articleCard"> */}
                    {/* <li key={article.article_id+list.length*10} className="articleCard"> */}
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
