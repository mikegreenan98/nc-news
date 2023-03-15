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
    return res.data.comments;});
};

export const patchCommentVote = (article, inc) => {
  const patch = {};
  patch.inc_votes = inc;
  return newsApi.patch(`/articles/${article.article_id}`, patch)
  .then((res) => {
    return res.data;
  })
};

export const postComment = (article_id, postObj) => {
  // return newsApi.post(`/articles/77777777/comments`, postObj).then((res) =>{
    return newsApi.post(`/articles/${article_id}/comments`, postObj).then((res) =>{
    return res.data.comment[0];
  });
};

export const fetchTopics = () => {
  return newsApi.get(`/topics`).then((res) =>{
  console.log(res.data.topics);
  return res.data.topics;
});
};

export const fetchArticlesForTopic = (topic) => {
return newsApi.get(`/articles/?topic=${topic}`).then((res) => {
  return res.data.articles;});
};
