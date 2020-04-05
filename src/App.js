import React from 'react';
import{Switch, Route, } from "react-router-dom"
// import './App.css';
import Index from "./main/index/index"

function App() {
  return (
      <Switch>
        <Route path='/' component = {Index}></Route>
      </Switch>
  );
}

export default App;
