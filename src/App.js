import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Topics from './components/Topics';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";



// const cors = require('cors');
// app.use(cors());

function App() {
  console.log('HERE IN App');
  const [zoomInArticle, setZoomInArticle] = useState(789);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element={
                                <Articles 
                                setZoomInArticle={setZoomInArticle}/>}>
        </Route>
        <Route path = "/articles" element={
                                <Articles
                                setZoomInArticle={setZoomInArticle}/>}>
        </Route>
        <Route path = "/articles/:article_id" element={
                                <SingleArticle 
                                zoomInArticle={zoomInArticle}/>}>
        </Route>
        <Route path = "/topics" element=
                                {<Topics/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
