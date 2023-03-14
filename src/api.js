import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mikeg-be-nc-news.onrender.com/api/",
});

export const fetchArticles = (filter) => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;});
};

export const fetchOneArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
      return res.data.article[0];});
};
  
export const fetchComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    console.log(res.data.comments);
    return res.data.comments;});
};

