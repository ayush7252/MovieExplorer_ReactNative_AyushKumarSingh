import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/Screens/SplashScreen'
import AuthrizationScreen from './src/Screens/AuthrizationScreen'
import HomeScreen from './src/Screens/HomeScreen'
import MainNavigation from './src/Navigation/MainNavigation'
import Footer from './src/Components/Footer'
import { NavigationContainer } from '@react-navigation/native'
import FooterNavigation from './src/Navigation/FooterNavigation'

const App = () => {
  return (
      // <SplashScreen />
      // <AuthrizationScreen />
      // <HomeScreen />
      <MainNavigation />
  )
}

export default App

const styles = StyleSheet.create({})