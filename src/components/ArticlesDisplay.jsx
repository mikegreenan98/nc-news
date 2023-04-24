import {useState, useEffect} from "react";
import { fetchArticles } from "../api";
import RenderArticlesList from "./RenderArticlesList"
import ErrorAPI from "./ErrorAPI";




const ArticlesDisplay = ({currentFilter}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetchArticles(currentFilter)
        .then((articles) => {
            setArticlesList([...articles]);
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
    console.log(articlesList.length);

    return <RenderArticlesList list={articlesList}/>
}

export default ArticlesDisplay;