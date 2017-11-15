import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Header from './Header/Header'
import Game from './Game/Game'

export default class App extends Component<{}> {
  render() {
    return (
      <View className="App">
        <Header />
        <Game />
      </View>
    )
  }
}
