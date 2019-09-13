import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import EvensOrOdds from './projects/evens-or-odds';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-master' render={() => {<Header><MusicMaster /></Header>}} />
            <Route path='/evens-or-odds' render={() => {<Header><EvensOrOdds /></Header>}} />

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

