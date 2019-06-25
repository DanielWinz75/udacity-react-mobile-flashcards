import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import NewDeck from './NewDeck'

class Decks extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <NewDeck />
            </View>
        )
    }
}

function mapStateToProps({decks}) {
 return {
     decks,
 }
}

export default connect(mapStateToProps)(Decks)