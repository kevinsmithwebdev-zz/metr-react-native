import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FOOTER } from '../../../../common/constants'

const Footer = () => {

  const renderFooterItem = (foot, idx) => <Text key={idx} style={styles.item}>{foot}</Text>

  return (
    <View style={styles.container}>
      {FOOTER.map((foot, idx) => renderFooterItem(foot, idx))}
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
