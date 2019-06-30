import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, gray, lightgray } from '../utils/colors'

const Result = ({qAmount, amountCorrect, navigation, startAgain }) => {

    const { deckname } = navigation.state.params

    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <View style={styles.box}>
                    <Text style={{fontSize: 22}}>Quiz Results</Text>
                </View>
            </View>            
            <View style={styles.row} >
                <View style={styles.infobox}>
                    <Text style={styles.boxcontent}>You answered {amountCorrect} out of {qAmount} questions correct.</Text>
                </View>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.row}
                        onPress={() => {navigation.navigate('Deck', {deckname: deckname})}} >
                    <View style={styles.whiteBtn}>
                        <Text style={styles.whiteBtnText}>Back to Deck</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>                
                <TouchableOpacity
                    style={styles.row}
                        onPress={startAgain} >
                    <View style={styles.blackBtn}>
                        <Text style={styles.blackBtnText}>Start Quiz again</Text>
                    </View>
                </TouchableOpacity>     
            </View>
          
        </View>
    )
}

export default Result

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
    box: {
        width: 320,
        textAlign: 'right',
    },
    infobox: {
        height: 120,
        width: 320,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: gray,  
        backgroundColor: lightgray, 
        margin: 10,
        fontSize: 18,               
    },    
    boxcontent: {
        margin: 10,
        fontSize: 18,
    },
    inputtext: {
        height: 120, 
        width: 320, 
        borderColor: gray,
        borderWidth: 1,
        fontSize: 18,
        maxHeight: 150,
    },     
    whiteBtn: {
        width: 280,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: white,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteBtnText: {
        fontSize: 22,
        textAlign: 'center',
    },
    blackBtn: {
        width: 280,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 2,        
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blackBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },         
  })


