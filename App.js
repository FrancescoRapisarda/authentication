import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Input from './components/Input'
import Spacer from './components/Spacer'
import ScreenContainer from './components/ScreenContainer'
import { layoutStyles } from './styles/Layout'

export default function App() {
  const passwordInput = useRef()

  return (
    <ScreenContainer style={layoutStyles.container}>
      <StatusBar backgroundColor="transparent" />

      <ScrollView
        keyboardShouldPersistTaps="handled" // blur dell'input in focus
      >
        <Spacer size={10} />
        <Input
          label="Username"
          onSubmitEditing={() => {
            passwordInput.current.focus()
          }}
          blurOnSubmit={false}
        />
        <Spacer size={4} />
        <Input label="Password" isPassword ref={passwordInput} />
      </ScrollView>

    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
