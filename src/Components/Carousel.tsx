import { FlatList, StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import CoruselData from '../Constants/CarouselData'
import { scale, verticalScale , width} from '../Constants/Dimensions';


const ITEM_WIDTH = width * 0.8;
const SPACING = (width - ITEM_WIDTH) / 2;
const SIDE_PADDING = (width - ITEM_WIDTH) / 2;

const Carousel = () => {
  return (
    <FlatList 
    data={CoruselData}
    horizontal
    pagingEnabled={true}
    snapToAlignment="center"
    snapToInterval={width}
    decelerationRate="normal"
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal:10 }}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={[styles.card]}>
        <Image
          source={{ uri: item.image }}
          style={styles.poster}
          resizeMode="cover"
        />
      </View>
    )}
  />
  )
}

export default Carousel

const styles = StyleSheet.create({
    card: {
        marginHorizontal: verticalScale(20),
        // padding:SPACING,
        borderRadius: verticalScale(12),
        overflow: 'hidden',
        width: width-verticalScale(40),
      },
      poster: {
        width: '100%',
        height: verticalScale(300),
      },
})