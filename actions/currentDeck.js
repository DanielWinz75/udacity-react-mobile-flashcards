export const SET_CURRENT_DECK_NAME = 'SET_CURRENT_DECK_NAME'

export function setCurrentDeckName(deckname) {
    return {
        type: SET_CURRENT_DECK_NAME,
        deckname: deckname
    }
} 