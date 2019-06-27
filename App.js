import React from 'react'
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import Decks from './screens/Decks'
import Deck from './screens/Deck'
import NewCard from './screens/NewCard'
import decks from './reducers/decks'
import thunk from 'redux-thunk'
import combineReducers from './reducers'
import logger from './middleware/logger'
import NewDeck from './screens/NewDeck'
import { purple, white } from './utils/colors'

const Tabs = createMaterialTopTabNavigator({
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
      },
    },
  },{
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }  
)

let Navigation = createAppContainer(createStackNavigator({
    Decks: {
      screen: Tabs,
      navigationOptions: {
        title: 'Flashcard App',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      },
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }      
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }      
    }    
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
        <Navigation />
      </Provider>
    )
  }
}
