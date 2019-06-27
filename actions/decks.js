export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export function initDecks() {
    return {
        type: INIT_DECKS,
    }
}

export function addNewDeck(deckname) {
    return {
        type: ADD_NEW_DECK,
        deckname: deckname
    }
}

export function addNewQuestion(deckname, question, answer) {
    return {
        type: ADD_NEW_QUESTION,
        deckname,
        question,
        answer,
    }
}