import {Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import styles  from './styles'

const Room = ({ route, navigation }) => {
    const { roomName } = route.params;

    useLayoutEffect(() => {
        // Ekran başlığını dinamik olarak ayarlayın
        navigation.setOptions({
          title: roomName,
        });
      }, [navigation, roomName]); // 'roomName' değiştiğinde yeniden ayarlama


  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>{roomName} odası kuruldu!</Text>
      </View>
    </View>
  )
}

export default Room