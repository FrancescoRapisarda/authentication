import React from 'react'
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
})

export default ScreenContainer
