import React from 'react'
import {View} from 'react-native'
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

export default Spacer
