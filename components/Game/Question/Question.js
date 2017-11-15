import React from 'react'
import Choices from './Choices/Choices'

import { UNITS } from '../../../common/constants'
import { StyleSheet, Text, View } from 'react-native'

const Question = ({ currentMeasurement, isImpToMet, answer, choices, btnStatus, handleGuess, score }) => {
  let scoreString = score.correct + "/" + score.attempted + " correct"
  if (score.attempted>0)
    scoreString+= " " + Math.round(100*score.correct/score.attempted) + "%"

  return (
    <View>
      <Text style={styles.subtitle}>
        Convert&nbsp;
        {UNITS[currentMeasurement][(!isImpToMet)?"metric":"imperial"].units}
        {' to '}
        {UNITS[currentMeasurement][(isImpToMet)?"metric":"imperial"].units}
      </Text>
      <Text style={styles.score}>
        {scoreString}
      </Text>

      <Text style={styles.question} className="center">
        How many&nbsp;
        {UNITS[currentMeasurement][(isImpToMet)?"metric":"imperial"].units}
        &nbsp;is&nbsp;
        {answer.questionNum}&nbsp;
        {UNITS[currentMeasurement][(!isImpToMet)?"metric":"imperial"].abbreviation}
      </Text>

      <Choices choices={choices}
        currentMeasurement={currentMeasurement}
        isImpToMet={isImpToMet}
        answer={answer}
        btnStatus={btnStatus}
        passGuess={handleGuess}
      />
    </View>
  )
}

export default Question

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 28,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 5
  },
  score: {
    fontSize: 28,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 20
  },
  question: {
    fontSize: 26,
    color: 'blue',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
})
















// import React, { Component } from 'react'
//
// import { Text } from 'react-native'
//
// class Question extends Component {
//
//   render() {
//     return (
//       <Text>
//         Question
//       </Text>
//     )
//   }
// }
//
// export default Question
