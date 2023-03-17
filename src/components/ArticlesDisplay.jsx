import {useState, useEffect} from "react";
import { fetchArticles } from "../api";
import RenderArticlesList from "./RenderArticlesList"
import { useSearchParams } from "react-router-dom";
import ErrorAPI from "./ErrorAPI";




const ArticlesDisplay = ({currentFilter}) => {
    console.log('in articles display');
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
            console.log(errorObj);
            setError(errorObj);
        });
    },[currentFilter]);

    if(error !== null){
        return(
            <div>
            {console.log('calling errorApi from articleDisplay with error =')}
            {console.table(error)}
            <ErrorAPI errorObj={error} setError={setError}/>
            </div>
        ) 
    }



    if(isLoading) {return <h2>Loading articles...</h2>}

    return <RenderArticlesList list={articlesList}/>
}

export default ArticlesDisplay;