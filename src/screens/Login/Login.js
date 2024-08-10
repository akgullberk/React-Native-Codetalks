import {Text, View } from 'react-native'
import React from 'react'
import  styles  from './styles'
import { AuthInput,AuthButton } from '../../components'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'


const initialFormValues={
  usermail: '',
  password: '',
}

const Login = ({navigation}) => {

  function handleSignUp({}) {
    navigation.navigate('Sign')
  }

  async function handleFormSubmit(formValues) {
    try{
      await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password)
    } catch (error){
      console.log(error)
    }
    
  }

  return (
    <View style={styles.container} >
      <Text style={styles.header}>codetalks</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values,handleChange,handleSubmit}) => (
          
          <View style={styles.auth_container}>
          <AuthInput 
          placeholder="e-postanızı giriniz..."
          value={values.usermail}
          onType={handleChange('usermail')}
          />
          <AuthInput 
          placeholder="şifrenizi giriniz..."
          value={values.password}
          onType={handleChange('password')}
          />
          <AuthButton  buttonName="Giriş Yap" onPress={handleSubmit} />
          <AuthButton  buttonName="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
        </View>
          
        )}
      </Formik>
    </View>
  )
}

export default Login