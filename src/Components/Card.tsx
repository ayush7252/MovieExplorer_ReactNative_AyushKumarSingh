import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width, height, scale, verticalScale, moderateScale } from '../Constants/Dimensions'

const isTablet = width >= 568

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        height:verticalScale(160),
        width:verticalScale(160),
        borderWidth:verticalScale(1),
        borderRadius:verticalScale(20),
    }
})