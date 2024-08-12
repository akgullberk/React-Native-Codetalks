import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login, Sign, Rooms} from "../screens";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const [userSession, setUserSession] = useState()

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign" component={Sign} />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            {!userSession ? (
                <Stack.Screen name="AuthStack" component={AuthStack} 
                options={{headerShown: false}} />
                
            ) :(
                <Stack.Screen name="Odalar" component={Rooms} 
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor:"#ffa040",
                    headerRight: () => (
                        <Icon name="logout" size={30} color="#ffa040" onPress={() => auth().signOut()} />
                    )
                }} />
            )
            }
            
        </Stack.Navigator >
        
        
    )
}

export default Navigation