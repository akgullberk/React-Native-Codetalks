import {Text, View } from 'react-native'
import React from 'react'
import  styles  from './styles'
import { AuthInput,AuthButton } from '../../components'
import auth from '@react-native-firebase/auth'
import { Formik } from 'formik'


const initialFormValues={
    usermail: '',
    password: '',
    repassword: '',
  }

const Sign = ({navigation}) => {

    function handleLogin() {
        navigation.goBack()
      }

      async function handleFormSubmit(formValues) {
        if(formValues.password != formValues.repassword){
            console.log("sifreler uyusmuyor")
        }
        else{
            try{
                await auth().createUserWithEmailAndPassword(formValues.usermail,formValues.repassword)
                navigation.navigate('Login')
            } catch (error){
                console.log(error)
            }
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
            <AuthInput 
            placeholder="şifrenizi tekrar giriniz..."
            value={values.repassword}
            onType={handleChange('repassword')} 
            />
            <AuthButton  buttonName=" Kayıt Ol " onPress={handleSubmit} />
            <AuthButton  buttonName="Geri" theme="secondary" onPress={handleLogin} />
          </View>
        )}
        </Formik>
      
    </View>
  )
}

export default Sign