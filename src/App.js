import React from 'react';
import './App.css';
import Add from './components/Add'
import Modify from './components/Modify'
import Show from './components/Show'
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Switch>
        <Route path="/" exact component={Show}/>
        <Route path="/add" exact component={Add}/>
        {/* <Route path="/modify" exact component={Modify}/> */}
      </Switch>
    </div>
  );
}


export default App;
