import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles  from './styles'

const RoomItem = ({room,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inner_container}>
        <Text style={styles.room_text}>{room.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RoomItem