import { ADD_NEW_DECK, ADD_NEW_QUESTION } from '../actions/decks'

export default function decks(state = {}, action) {
    switch(action.type) {
        case ADD_NEW_DECK: 
            return {
                ...state,
                [action.deckname]: {
                    title: action.deckname,
                    questions: []
                }
            }
        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.deckname]: {
                    title: action.deckname,
                    questions: [...state[action.deckname].questions, { question: action.question, answer: action.answer }]
                }
            }
        default :
            return state
    }
}