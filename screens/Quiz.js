import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, gray, lightgray, black } from '../utils/colors'
import Question from './Question'
import Answer from './Answer'
import Result from './Result'
import { addAnswer, addResult } from '../actions/quiz'

class Quiz extends Component {
    state = {
        questNo: 0,
        cardSide: 'question',
        yourAnswer: '',
        dispResult: false,
    }

    startAgain = () => {

        console.log('i am here')
        
        this.setState({
            questNo: 0,
            cardSide: 'question',
            yourAnswer: '',
            dispResult: false,
        })
    }

    static navigationOptions = ({ navigation }) => {
        const { deckname } = navigation.state.params
        return {
          title: `Playing Quiz: ${deckname}`
        }
    }

    flipCard = () => {
        const { dispatch } = this.props
        const { questNo, yourAnswer } = this.state
        dispatch(addAnswer(questNo, yourAnswer))
        this.setState({
            cardSide: 'answer'
        })
    }

    saveResult = (result) => {
        const { dispatch, qAmount } = this.props
        let questNr = this.state.questNo
        dispatch(addResult(questNr, result))
        questNr = questNr + 1
        let displayResult = false
        if (questNr === qAmount) {
            displayResult = true
        }
        this.setState({
            questNo: questNr,
            dispResult: displayResult,
            cardSide: 'question'
        })
    }    

    saveAnswer = (answer) => {
        this.setState({
            yourAnswer: answer
        })
    }

    render() {
        const { deck, qAmount, amountCorrect } = this.props
        const { questNo } = this.state

        return (
            <View style={{flex: 1}}>
                {this.state.dispResult ? (
                    <Result 
                        qAmount={qAmount} 
                        amountCorrect={amountCorrect} 
                        navigation={this.props.navigation}
                        startAgain={this.startAgain}
                        />
                ) : (
                    <View style={{flex: 1}}>
                        {this.state.cardSide === 'question' ? (
                            <Question 
                                question={deck.questions[questNo].question} 
                                questNo={questNo} 
                                qAmount={qAmount}
                                flipCard={this.flipCard}
                                saveAnswer={this.saveAnswer}
                                />
                        ) : (
                            <Answer 
                                questNo={questNo}
                                qAmount={qAmount}
                                question={deck.questions[questNo].question}
                                answer={deck.questions[questNo].answer}
                                yourAnswer={this.state.yourAnswer}
                                saveResult={this.saveResult}
                                />
                        )}
                    </View>
                )}
            </View>
        )
    }
}

function maptStateToProps({decks, currentDeck, quiz}) {
    const deck = decks[currentDeck.deckname]
    const qAmount = deck.questions.length
    const quizAnswers = quiz.questions
    const amountCorrect = quiz.amountCorrect
    const amountIncorrect = quiz.amountIncorrect
    return {
        qAmount,
        deck,
        deckname: currentDeck.deckname,
        quizAnswers,
        amountCorrect,
        amountIncorrect,
    }
}

export default connect(maptStateToProps)(Quiz)

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

