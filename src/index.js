import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRouter from './App';
//import Board from "./pages/Board";
//import Programs from "./pages/Program/Programs";
//import Prospectives from "./pages/Prospectives";

// const routing = (
//     <Router basename={process.env.PUBLIC_URL}>
//         <Switch>
//             <Route exact path="/" component={App} />
//             <Route exact path="/board" component={ Board } />
//             <Route exact path="/programs" component={ Programs } />
//             <Route exact path="/prospectives" component={ Prospectives } />
//         </Switch>
//     </Router>
// )

ReactDOM.render(< AppRouter />, document.getElementById('root'));

// ReactDOM.render(<App/>, document.getElementById('root')); 

serviceWorker.unregister();
