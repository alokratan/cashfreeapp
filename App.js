import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NativeBaseProvider } from 'native-base';

import FormikFormUsingHookExample from './screens/Formiklog';
import Drawerscreen from './Drawerscreen';
import Orders from './screens/bottomtabs/homenested/Orders';
import Docpic from './screens/bottomtabs/homenested/Docpic';


const Stack = createStackNavigator();
const App = () => {
  return (
<NativeBaseProvider>
    <NavigationContainer>
    {/* <Docpic/> */}
      {/* <Orders/> */}
      <Drawerscreen/>
      {/* <FormikFormUsingHookExample/> */}
      {/* <Recipient/> */}
    </NavigationContainer>
</NativeBaseProvider>
  )
};
export default App;
