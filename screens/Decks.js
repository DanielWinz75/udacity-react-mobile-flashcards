import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, gray, lightgray } from '../utils/colors'
import { addNewDeck } from '../actions/decks'
import { _exampleCards } from '../utils/helpers'
import { setCurrentDeckName } from '../actions/currentDeck';

class Decks extends Component {

    componentDidMount() {
        if (process.env.NODE_ENV !== "production") {
            console.log('in dev mode')
            Object.keys(_exampleCards).map((deckname) => {
                this.props.dispatch(addNewDeck(deckname))
            })
        }
    }

    openDeck = (deckname) => {
        this.props.navigation.navigate('Deck', {deckname: deckname})
        this.props.dispatch(setCurrentDeckName(deckname))
    }

    render() {
        return(
            <View style={styles.container}>
                {Object.keys(this.props.decks).map((deckname) => (
                    <TouchableOpacity 
                        key={deckname} 
                        style={styles.row}
                        onPress={() => this.openDeck(deckname)}>
                        <View style={styles.box}>
                            <Text style={styles.boxcontent}>{deckname}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>            
        )
    }
}

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
        alignItems: 'flex-end',                
    },
    box: {
        width: 300,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: gray,  
        backgroundColor: lightgray,        
    },
    boxcontent: {
        margin: 10,
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

function mapStateToProps({decks}) {
 return {
     decks,
 }
}

export default connect(mapStateToProps)(Decks)