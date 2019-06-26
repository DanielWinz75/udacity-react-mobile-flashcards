export const INIT_DECKS = 'INIT_DECKS'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'

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