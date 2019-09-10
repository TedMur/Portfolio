import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../action/types';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
};

const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
    // Clean up "if" statements
    switch(action.type) {
        case SET_GAME_STARTED:
            return { ...state, gameStarted: action.gameStarted };
        case SET_INSTRUCTIONS_EXPANDED:
            return {
                // gameStarted: state.gameStarted,
                // change this to below
                ...state,
                instructionsExpanded: action.instructionsExpanded
            };
        default:
            return state;
    }
};

export default settingsReducer;
// Becuase rootReducer is the only one export file, can use export default
