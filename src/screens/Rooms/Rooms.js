import {FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database'
import { RoomItem,FloatingButton,InputModal } from '../../components';
import styles from './styles'

const Rooms = ({navigation}) => {
  const [roomNameList, setRoomNameList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    database()
    .ref('rooms/')
    .on("value",snapshot =>{
      const contentData = snapshot.val();

      const parsedData = parseContentData(contentData || {})
      setRoomNameList(parsedData)
    });
  }, [])

  const parseContentData = (data) => {
    return Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key]
      }
    })
  }

  const handleToggle = () => {
    setModalVisible(!modalVisible)
  }

  const handleSendContent = (content) => {
    handleToggle()
    sendContent(content)
  }



  function sendContent(content) {

      const contentObject = {
        text: content,
      };

      database().ref('rooms/').push(contentObject)
  }

  const handleOnSend = (item) => {
    database()
    .ref(`rooms/${item.id}/`)
    navigation.navigate('Room', {roomName: item.text, roomId: item.id})
  }

  const renderContent = ({item}) => 
    <RoomItem room={item}
    onPress={() => handleOnSend(item)}
    />


  return (
    <View style={styles.container}>
      <FlatList 
      data={roomNameList} 
      renderItem={renderContent}
      numColumns={2}
      keyExtractor={item => item.id}
      />
      
      <FloatingButton onPress={handleToggle}/>
      <InputModal 
        visible={modalVisible} 
        onClose={handleToggle} 
        onSend={handleSendContent}
        
      />
    </View>
  )
}

export default Rooms