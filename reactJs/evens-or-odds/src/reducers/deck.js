import { DECK, DECK_DRAW } from '../action/types';
import fetchStates from './fetchStates';

const DEFAULT_DECK = { deck_id: '', remaining: 0, fetchState: '', message: '', cards: []};

const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, deck_id, cards;

    // Clean up "if" statements
    switch(action.type) {
        case DECK.FETCH_SUCCESS:
            ({ remaining, deck_id } = action);
            return { ...state, remaining, deck_id, fetchState: fetchStates.success };
        case DECK.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchStates.error };
        case DECK_DRAW.FETCH_SUCCESS:
            ({ cards, remaining } = action);
            return { ...state, cards, remaining, fetchState: fetchStates.success };
        case DECK_DRAW.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchStates.error };
        default:
            return state;
    }
};

export default deckReducer;
// Becuase rootReducer is the only one export file, can use export default
