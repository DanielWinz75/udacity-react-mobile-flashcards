import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, gray } from '../utils/colors'
import { addNewQuestion } from '../actions/decks'

class NewCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    saveQuestion = () => {
        const { question, answer } = this.state
        this.props.dispatch(addNewQuestion(this.props.deckname, question, answer))
        this.props.navigation.goBack()
    }

    static navigationOptions = ({ navigation }) => {
        const { deckname } = navigation.state.params
        return {
          title: `Add card to Quiz: ${deckname}`
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput
                        style={styles.inputtext}
                        multiline
                        onChangeText={(text) => this.setState({question: text})}
                        placeholder='Question'
                        />
                </View>                 
                <View style={styles.row}>
                    <TextInput
                        style={styles.inputtext}
                        multiline
                        onChangeText={(text) => this.setState({answer: text})}
                        placeholder='Answer'
                        />
                </View>     
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.whiteBtn}
                            onPress={this.saveQuestion} >
                        <Text style={styles.whiteBtnText}>Save Question</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }
}

function mapStateToProps({currentDeck}) {
    return {
        deckname: currentDeck.deckname
    }
}

export default connect(mapStateToProps)(NewCard)

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