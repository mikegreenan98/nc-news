import {useState, useEffect} from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";



const ArticlesDisplay = ({currentFilter}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(currentFilter).then((articles) => {
            setArticlesList(articles);
            setIsLoading(false);
        });
    },[currentFilter]);


    if(isLoading) {return <h2>Loading articles...</h2>}

    return(
        <div>
            <ul>
                {articlesList.map((article) => {
                    return(
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
                    </li>);
                })}
            </ul>
        </div>
    )
}

export default ArticlesDisplay;