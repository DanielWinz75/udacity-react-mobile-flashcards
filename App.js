import React from 'react'
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import Decks from './screens/Decks'
import decks from './reducers/decks'
import thunk from 'redux-thunk'
import combineReducers from './reducers'
import logger from './middleware/logger'

let Navigation = createAppContainer(createStackNavigator({
    Decks: Decks,
}))

const store = createStore(
    combineReducers(decks),
    applyMiddleware(
        logger,
        thunk,
    ),
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Navigation /> */}
        <Decks />
      </Provider>
    )
  }
}
