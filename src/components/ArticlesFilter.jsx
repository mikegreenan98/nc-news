import { useState } from "react";


const ArticlesFilter = ({setCurrentFilter}) => {
    console.log('HERE IN Articles Filter');

const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentFilter({temp: "Filter now set"});
}



    return(
        <div id="articlesFilter">
            <form onSubmit={handleSubmit}>
                <textarea placeholder="topic?"></textarea>
                <textarea placeholder="sort by?"></textarea>
                <textarea placeholder="order by?"></textarea>
                <button type="submit">Appy filter to Articles list below</button>

            </form>
        </div>
    )
}

export default ArticlesFilter;