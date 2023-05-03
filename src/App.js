import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Topics from './components/Topics';
import { Routes, Route } from "react-router-dom";
import ErrorPath from './components/ErrorPath';
import Users from './components/Users';
const {debug} = require('./utils/debugger');

function App() {
  debug(`App`);
 
  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element={<Articles/>}></Route>
        <Route path = "/articles" element={<Articles/>}></Route>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}></Route>
        <Route path = "/topics" element={<Topics/>}></Route>
        <Route path = "/users" element={<Users/>}></Route>
        <Route path="*" element={<ErrorPath/>}></Route>
      </Routes>
    </div>
  );

}

export default App;
