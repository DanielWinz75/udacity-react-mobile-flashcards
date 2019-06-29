import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, gray, lightgray, black } from '../utils/colors'
import { initializeQuiz } from '../actions/quiz'

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckname } = navigation.state.params
        return {
          title: `Deck: ${deckname}`
        }
    }

    // reducer function
    getQuestionsObject(acc, element, index) {
        return {
            ...acc,
            [index]: element
        }
    }

    startQuiz = () => {
        const {navigation, deckname, dispatch, qlength, questions} = this.props
        const questionsObj = questions.reduce(this.getQuestionsObject, 0)
        dispatch(initializeQuiz(deckname, qlength, questionsObj))
        navigation.navigate('Quiz', {deckname: deckname, questNo: 0})
    }

    newCard = () => {
        this.props.navigation.navigate('NewCard', {deckname: this.props.deckname})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.qlength === 0 ? (
                    <View style={styles.container}>                    
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Text style={styles.infobox}>There aren't any cards on this deck yet. Add a card with question and answer to start a quiz.</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.row}
                                onPress={this.newCard} >
                            <View style={styles.blackBtn}>
                                <Text style={styles.blackBtnText}>New Card</Text>
                            </View>
                        </TouchableOpacity>      
                    </View>                  
                    ) : (
                    <View style={styles.container}>                        
                        <View style={styles.row}>
                            <Text style={styles.infobox}>The deck contains {this.props.qlength === 1 ? <Text>1 card</Text> : <Text>{this.props.qlength} cards</Text>} </Text>
                        </View>                        
                        <TouchableOpacity
                            style={styles.row}
                                onPress={this.startQuiz} >
                            <View style={styles.whiteBtn}>
                                <Text style={styles.whiteBtnText}>Start Quiz</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                                onPress={this.newCard} >
                            <View style={styles.blackBtn}>
                                <Text style={styles.blackBtnText}>New Card</Text>
                            </View>
                        </TouchableOpacity>                          
                    </View>
                )}
            </View> 
        )
    }
}

function mapStateToProps({currentDeck, decks}) {
    let qlength = 0
    let questions = []
    if( decks[currentDeck.deckname].questions ) {
        questions = decks[currentDeck.deckname].questions
        qlength = questions.length
    }
    return {
        deckname: currentDeck.deckname,
        qlength,
        questions,
    }
}

export default connect(mapStateToProps)(Deck)

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
        width: 300,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: gray,  
        backgroundColor: lightgray,        
    },
    infobox: {
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