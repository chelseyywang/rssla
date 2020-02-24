import React from 'react';
import { Route, Switch, Router, BrowserRouter, HashRouter} from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Prospectives from './pages/Prospectives';  
import Programs from './pages/Program/Programs'; 
import About from './pages/About'; 
import Board from './pages/Board';
import NewHeader from './components/NewHeader/NewHeader'; 

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <NewHeader/>
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/prospectives' component={Prospectives} />
        <Route path='/board' component={Board} />
        <Route path='/programs' component={Programs} />
      </Switch>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default AppRouter;
