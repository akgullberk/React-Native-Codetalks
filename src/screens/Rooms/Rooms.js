import {FlatList, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { RoomItem,FloatingButton,InputModal } from '../../components';
import styles from './styles'

const Rooms = ({navigation}) => {
  const [roomNameList, setRoomNameList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const handleToggle = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={[1,2]} 
      renderItem={({item}) => <RoomItem roomName={item}/>} />
      <FloatingButton onPress={handleToggle}/>
      <InputModal 
        visible={modalVisible} 
        onClose={handleToggle} 
        
      />
    </View>
  )
}

export default Rooms