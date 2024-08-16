import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {formatDistance,parseISO} from 'date-fns'
import { styles } from './styles'


const MessageCard = ({message}) => {
    const formattedDate = formatDistance(parseISO(message.date), new Date(),
     {addSuffix: true
     })

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.title}>{message.text}</Text>
    </View>
  )
}

export default MessageCard