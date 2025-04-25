// components/Header.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from 'react-native';
import {
  width,
  scale,
  verticalScale,
  moderateScale,
} from '../Constants/Dimensions';

const isTablet = width >= 768;

const Header = () => {

  const [searchText, setSearchText] = useState('');
  return (
    <View
      style={[
        styles.container,
        isTablet && styles.tabletContainer,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.iconWrapper,
          isTablet && styles.tabletIconWrapper,
        ]}
      >
        <Image
          source={require('../assets/Icons/menu.png')}
          style={[
            styles.icon,
            isTablet && styles.tabletIcon,
          ]}
        />
      </TouchableOpacity>
      
      <TextInput 
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search for movies ..."
        placeholderTextColor="#fff"
        style={[styles.Search , isTablet && styles.SearchTablet]}
      />


      <TouchableOpacity
        style={[
          styles.iconWrapper,
          isTablet && styles.tabletIconWrapper,
        ]}
      >
        <Image
          source={require('../assets/Icons/logout.png')}
          style={[
            styles.icon,{height: verticalScale(19), width: verticalScale(19)},
            isTablet && styles.tabletIcon,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(70),
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#000',
    paddingTop:verticalScale(20),
  },
  tabletContainer: {
    height: verticalScale(80),
    paddingHorizontal: scale(15),
    paddingTop:verticalScale(20),
  },
  iconWrapper: {
    padding: moderateScale(8),
  },
  tabletIconWrapper: {
    padding: moderateScale(12),
  },
  icon: {
    width: scale(28),
    height: scale(28),
    tintColor: '#fff',
  },
  tabletIcon: {
    width: scale(22),
    height: scale(22),
  },
  Search: {
    width: '70%',
    height: verticalScale(30),
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: scale(20),
    paddingHorizontal: scale(15),
    fontSize: moderateScale(16),
    color: '#000',
  },
  SearchTablet: {
    width: '70%',
    height: verticalScale(40),
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: scale(20),
    paddingHorizontal: scale(10),
    fontSize: moderateScale(14),
    color: '#000',
  }
});
