import {Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import styles  from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus" size={useWindowDimensions().width*0.08} color="white" />
    </TouchableOpacity>
  )
}

export default FloatingButton