import React from 'react'

import { StyleSheet, Text } from 'react-native'

const Header = () => <Text style={styles.title}>Metric and Imperial Test</Text>

export default Header

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#700215',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 50
  }
})
