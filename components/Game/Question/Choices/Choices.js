import React from 'react';

import { StyleSheet, Text, View } from 'react-native'

import Button from 'react-native-button'

import { UNITS } from '../../../../common/constants'

const Choices = ({ currentMeasurement, isImpToMet, btnStatus, choices, passGuess }) => {

  const renderChoiceButton = (choice, i) => {
    let btnTitle = choice + ' ' +
          UNITS[currentMeasurement][(isImpToMet)?"metric":"imperial"].abbreviation
    let backgroundColor
    let disabled = (btnStatus.correctIdx!==null)

    if (disabled) {
      if (i===btnStatus.correctIdx)
        backgroundColor = 'green' // correct answer, disabled
      else if (i===btnStatus.wrongIdx)
        backgroundColor = 'red' // wrong answer, disabled
      else
        backgroundColor = '#bbb' // other answer, disabled
    } else
      backgroundColor = 'blue' // default when asking question

    let btnStyle = { backgroundColor, padding: 5, margin: 5, borderRadius: 5 }

    return (
      <View key={i} style={ btnStyle }>
        <Button
          style={{ backgroundColor, color: 'white' }}
          onPress={passGuess.bind(this, i)}
          disabled={disabled}
          styleDisabled={{ backgroundColor }}
        >
          {btnTitle}
        </Button>
      </View>
    )
  }

  return (
    <View style={styles.buttonRow}>
      {choices.map((choice, i) => renderChoiceButton(choice, i)) }
    </View>
  )
}

export default Choices

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonContainer: {
    padding: 5
  }
})
