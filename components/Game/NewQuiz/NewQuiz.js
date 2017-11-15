import React, { Component } from 'react'
import Footer from './Footer/Footer'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons'
import { DIFFICULTIES, UNITS, RADIO } from '../../../common/constants'


class NewQuiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMeasurement: this.props.currentMeasurement,
      isImpToMet: this.props.isImpToMet,
      isImpToMetIdx: this.props.isImpToMet?0:1,
      difficulty: this.props.difficulty
    }
  }

  render() {

    function setSelectedDirection(selectedOption, i) {
      this.setState({
        isImpToMet: selectedOption.value,
        isImpToMetIdx: i
      })
    }

    function setSelectedDifficulty(selectedOption, i) {
      this.setState({
        difficulty: i
      })
    }

    function setSelectedUnits(selectedOption, i) {
      this.setState({
        currentMeasurement: i
      })
    }

    const directionOptions = [
      { label: 'Imperial to Metric', value: true },
      { label: 'Metric to Imperial', value: false }
    ]

    const unitOptions = (unit) =>
      ((this.state.isImpToMet) ? unit.imperial.units : unit.metric.units) +
      ' to ' +
      ((this.state.isImpToMet) ? unit.metric.units : unit.imperial.units)

    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.isNewQuiz}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <Text style={styles.title}>
            Setup New Quiz
          </Text>

          { /* Selection for conversion direction */ }

          <View style={styles.selectionGroup}>
            <Text style={styles.selectionGroupTitle}>Conversion Direction</Text>
            <SegmentedControls
              tint={RADIO.TINT}
              selectedTint= {RADIO.SELECTED_TINT}
              backTint= {RADIO.BACK_TINT}
              options={ directionOptions }
              allowFontScaling={ false } // default: true
              onSelection={ setSelectedDirection.bind(this) }
              selectedIndex={ this.state.isImpToMetIdx }
              optionStyle={ styles.options }
              extractText={ (option) => option.label }
              containerStyle={ styles.container }
            />
          </View>

          { /* Selection for difficulty */ }

          <View style={styles.selectionGroup}>
            <Text style={styles.selectionGroupTitle}>Difficulty</Text>
            <SegmentedControls
              tint={RADIO.TINT}
              selectedTint= {RADIO.SELECTED_TINT}
              backTint= {RADIO.BACK_TINT}
              options={ DIFFICULTIES }
              allowFontScaling={ false } // default: true
              onSelection={ setSelectedDifficulty.bind(this) }
              selectedIndex={ this.state.difficulty }
              optionStyle={ styles.options }
              containerStyle={ styles.container }
            />
          </View>

          { /* Selection for measurement */ }

          <View style={styles.selectionGroup}>
            <Text style={styles.selectionGroupTitle}>Measurement</Text>
            <SegmentedControls
              direction={'column'}
              tint={RADIO.TINT}
              selectedTint= {RADIO.SELECTED_TINT}
              backTint= {RADIO.BACK_TINT}
              options={ UNITS.map((unit) => unitOptions(unit)) }
              allowFontScaling={ false } // default: true
              onSelection={ setSelectedUnits.bind(this) }
              selectedIndex={ this.state.currentMeasurement }
              optionStyle={ styles.options }
              containerStyle={ styles.container }
            />
          </View>

          <View style={styles.buttonRow}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this.onSave.bind(this)}
                title="Save"
                color="green"
                style={styles.button}
                accessibilityLabel="save options"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this.onCancel.bind(this)}
                title="Cancel"
                color="red"
                accessibilityLabel="cancel setup"
              />
            </View>
          </View>

          <Footer />
        </Modal>
      </View>
    );
  }

//*************

  onSave() {
    let newState = this.state
    delete newState.isImpToMetIdx
    this.props.handleSave(newState)
  }

  onCancel() {
    this.props.handleCancel()
  }
}

export default NewQuiz

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: 'black'
  },
  selectionGroupTitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5
  },
  selectionGroup: {
    padding: 5
  },
  options: {
    fontSize: 16
  },
  containter: {
    marginLeft: 10,
    marginRight: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 5
  }

})
