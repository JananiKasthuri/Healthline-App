import * as React from 'react';
import { useEffect, useState } from 'react';
import { TextInput, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { doc, setDoc, updateDoc, UpdateData } from 'firebase/firestore';
import startimage from '../assets/startimage.png';
import google from '../assets/google.gif';

const Personal = ({ navigation }) => {
  const [age, setAge] = React.useState('');
  const [Height, setHeight] = React.useState('');
  const [Weight, setWeight] = React.useState('');
  const [BMI, setBMI] = React.useState('');
 
  const [email, setEmail] = React.useState('');

  const auth = getAuth(FIREBASE_APP);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get the current user's email
        setEmail(user.email);
      }
    });

    return unsubscribe;
  }, [auth]);

  const calculateBMI = () => {
    // Convert height to meters
    const heightInMeters = Height / 100;
    
    // Calculate BMI using the formula: weight (kg) / (height (m))^2
    const calculatedBMI = Weight / (heightInMeters * heightInMeters);

    setBMI(calculatedBMI.toFixed(0));

    // Round BMI to two decimal places
  
  };

  const setData = async () => {
    try {
      // Calculate BMI
      calculateBMI();
  
      // Time break (1000 milliseconds = 1 second)
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Update the existing document
      const userDocRef = doc(FIREBASE_DATABASE, 'FitnessData', email);
      await setDoc(userDocRef, {
        age: age,
        Height: Height,
        Weight: Weight,
        BMI: BMI,
      });
  
      // Time break (1500 milliseconds)
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      // Set BMI in the "Fitness" document
  
      console.log('Data updated successfully');
  
      // Time break (2000 milliseconds) before navigating
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      navigation.navigate('Hometab');
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };
  
  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Text style={Styles.maintext}>Welcome to Healthline</Text>
      <Text style={Styles.maintext2}>We need a few more details to give better health status to you</Text>

      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <TextInput
          placeholder={'Your Age'}
          style={Styles.textinp}
          value={age}
          onChangeText={(age) => setAge(age)}
        />
        <TextInput
          placeholder={'Your Height in cm'}
          style={Styles.textinp}
          value={Height}
          onChangeText={(Height) => setHeight(Height)}
          keyboardType="numeric"
        />
        <TextInput
          placeholder={'Your Weight in Kg'}
          style={Styles.textinp}
          value={Weight}
          onChangeText={(Weight) => setWeight(Weight)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={Styles.mainbutton} onPress={setData}>
          <Text style={Styles.buttonfont}>Let's Begin</Text>
          <View style={Styles.iconn}>
            <Image source={google} style={Styles.google} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Personal;

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
        fontSize: 35,

        marginTop: '20%',
        fontWeight: '700',
      },
      maintext2: {
        fontSize: 20,
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
