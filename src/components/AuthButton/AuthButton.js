import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  styles  from './styles'

const AuthButton = ({buttonName,theme="primary",onPress}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
        <Text style={styles[theme].text}>{buttonName}</Text>
    </TouchableOpacity> 
    
  )
}

export default AuthButton