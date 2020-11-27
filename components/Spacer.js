import React from 'react'
import {View} from 'react-native'
import sizes from '../config/sizes'

function Spacer({size = 0}) {
    return (
       <View style={{
           width: size * sizes.unitSize,
           height: size * sizes.unitSize,
       }}/>
    )
}

export default Spacer
