import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

const Message = ({ message }) => (
  <Text style={styles.message} className="center">{message}</Text>
)

export default Message

const styles = StyleSheet.create({
  message: {
    fontSize: 22,
    textAlign: 'center'
  }
})
