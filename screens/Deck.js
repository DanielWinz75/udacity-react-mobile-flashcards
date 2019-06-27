import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, gray, lightgray, orange } from '../utils/colors'
import Quiz from '../components/Quiz'

class Deck extends Component {

    state = {
        runQuiz: false
    }

    static navigationOptions = ({ navigation }) => {
        const { deckname } = navigation.state.params
        return {
          title: `Quiz: ${deckname}`
        }
    }

    startQuiz = () => {
        // this.props.navigation.navigate('Quiz', {deckname: `Your are playing ${this.state.deckname}`})
        this.setState({runQuiz: true})
    }

    newCard = () => {
        this.props.navigation.navigate('NewCard', {deckname: this.props.deckname})
    }

    render() {

        return (
            <View style={{flex: 1}}>
            {
                this.state.runQuiz === false ? (
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.row}
                                onPress={this.startQuiz} >
                            <View style={styles.box}>
                                <Text style={styles.boxcontent}>Start Quiz</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                                onPress={this.newCard} >
                            <View style={styles.box}>
                                <Text style={styles.boxcontent}>New Card</Text>
                            </View>
                        </TouchableOpacity>
                    </View> 
                ) : (

                    <Quiz />

                )
            }
            </View>
        )
    }
}

function mapStateToProps({currentDeck, decks}) {
    return {
        deckname: currentDeck.deckname,
        questions: decks[currentDeck.deckname].questions
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
        borderWidth: 2,
        borderRadius: 2,
        borderColor: gray,  
        backgroundColor: lightgray,        
    },
    orange: {
        backgroundColor: orange,
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