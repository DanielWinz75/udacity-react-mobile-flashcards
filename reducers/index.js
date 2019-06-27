import decks from './decks'
import currentDeck from './currentDeck'
import { combineReducers } from 'redux'

export default () => combineReducers({
  decks,
  currentDeck,
})