import { SET_CURRENT_DECK_NAME } from '../actions/currentDeck'

export default function currentDeck(state = {}, action) {
    switch(action.type) {
        case SET_CURRENT_DECK_NAME:
            return {
                ...state,
                deckname: action.deckname
            }
        default: 
            return state
    }
}
