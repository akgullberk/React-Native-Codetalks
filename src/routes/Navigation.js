import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login, Sign, Rooms} from "../screens";
import auth from '@react-native-firebase/auth';

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
                <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}} />
                
            ) :(
                <Stack.Screen name="Rooms" component={Rooms} options={{headerShown: false}} />
            )
            }
            
        </Stack.Navigator >
        
        
    )
}

export default Navigation