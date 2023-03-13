import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mikeg-be-nc-news.onrender.com/api/",
});

export const fetchArticles = (filter) => {
//   const filterObject = {params: filter };
  // NOTE - very handy - axios get 2nd param can contain all the queries !
  return newsApi.get("/articles").then((res) => {
    // console.log(res.data.articles);
    return res.data.articles;});
};

export const fetchOneArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
      // console.log(res.data.article[0]);
      return res.data.article[0];});
  };
  
