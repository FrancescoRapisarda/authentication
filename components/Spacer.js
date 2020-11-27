import React from 'react'
<<<<<<< HEAD
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

=======
import { View } from 'react-native'
import sizes from '../config/sizes'

// const Spacer = (props) => {
const Spacer = ({
  size = 0,
  horizontal,
  ...props
}) => {
  return (
    <View style={{
      width: horizontal ? size * sizes.unitSize : 0,
      height: horizontal ? 0 : size * sizes.unitSize
    }} { ...props } />
  )
}

// Spacer.defaultProps = {
//   size: 0
// }

>>>>>>> master
export default Spacer
