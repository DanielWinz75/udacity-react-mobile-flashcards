import { INIT_DECKS } from '../actions/decks'

export default function decks(state = {}, action) {
    switch(action.type) {
        case INIT_DECKS : 
            return {
                ...state,
            }
        default :
            return state
    }
}