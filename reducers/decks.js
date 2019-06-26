import { INIT_DECKS, ADD_NEW_DECK } from '../actions/decks'

export default function decks(state = {}, action) {
    switch(action.type) {
        case INIT_DECKS:
            return {
                ...state,
            }
        case ADD_NEW_DECK: 
            return {
                ...state,
                [action.deckname]: {
                    title: action.decknam3,
                    questions: []
                }
            }
        default :
            return state
    }
}