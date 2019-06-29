import { ADD_ANSWER, INITIALIZE_QUIZ, ADD_RESULT } from '../actions/quiz'

export default function quiz(state = {}, action) {
    switch(action.type) {
        case INITIALIZE_QUIZ:
            return {
                ...state,
                deckname: action.deckname,
                qAmount: action.qAmount,
                questions: action.questions,
            }
        case ADD_ANSWER:
            return {
                ...state,
                questions: {
                    ...state['questions'],
                    [action.questNo]: {
                        ...state['questions'][action.questNo],
                        yourAnswer: action.yourAnswer
                    }
                }
            }
        case ADD_RESULT: 
            return {
                ...state,
                questions: {
                    ...state['questions'],
                    [action.questNo]: {
                        ...state['questions'][action.questNo],
                        result: action.result
                    }
                }
            }        
        default:
            return state
    }
}