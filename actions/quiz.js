export const INITIALIZE_QUIZ = 'INITIALIZE_QUIZ'
export const ADD_ANSWER = 'ADD_ANSWER'
export const UPDATE_RESULT = 'UPDATE_RESULT'

export function initializeQuiz(deckname, qAmount, questions) {
    return {
        type: INITIALIZE_QUIZ,
        deckname,
        qAmount,
        questions,
        amountCorrect: 0,
        amountIncorrect: 0,
    }
}

export function addAnswer(questNo, yourAnswer) {
    return {
        type: ADD_ANSWER,
        yourAnswer,
        questNo,
    }
}

export function updateResult(amountCorrect, amountIncorrect, result, questNo) {
    return {
        type: UPDATE_RESULT,
        amountCorrect,
        amountIncorrect,
        result,
        questNo,
    }
}

export function addResult(questNo, result) {
    return (dispatch, getState) => {
        const { quiz } = getState()
        let amountCorrect = quiz.amountCorrect
        let amountIncorrect = quiz.amountIncorrect

        if( result === 'correct') {
            amountCorrect = amountCorrect + 1
        } else {
            amountIncorrect = amountIncorrect + 1
        }
        dispatch(updateResult(amountCorrect, amountIncorrect, result, questNo))
    }
}
