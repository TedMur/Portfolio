import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSCRUCTIONS_EXPANDED';

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
    console.log("state", state, 'action', action);

    // if (action.type === SET_GAME_STARTED )  {
    //     return {
    //         gameStarted: action.gameStarted,
    //         instructionsExpanded: state.instructionsExpanded
    //     }
    // }

    // if(action.type === SET_INSTRUCTIONS_EXPANDED) {
    //     return {
    //         gameStarted: state.gameStarted,
    //         instructionsExpanded: action.instructionsExpanded
    //     };
    // }

    // Clean up "if" statements
    switch(action.type) {
        case SET_GAME_STARTED:
            return { ...state, gameStarted: action.gameStarte };
        case SET_INSTRUCTIONS_EXPANDED:
            return {
                // gameStarted: state.gameStarted,
                // change this to below
                ...state,
                instructionsExpanded: bindActionCreators.instructionsExpanded
            };
        default:
            return state;
    }

    return state;
};

const store = createStore(rootReducer);

console.log('store', store);
console.log('store.getState()', store.getState());

store.subscribe(()  => console.log('store.getState()', store.getState()));

const startGame = () => {
    return{ type: SET_GAME_STARTED, gameStarted: true };
};
const cancelGame = () => {
    return{ type: SET_GAME_STARTED, gameStarted: false };
}

const expandInstructions = () => {
    return{ type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true };
}

const cancelInstructions = () => {
    return{ type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }; 
}

store.dispatch(startGame()); 
store.dispatch(expandInstructions());

store.dispatch(cancelGame());
store.dispatch(cancelInstructions());

ReactDOM.render(<App />,document.getElementById('root'));



