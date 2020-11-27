import React from 'react'
<<<<<<< HEAD
import {StyleSheet, View } from 'react-native'
import sizes from '../config/sizes'

const ScreenContainer = ({
    children,
    style,
    ...props }) => {
    return (
        <View style={[styles.container], style}>
            {...props}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: sizes.statusBarHeight
    }
=======
import { StyleSheet, View } from 'react-native'
import sizes from '../config/sizes'

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
    paddingTop: sizes.statusBarHeight
  }
>>>>>>> master
})

export default ScreenContainer
