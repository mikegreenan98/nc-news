import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Topics from './components/Topics';
import { Routes, Route } from "react-router-dom";
import DisplayArticlesForTopic from './components/DisplayArticlesForTopic';


function App() {
console.log('app');
  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element={<Articles/>}>
        </Route>
        <Route path = "/articles" element={<Articles/>}>
        </Route>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}>
        </Route>
        <Route path = "/topics" element={<Topics/>}>
        </Route>
        <Route path = "/articles?topic=:topic_id" element={<DisplayArticlesForTopic/>}>
        </Route>
        <Route path = "/articles?topic=football" element={<DisplayArticlesForTopic/>}>
        </Route>
      </Routes>
    </div>
  );

}

export default App;
