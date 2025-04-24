import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Image, Alert} from 'react-native';
import {width, height, scale, verticalScale, moderateScale} from '../Constants/Dimensions';
  

const AuthrizationScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () =>{
    console.log("first")
    if(!email || !password) {
      setError('All fields are required.');
      return;
    }
    if(email == 'admin.com' && password == 'admin'){
      navigation.navigate('Home')
    }
    
  }
  const handleSignUp = async() =>{
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if(name == 'admin' && email == 'admin.com' && password == 'admin'){
      Alert.alert('SignedUp Sucessfully')
      navigation.navigate('Home')
    }
  }

  const isTablet = width >= 568;
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const isLogin = mode === 'login';

  return (
    <ImageBackground
      source={require('../assets/Images/Movie_Background.jpg')}
      style={[styles.background , isTablet && {paddingTop: verticalScale(15), paddingHorizontal: scale(50)}]}
      blurRadius={4}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../assets/Icons/left-arrow.png')}
            style={[styles.icon , isTablet && { width: verticalScale(20), height: verticalScale(20), marginTop: verticalScale(30) }]}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Movie Explorer</Text>
        <View style={{width: 24}} />
      </View>
      <View>
        <Image
          source={require('../assets/Icons/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={[styles.tabContainer , isTablet && { marginTop: verticalScale(10) }]}>
        <TouchableOpacity
          style={[styles.tab, isLogin && styles.activeTab]}
          onPress={() => setMode('login')}>
          <Text style={[styles.tabText, isLogin && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, !isLogin && styles.activeTab]}
          onPress={() => setMode('signup')}>
          <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.form , isTablet && { marginTop: verticalScale(10) }]}>
        {!isLogin && (
          <View style={[styles.inputWrapper , isTablet && { paddingHorizontal: scale(15), marginVertical: verticalScale(12) }]}>
            <Image
              source={require('../assets/Icons/user.png')}
              style={[styles.inputIcon, isTablet && {height:verticalScale(24), width:verticalScale(24)}]}
            />
            <TextInput
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholderTextColor="#ddd"
            />
          </View>
        )}

        <View style={[styles.inputWrapper , isTablet && { paddingHorizontal: scale(15), marginVertical: verticalScale(12) }]}>
          <Image
            source={require('../assets/Icons/mail.png')}
            style={[styles.inputIcon, isTablet && {height:verticalScale(24), width:verticalScale(24)}]}
          />
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#ddd"
          />
        </View>

        <View style={[styles.inputWrapper , isTablet && { paddingHorizontal: scale(15), marginVertical: verticalScale(12) }]}>
          <Image
            source={require('../assets/Icons/padlock.png')}
            style={[styles.inputIcon, isTablet && {height:verticalScale(24), width:verticalScale(24)}]}
          />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#ddd"
          />
        </View>

        {!isLogin && (
          <View style={[styles.inputWrapper , isTablet && { paddingHorizontal: scale(15), marginVertical: verticalScale(12) }]}>
            <Image
              source={require('../assets/Icons/padlock.png')}
              style={[styles.inputIcon, isTablet && {height:verticalScale(24), width:verticalScale(24)}]}
            />
            <TextInput
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
              secureTextEntry
              placeholderTextColor="#ddd"
            />
          </View>
        )}

        <View style={styles.optionsRow}>

          {isLogin && (
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={[styles.primaryButton , isTablet && { paddingVertical: verticalScale(10), marginVertical: verticalScale(5) }]} onPress={isLogin ? handleLogin : handleSignUp}>
          <Text style={[styles.primaryButtonText, isTablet && { fontSize: moderateScale(16), lineHeight: verticalScale(20) }]}>
            {isLogin ? 'Login' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.or}>— Or login with —</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={[styles.socialBtn, isTablet && { padding: verticalScale(10) }]}>
            <Image
              source={require('../assets/Icons/google.png')}
              style={[styles.socialIcon , isTablet && { width: scale(20), height: scale(20) }]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialBtn , isTablet && { padding: verticalScale(10) }]}>
            <Image
              source={require('../assets/Icons/facebook.png')}
              style={[styles.socialIcon, isTablet && { width: scale(20), height: scale(20) }]}
            />
          </TouchableOpacity>
        </View>

        
        <TouchableOpacity >
          <Text style={[styles.footerText, isTablet && { fontSize: moderateScale(12), marginTop: verticalScale(10) }]}>
            {isLogin
              ? "Don't have an account? Create an account"
              : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AuthrizationScreen;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      paddingTop: verticalScale(30),
      paddingHorizontal: scale(20),
      backgroundColor: '#000',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      width: scale(24),
      height: scale(24),
      tintColor: '#fff',
    },
    title: {
      color: '#fff',
      fontSize: moderateScale(22),
      fontWeight: 'bold',
    },
    logo: {
        width: verticalScale(50),
        height: verticalScale(50),
        alignSelf: 'center',
        marginTop:verticalScale(20)
      },
    tabContainer: {
      flexDirection: 'row',
      backgroundColor: '#ffffff30',
      borderRadius: verticalScale(30),
      overflow: 'hidden',
      marginTop: verticalScale(20),
    },
    tab: {
      flex: 1,
      paddingVertical: verticalScale(10),
      alignItems: 'center',
    },
    tabText: {
      color: '#fff',
      fontSize: moderateScale(16),
      lineHeight: moderateScale(18),
    },
    activeTab: {
      backgroundColor: '#fff',
    },
    activeTabText: {
      color: '#000',
      fontWeight: 'bold',
    },
    form: {
      flex: 1,
      marginTop: verticalScale(20),
    },
    inputWrapper: {
      flexDirection: 'row',
      backgroundColor: '#ffffff30',
      borderRadius: verticalScale(25),
      paddingHorizontal: scale(15),
      alignItems: 'center',
      marginVertical: verticalScale(8),
    },
    inputIcon: {
      width: scale(20),
      height: scale(20),
      tintColor: '#888',
    },
    input: {
      flex: 1,
      paddingVertical: verticalScale(12),
      color: '#fff',
      marginLeft: scale(10),
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(10),
    },
    forgot: {
      color: '#f8c537',
    },
    primaryButton: {
      backgroundColor: '#007bff',
      borderRadius: verticalScale(25),
      paddingVertical: verticalScale(5),
      alignItems: 'center',
      marginVertical: verticalScale(5),
    },
    primaryButtonText: {
      color: '#fff',
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      lineHeight: verticalScale(30),
    },
    or: {
      color: '#fff',
      textAlign: 'center',
      marginVertical: verticalScale(5),
      lineHeight: moderateScale(15),
    },
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: verticalScale(10),
    },
    socialBtn: {
      backgroundColor: '#ffffff30',
      padding: verticalScale(12),
      borderRadius: verticalScale(25),
    },
    socialIcon: {
      width: scale(20),
      height: scale(20),
      tintColor: '#fff',
    },
    footerText: {
      color: '#fff',
      textAlign: 'center',
      marginTop: verticalScale(20),
      textDecorationLine: 'underline',
      fontSize: moderateScale(14),
    },
    errorText: {
      color: '#f55',
      textAlign: 'center',
      marginVertical: verticalScale(8), 
    }
  });
  
