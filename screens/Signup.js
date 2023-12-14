import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, Image, StyleSheet, SafeAreaView, Dimensions, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts} from 'expo-font';
import { Auth } from 'firebase/auth';
import { FIREBASE_APP } from '../firebaseConfig';
import { FIREBASE_DATABASE } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import startimage from '../assets/startimage.png';
import google from '../assets/google.gif';
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore"; 


const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [nic, setNIC] = useState('');

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSignIn = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Invalid Password', 'Please enter a password with at least 8 characters.');
      return;
    }

    const auth = getAuth(FIREBASE_APP);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(FIREBASE_DATABASE, 'Users', 'NormalUsers', email), {
            fullname: name,
            email: email,
            nic: nic,
            telephone: telephone,
          });
          const userDocRef = doc(FIREBASE_DATABASE, 'NormalUsers', email);
          await setDoc(userDocRef, {
            fullname: name,
            email: email,
            nic: nic,
            telephone: telephone,
          });
          console.log('Document written with ID: ', email);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
        navigation.navigate('Personal');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Text style={Styles.maintext}>Hello There</Text>
      <Text style={Styles.maintext2}>Let's Sign Up. 🤗</Text>

      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <TextInput
          placeholder={'Full Name'}
          style={Styles.textinp}
          value={name}
          onChangeText={(name) => setName(name)}
        />

        <TextInput
          placeholder={'Your Email'}
          style={Styles.textinp}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          placeholder={'Your Password'}
          style={Styles.textinp}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />

        <TextInput
          placeholder={'Your Telephone No'}
          style={Styles.textinp}
          value={telephone}
          onChangeText={(telephone) => setTelephone(telephone)}
          keyboardType="numeric"
        />

        <TextInput
          placeholder={'Your NIC No'}
          style={Styles.textinp}
          value={nic}
          onChangeText={(nic) => setNIC(nic)}
        />

        <TouchableOpacity style={Styles.mainbutton} onPress={handleSignIn}>
          <Text style={Styles.buttonfont}>Let's Sign Up</Text>
          <View style={Styles.iconn}>
            <Image source={google} style={Styles.google} />
          </View>
        </TouchableOpacity>

        <Text style={Styles.signup} onPress={() => navigation.push('Signin')}>
          I already have an account
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;


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