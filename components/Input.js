import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({
    containerStyle,
    labelStyle,
    inputStyle
}) => {
    const [text, setText] = useState('')

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.label, labelStyle]}>Label</Text>
            <TextInput
                style={[styles.input, inputStyle]}
                value={text}
                onChangeText={value => setText(value)}
            // onChangeText={setText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderTopColor: '#000'
    },
    label: {
        position: 'absolute',
        top: 30,
        fontSize: 20,
        lineHeight: 20
    }
})

export default Input
