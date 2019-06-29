export const INITIALIZE_QUIZ = 'INITIALIZE_QUIZ'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_RESULT = 'ADD_RESULT'

export function initializeQuiz(deckname, qAmount, questions) {
    return {
        type: INITIALIZE_QUIZ,
        deckname,
        qAmount,
        questions,
    }
}

export function addAnswer(questNo, yourAnswer) {
    return {
        type: ADD_ANSWER,
        yourAnswer,
        questNo,
    }
}

export function addResult(questNo, result) {
    return {
        type: ADD_RESULT,
        questNo,
        result,
    }
}
