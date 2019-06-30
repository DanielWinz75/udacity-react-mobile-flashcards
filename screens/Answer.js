import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { green, red, white, gray, lightgray } from '../utils/colors'

const Answer = ({questNo, qAmount, question, answer, yourAnswer, saveResult}) => {
    return (
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
                <View style={styles.infobox}>
                    <Text style={styles.boxcontent}>Original answer: "{answer}"</Text>
                </View>
            </View>            
            <View style={styles.row} >
                <View style={styles.infobox}>
                    <Text style={styles.boxcontent}>Your answer: "{yourAnswer}"</Text>
                </View>
            </View> 
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.greenBtn}
                        onPress={() => {saveResult('correct')}} >
                    <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.redBtn}
                        onPress={() => {saveResult('incorrect')}} >
                    <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
            </View>            
        </View>
    )
}

export default Answer

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
    greenBtn: {
        width: 280,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redBtn: {
        width: 280,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 2,        
        backgroundColor: red,
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
