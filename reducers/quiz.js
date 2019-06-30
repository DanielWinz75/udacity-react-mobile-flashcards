import { ADD_ANSWER, INITIALIZE_QUIZ, UPDATE_RESULT } from '../actions/quiz'

export default function quiz(state = {}, action) {
    switch(action.type) {
        case INITIALIZE_QUIZ:
            return {
                ...state,
                deckname: action.deckname,
                qAmount: action.qAmount,
                questions: action.questions,
                amountCorrect: action.amountCorrect,
                amountIncorrect: action.amountIncorrect,
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
        case UPDATE_RESULT: 
            return {
                ...state,
                questions: {
                    ...state['questions'],
                    [action.questNo]: {
                        ...state['questions'][action.questNo],
                        result: action.result,
                    }
                },
                amountCorrect: action.amountCorrect,
                amountIncorrect: action.amountIncorrect,
            }        
        default:
            return state
    }
}