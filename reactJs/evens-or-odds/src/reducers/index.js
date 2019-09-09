import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../action/types'

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
};

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
            return { ...state, gameStarted: action.gameStarted };
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
};

export default rootReducer;
// Becuase rootReducer is the only one export file, can use export default
