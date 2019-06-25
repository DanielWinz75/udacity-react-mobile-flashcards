import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'
import { _exampleCards } from '../utils/helpers'
import { setWorldAlignment } from 'expo/build/AR';

function Btn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.AndroidBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>New Deck</Text>
      </TouchableOpacity>
    )
}

class NewDeck extends Component {

    newDeck = () => {
        // add the deck
        console.log('new deck')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.box}>Text</Text>
                    <Text style={styles.box}>Text</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.box}>Text</Text>
                </View>     
                <View style={styles.row}>
                    <Btn onPress={this.newDeck} />
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
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    box: {
        width: 100,
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
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