import React from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {white, gray, lightgray } from '../utils/colors'

const Question = ({questNo, qAmount, question, flipCard, saveAnswer}) => { 
    return(
        <View style={styles.container}>
            <View style={styles.row} >
                <View style={styles.box}>
                    <Text style={{fontSize: 22}}>Question {questNo+1} of {qAmount}</Text>
                </View>
            </View>            
            <View style={styles.row} >
                <View style={styles.infobox}>
                    <Text style={styles.boxcontent}>{question}</Text>
                </View>
            </View>
            <View style={styles.row} >
                <TextInput
                    style={styles.inputtext}
                    multiline                    
                    onChangeText={ (text) => {saveAnswer(text)} }
                    placeholder='Answer'
                    />
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.whiteBtn}
                        onPress={flipCard} >
                    <Text style={styles.whiteBtnText}>Flip card</Text>
                </TouchableOpacity>
            </View>                           
        </View>
    )
}

export default Question

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
  })

