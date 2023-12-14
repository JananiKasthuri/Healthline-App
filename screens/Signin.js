import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, Image, StyleSheet, SafeAreaView, Dimensions, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { FIREBASE_APP } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import google from '../assets/google.gif';


const Signin = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const auth = getAuth(FIREBASE_APP);

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Email and password are required.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Hometab');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
          Alert.alert('Authentication Failed', 'Your email or password is incorrect.');
        } else {
          Alert.alert('Sign In Error', errorMessage);
        }
      });
  };

  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Text style={Styles.maintext}>Hello There</Text>
      <Text style={Styles.maintext2}>Let's Sign In. 🤗</Text>

      <TextInput
        placeholder={'Your Email'}
        style={Styles.textinp}
        value={email}
        onChangeText={(email) => setEmail(email)}
      ></TextInput>

      <TextInput
        placeholder={'Your Password'}
        style={Styles.textinp}
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      ></TextInput>

      <Text
        style={Styles.forgot}
        onPress={() => navigation.navigate('Forgotpass')}
      >
        Forgot Password ?
      </Text>

      <TouchableOpacity style={Styles.mainbutton} onPress={handleSignIn}>
        <Text style={Styles.buttonfont}>Let's Sign In</Text>
        <View style={Styles.iconn}>
          <Image source={google} style={Styles.google} />
        </View>
      </TouchableOpacity>

      <Text
        style={Styles.signup}
        onPress={() => navigation.push('Accounttype')}
      >
        I haven't account yet
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Signin;


const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '10%',

      },
      sofa: {
        width: '70%',
        height: '40%',
        marginTop: '30%',
        alignSelf: 'center',
      },
      maintext: {
        fontSize: 29,

        marginTop: '35%',
        fontWeight: '700',
      },
      maintext2: {
        fontSize: 30,
        fontWeight: '200',
        marginBottom: '10%',
      },
      mainbutton: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 17,
        alignSelf: 'center',
        marginTop: '25%',
        paddingHorizontal: '10%',

      },
      google: {
        width: 35,
        height: 35,
      },
      buttonfont: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
      },
      iconn :{
        marginLeft: '95%',
        position: 'absolute',
      },
      textinp: {
        width: '100%',
        height: 60,
        color: 'black',
        backgroundColor: '#F9F9F9',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginTop: 20,
        fontSize: 16,
        
      },
      signup: {
        alignSelf: 'center',
        fontSize: 17,
        marginTop: '12%',
      },
      forgot: {
        fontSize: 15,
        marginTop: '7%',
      },

});