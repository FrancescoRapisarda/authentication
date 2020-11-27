import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({style}) => {

    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <Text tyle={styles.label}>Label</Text>
            <TextInput
                tyle={styles.input}
                value={text}
                onChangeText={value => setText(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    input: {
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },
    label: {
        position: 'absolute',
        top: 0,
        fontSize: 20,
        lineHeight: 20,
    },
})

export default Input