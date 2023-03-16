import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Topics from './components/Topics';
import { Routes, Route } from "react-router-dom";
import DisplayArticlesForTopic from './components/DisplayArticlesForTopic';
import ErrorPath from './components/ErrorPath';


function App() {
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
        {/* <Route> path="*" element={<ErrorPath/>}</Route> */}
      </Routes>
    </div>
  );

}

export default App;
