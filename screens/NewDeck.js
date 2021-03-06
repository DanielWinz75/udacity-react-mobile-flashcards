import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, gray } from '../utils/colors'
import { _exampleCards } from '../utils/helpers'
import { addNewDeck } from '../actions/decks'
import { setCurrentDeckName } from '../actions/currentDeck'

class NewDeck extends Component {

    state = {
        deckname: ''
    }

    addDeck = () => {
        const deckname = this.state.deckname
        this.props.dispatch(addNewDeck(deckname))
        this.props.dispatch(setCurrentDeckName(deckname))        
        this.props.navigation.navigate('Deck', {deckname: deckname})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput
                        style={styles.inputtext}
                        onChangeText={(text) => this.setState({deckname: text})}
                        placeholder='Deck name'
                        />
                </View>     
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.AndroidBtn}
                            onPress={this.addDeck} >
                        <Text style={styles.btnText}>Save Deck</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }
}

export default connect()(NewDeck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',        
    },
    inputtext: {
        height: 30, 
        width: 250, 
        borderColor: gray, 
        borderWidth: 1,
        fontSize: 18,
    },
    AndroidBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },    
  })