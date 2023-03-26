import {useState, useEffect} from "react";
import { fetchArticles } from "../api";
// import RenderArticlesList from "./RenderArticlesList"
import ErrorAPI from "./ErrorAPI";
import { Link } from "react-router-dom";
const uuid = require('uuid');




const ArticlesDisplay = ({currentFilter}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetchArticles(currentFilter)
        .then((articles) => {
            setArticlesList(articles);
            setIsLoading(false);
        })
        .catch((errorObj)=>{
            setError(errorObj);
        });
    },[currentFilter]);

    if(error !== null){
        return(
            <div>
            <ErrorAPI errorObj={error} setError={setError}/>
            </div>
        ) 
    }

    if(isLoading) {return <h2>Loading articles...</h2>}

    // have tried everthing to force the render when changes topics but still get occasional
    // time when does not refresh - seems better when I put the renderartcilelist code here..
    // return <RenderArticlesList list={articlesList}/>

    return(
        <div>
            <ul>
                {articlesList.map((article,index) => {
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

export default ArticlesDisplay;