import {Text, View } from 'react-native'
import React from 'react'
import styles  from './styles'

const RoomItem = ({roomName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.room_text}>{roomName}</Text>
      </View>
    </View>
  )
}

export default RoomItem