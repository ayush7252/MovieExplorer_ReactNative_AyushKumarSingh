import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import SplashScreen from '../Screens/SplashScreen'
import AuthrizationScreen from '../Screens/AuthrizationScreen'
import FooterNavigation from './FooterNavigation'

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Auth" component={AuthrizationScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Footer" component={FooterNavigation} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})