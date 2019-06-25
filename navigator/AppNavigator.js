import { createAppContainer, createStackNavigator } from 'react-navigation'
import { purple, white } from '../utils/colors'
import { Decks } from '../screens/Decks'

const MainNavigator = createStackNavigator(
    {
      Decks: {
        screen: Decks,
        navigationOptions: {
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple,
          }
        }
      }
    },
    {
      initialRouteName: 'App'
    }
)

const AppContainer = createAppContainer(MainNavigator)
export default AppContainer