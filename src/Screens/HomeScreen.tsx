import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import HorizontalSlider from '../Components/HorizontalSlider'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <HorizontalSlider />
      <Carousel />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000'
    }
})