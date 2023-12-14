import * as React from 'react';
import { useEffect } from 'react';
import { Image, Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import startimage from '../assets/startimage.png';

const Starthere = ({ navigation }) => {

  const auth = getAuth(FIREBASE_APP);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Hometab")
      }
    })

    return unsubscribe
  }, [])

  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Text style={Styles.maintext}>Your personalized health companion awaits</Text>
      <Text style={Styles.maintext2}> </Text>
      <Image source={startimage} style={Styles.startimage} />

      <TouchableOpacity
        style={Styles.mainbutton}
        onPress={() => navigation.push('Signin')}
      >
        <View>
          <Text style={Styles.buttonfont}>Let's Get Started</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Starthere;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  startimage: {
    width: 300,
    height: 300,
    marginTop: '5%',
    alignSelf: 'center',
  },
  maintext: {
    fontSize: 30,
    marginHorizontal: '3%',
    marginTop: '35%',
    fontWeight: '700',
    textAlign: 'center',
  },
  maintext2: {
    fontSize: 30,
    marginHorizontal: '10%',
    fontWeight: '200',
  },
  mainbutton: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 17,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '26%',
  },
  google: {
    width: 25,
    height: 25,
  },
  buttonfont: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});
