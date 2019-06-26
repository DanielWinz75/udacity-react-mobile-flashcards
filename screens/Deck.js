import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckname } = navigation.state.params
        return {
          title: deckname
        }
    }

    render() {
        return (
            <View>
                <Text>deck</Text>
            </View>
        )
    }
}

export default connect()(Deck)