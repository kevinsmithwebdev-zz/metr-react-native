import React, { Component } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import Button from 'react-native-button'
import Message from './Message/Message'

const Controls = ({message, handleNextQuestion, handleResetScore, handleSetup, guessed}) => {
  return (
    <View>
      <Message message={message} />
      <View style={styles.buttonRow}>
        <View style={{ backgroundColor: 'green', padding: 5, margin: 5, borderRadius: 5 }}>
          <Button onPress={handleNextQuestion.bind(this)} style={{color: 'white', backgroundColor: 'green'}}>
            {(guessed)?'Next Question':'Skip'}
          </Button>
        </View>
        <View style={{ backgroundColor: 'orange', padding: 5, margin: 5, borderRadius: 5 }}>
          <Button onPress={handleResetScore.bind(this)} style={{color: 'white', backgroundColor: 'orange'}}>Reset</Button>
        </View>
        <View style={{ backgroundColor: 'gray', padding: 5, margin: 5, borderRadius: 5 }}>
          <Button onPress = {handleSetup.bind(this)} style = {{backgroundColor: 'gray', color: 'white'}}>Setup</Button>
        </View>
      </View>
    </View>
  )
}

export default Controls;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonContainer: {
    padding: 5
  },
  btnStyle: {
    padding: 5,
    margin: 5,
    borderRadius: 5
  }
})
