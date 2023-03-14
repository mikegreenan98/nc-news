import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Topics from './components/Topics';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const [zoomInArticle, setZoomInArticle] = useState(0);

  return (
      <div className="App">
      <Header setZoomInArticle={setZoomInArticle}/>
      <Routes>
        <Route path = "/" element={
                                <Articles 
                                zoomInArticle={zoomInArticle}
                                setZoomInArticle={setZoomInArticle}/>}>
        </Route>
        <Route path = "/articles" element={
                                <Articles
                                zoomInArticle={zoomInArticle}
                                setZoomInArticle={setZoomInArticle}/>}>
        </Route>
        <Route path = "/articles/:article_id" element={
                                <SingleArticle 
                                zoomInArticle={zoomInArticle}
                                setZoomInArticle={setZoomInArticle}/>}>
        </Route>
        <Route path = "/topics" element=
                                {<Topics/>}>
        </Route>
      </Routes>
    </div>
  );

}

export default App;
