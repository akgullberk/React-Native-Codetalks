import {Text, TextInput, View } from 'react-native'
import React from 'react'
import  styles  from './styles'

const AuthInput = ({placeholder,value,onType}) => {
  return (
    <View>
      <TextInput 
      style={styles.input} 
      placeholder={placeholder}
      placeholderTextColor="white"
      value={value}
      onChangeText={onType}
      />
    </View>
  )
}

export default AuthInput
