
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeBottom from './homenested/HomeBottom';
import HomeBottom2 from './homenested/ViewRemit';
import { Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Remitter from './homenested/Remitter';
import ViewRemit from './homenested/ViewRemit';

const HomeStack = createNativeStackNavigator();
const Home = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen options={
          {
            headerTintColor: 'white', // Set the text color to white
            headerStyle: {
              backgroundColor: '#5521C2', // Set your desired color here
            },
            headerRight: () => (
              <Pressable
              onPress={()=>alert("notification screen")}
              paddingRight={4}
              >
                <Ionicons
                name="notifications"
                size={24}
                color="white"
                />
              </Pressable>)
          }
        }  name="Home" component={HomeBottom} />
        <HomeStack.Screen options={{ headerShown: false }}  name="remitter" component={Remitter} />
        <HomeStack.Screen options={{ headerShown: false }}  name="viewremit" component={ViewRemit} />
    </HomeStack.Navigator>
  
  )
}

export default Home

