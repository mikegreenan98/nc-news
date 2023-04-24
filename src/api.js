import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mikeg-be-nc-news.onrender.com/api/",
});

export const fetchArticles = (paramsObj) => {
  console.log('in API with');
  console.log(paramsObj);
  return newsApi.get("/articles", {params: paramsObj})
  .then((res) => {
    return res.data.articles;})
    .catch((error)=>{
      const errorObj = {
        msg: error.response.data.msg,
        code: error.response.status,
      }
        return Promise.reject(errorObj);
    });
};

export const fetchOneArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article[0];})
    .catch((error)=>{
      const errorObj = {
        msg: error.response.data.msg,
        code: error.response.status,
      }
        return Promise.reject(errorObj);
    });
};
  
export const fetchComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`)
  .then((res) => {
    return res.data.comments;})
  .catch((error)=>{
    const errorObj = {
      msg: error.response.data.msg,
      code: error.response.status,
    }
    return Promise.reject(errorObj);
  });
};

export const patchCommentVote = (article, inc) => {
  const patch = {};
  patch.inc_votes = inc;
  return newsApi.patch(`/articles/${article.article_id}`, patch)
  .then((res) => {
    return res.data;})
  .catch((error)=>{
    const errorObj = {
      msg: error.response.data.msg,
      code: error.response.status,
    }
    return Promise.reject(errorObj);
  });
};

export const postComment = (article_id, postObj) => {
    return newsApi.post(`/articles/${article_id}/comments`, postObj)
    .then((res) =>{
    return res.data.comment[0];})
    .catch((error)=>{
      const errorObj = {
        msg: error.response.data.msg,
        code: error.response.status,
      }
      return Promise.reject(errorObj);
    });
};

export const fetchTopics = () => {
  return newsApi.get(`/topics`)
  .then((res) =>{
    return res.data.topics;})
  .catch((error)=>{
    const errorObj = {
      msg: error.response.data.msg,
      code: error.response.status,
    }
    return Promise.reject(errorObj);
  });


};

export const fetchArticlesForTopic = (topic) => {
  console.log('in API with topic');
  console.log(topic);
  if(topic === ""){
    //catch case where initial rendering of DisplayArticlesForTopic tries to call this
    return Promise.reject();
  }
  return newsApi.get(`/articles/?topic=${topic}`)
  .then((res) => {
    return res.data.articles;})
  .catch((error)=>{
    const errorObj = {
      msg: error.response.data.msg,
      code: error.response.status,
    }
    return Promise.reject(errorObj);
  });
};
