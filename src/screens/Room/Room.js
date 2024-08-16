import {Text, View } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import styles  from './styles'
import { FloatingButton, InputModal } from '../../components';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

const Room = ({ route, navigation }) => {
    const { roomName } = route.params;
    const [modalVisible, setModalVisible] = useState(false)
    const [messageList, setMessageList] = useState([])

    useLayoutEffect(() => {
        // Ekran başlığını dinamik olarak ayarlayın
        navigation.setOptions({
          title: roomName,
        });
      }, [navigation, roomName]); // 'roomName' değiştiğinde yeniden ayarlama

      const handleToggle = () => {
        setModalVisible(!modalVisible)
      }

      function sendContent(content) {
        const userMail = auth().currentUser.email
          const contentObject = {
            text: content,
            username: userMail.split("@")[0],
            date: new Date().toISOString(),            
          };
    
          database().ref('messages/').push(contentObject)
      }

      const handleSendContent = (content) => {
        handleToggle()
        sendContent(content)
      }


  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>{roomName} odası kuruldu!</Text>
      </View>
      
      <FloatingButton onPress={handleToggle} />
      <InputModal 
        visible={modalVisible} 
        onClose={handleToggle} 
        onSend={handleSendContent}
        
      />
    </View>
  )
}

export default Room