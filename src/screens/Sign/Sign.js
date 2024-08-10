import {Text, View } from 'react-native'
import React from 'react'
import  styles  from './styles'
import { AuthInput,AuthButton } from '../../components'

const Sign = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.header}>codetalks</Text>
      <View style={styles.auth_container}>
        <AuthInput 
        placeholder="e-postanızı giriniz..." 
        />
        <AuthInput 
        placeholder="şifrenizi giriniz..." 
        />
        <AuthInput 
        placeholder="şifrenizi tekrar giriniz..." 
        />
        <AuthButton  buttonName="Giriş Yap" />
        <AuthButton  buttonName="Geri" theme="secondary" />
      </View>
      
        
      
      
    </View>
  )
}

export default Sign