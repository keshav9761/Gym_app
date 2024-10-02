/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './src/Pages/Signup/SignupScreen';
import Login from './src/Pages/Login/Login';
import ForgetPwd from './src/Pages/ForgetPwd/ForgetPwd';
import OfferSscreen from './src/Pages/Offers/OfferSscreen';

function App(): React.JSX.Element {
  // console.log(">>>>>>>>>")
  // React.useEffect(() => {
  //   axios.get('https://reqres.in/api/users?page=2').then((result) =>
  //     console.log("useEff", result.data)
  //   )
  // }, [])
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPwd" component={ForgetPwd} />
        <Stack.Screen name="OfferSscreen" component={OfferSscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
