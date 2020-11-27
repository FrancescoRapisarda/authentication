import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'

const Input = forwardRef(({
  containerStyle,
  labelStyle,
  inputStyle,
  isPassword,
  label = 'Placeholder',
  ...props
}, ref) => {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      // toValue: focused ? 1 : 0,
      toValue: +(focused || (!focused && !!text)), // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [focused])

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View
        style={[
          styles.labelContainer,
          // 
          // {
          //   translateY: animation.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [0, -30]
          //   })
          // },
          {
            transform: [{
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -30]
              })
            }]
          }
        ]}
      >
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </Animated.View>
      <TextInput
        style={[
          styles.input,
          // focused ? styles.inputFocused : undefined,
          // {
          //   borderBottomColor: focused ? '#0f0' : '#000'
          // },
          inputStyle
        ]}
        value={text}
        onChangeText={value => setText(value)}
        // onChangeText={setText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={isPassword}
        ref={ref}
        { ...props }
      />

      {/* TRANSFORM ORIGIN https://github.com/sueLan/react-native-anchor-point */}
      <Animated.View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#0f0',
          position: 'absolute',
          bottom: 0,
          transform: [{
            scaleX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            })
          }]
        }}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  inputFocused: {
    borderBottomColor: '#71f0eb'
  },
  labelContainer: {
    position: 'absolute',
    top: 30
  },
  label: {
    fontSize: 20,
    lineHeight: 20
  }
})

export default Input
