import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Login from './screens/Login';

import Register from './screens/Register';
import Verify from './screens/Verify';

import ForgotPassword from './screens/ForgotPassword';
import Bottomtabs from './screens/Bottomtabs'


const Drawer = createDrawerNavigator();
const Drawerscreen = () => {
    
  return (
    <Drawer.Navigator >
    <Drawer.Screen options={{ headerShown: false }} name="logins" component={Login} />
    
    <Drawer.Screen options={{ headerShown: false }} name="registers" component={Register} />

    {/* <Drawer.Screen options={{ headerShown: false }} name="remitter" component={Remitter} /> */}
    <Drawer.Screen options={{ headerShown: false }} name="bottomtabs" component={Bottomtabs} />
    <Drawer.Screen options={{ headerShown: false }} name="verify" component={Verify} />
    <Drawer.Screen options={{ headerShown: false }} name="forgortpd" component={ForgotPassword} />
    </Drawer.Navigator>
  )
}

export default Drawerscreen

