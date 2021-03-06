import React from 'react'
import { StyleSheet, View } from 'react-native'
import sizes from '../config/sizes'

// questo componente è l'equivalente di SafeAreaView
const ScreenContainer = ({
  children,
  style,
  ...props
}) => {
  return (
    <View
      style={[styles.container, style]}
      { ...props }
    >{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: sizes.statusBarHeight,
    paddingBottom: 30,
    paddingHorizontal: 30
  }
})

export default ScreenContainer
