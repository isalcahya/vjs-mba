import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/home';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </>
    </Router>
  )
}

const rootEl = document.getElementById("app");
ReactDOM.render(<App />, rootEl);
