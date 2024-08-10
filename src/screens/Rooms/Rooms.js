import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const Rooms = ({navigation}) => {
  return (
    <View>
      <Button title='Rooms' onPress={() => auth().signOut()} />
    </View>
  )
}

export default Rooms

const styles = StyleSheet.create({})