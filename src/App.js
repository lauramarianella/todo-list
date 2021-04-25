import './App.css';
import TodoList from './components/TodoList';
import Calc from './components/Calc';
import GetInfo from './components/GetInfo';
import GetInfoAll from './components/GetInfoAll';

import {Link, Route, Switch} from 'react-router-dom';

import React from 'react'

const Home = () => (
  <div>
    <h2>Home</h2><br/>
    <span>Here there will be a long text</span>
  </div>
);


function App() {
  return (
    <div className="App">   
      <h2><Link to="/home">Home :</Link></h2>
      <h2><Link to="/calc">: Calculator :</Link></h2>
      <h2><Link to="/todolist">: Todo-List :</Link></h2>
      <h2><Link to="/getInfo">: Get-Info :</Link></h2>
      <h2><Link to="/getInfoAll">: Get-Info-All</Link></h2>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/calc"><Calc prpTitle={'Awesome Calc!!'}/></Route>
        <Route path="/todolist"><TodoList/></Route>
        <Route path="/getInfo"><GetInfo/></Route>
        <Route path="/getInfoAll"><GetInfoAll/></Route>
      </Switch>
    </div>
  );
}

export default App;
