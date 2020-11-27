import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Input from './components/Input'
import Spacer from './components/Spacer'
import Constants from 'expo-constants'
import ScreenContainer from './components/ScreenContainer'
import { layoutStyles } from './styles/Layout'

const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <ScreenContainer style={layoutStyles.container}>
      <StatusBar backgroundColor="transparent" />

      <Spacer size={10} />
      <Input />
      {/* <Spacer size={4} />
      <Input /> */}
    </ScreenContainer>
    // <View style={styles.container}>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
