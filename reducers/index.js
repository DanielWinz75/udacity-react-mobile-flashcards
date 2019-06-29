import decks from './decks'
import currentDeck from './currentDeck'
import quiz from './quiz'
import { combineReducers } from 'redux'

export default () => combineReducers({
  decks,
  currentDeck,
  quiz,
})