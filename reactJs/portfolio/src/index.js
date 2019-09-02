import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import { resolve } from 'dns';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>, 
    document.getElementById('root')
    );


// // ========== Experimental Promise(), .then, resolve, reject  ==========
// new Promise((resolve, reject) => {
//     return reject(new Error('No bears'));

//     setTimeout(() => {
//         resolve('Bear, Beets, Battlestar');
//     }, 2000);
// })
// .then(quote => {
//     console.log(quote);
// })
// .catch(error => console.log('error', error))

