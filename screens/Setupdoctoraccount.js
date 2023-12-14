import * as React from 'react';
import { useEffect, useState } from 'react';
import { TextInput, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { doc, setDoc, updateDoc, UpdateData } from 'firebase/firestore';
import startimage from '../assets/startimage.png';
import google from '../assets/google.gif';
import dashboardperson from '../assets/doctoraccount.png';

const SetupdoctorAccount = ({ navigation }) => {
    const [fullName, setFullName] = React.useState('');
    const [maxEducation, setMaxEducation] = React.useState('');
    const [currentSpecialization, setCurrentSpecialization] = React.useState('');
    const [currentWorkspace, setCurrentWorkspace] = React.useState('');
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
  
    const setData = async () => {
      try {
        // Update the existing document
        const userDocRef = doc(FIREBASE_DATABASE, 'DoctorProfiles', email);
        await setDoc(userDocRef, {
          fullName: fullName,
          maxEducation: maxEducation,
          currentSpecialization: currentSpecialization,
          currentWorkspace: currentWorkspace,
          email: email,
        });
  
        console.log('Data updated successfully');
  
        // Time break (2000 milliseconds) before navigating
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        navigation.navigate('Doctotabs');
      } catch (error) {
        console.error('Error updating data:', error.message);
      }
    };
  
    return (
      <KeyboardAvoidingView style={Styles.container}>
         <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

         <Image source={dashboardperson} style={Styles.mainscreen}/>
        <View style={Styles.restcontentwithpadding}>
        <Text style={Styles.maintext}>Setup Your Doctor Account Today!</Text>
        <Text style={Styles.maintext2}>Showcase who you are and your capabilities</Text>
  
       
          <TextInput
            placeholder={'Your Full Name'}
            style={Styles.textinp}
            value={fullName}
            onChangeText={(name) => setFullName(name)}
          />
          <TextInput
            placeholder={'Your Maximum Education Level'}
            style={Styles.textinp}
            value={maxEducation}
            onChangeText={(education) => setMaxEducation(education)}
          />
          <TextInput
            placeholder={'Your Current Specialization'}
            style={Styles.textinp}
            value={currentSpecialization}
            onChangeText={(specialization) => setCurrentSpecialization(specialization)}
          />
          <TextInput
            placeholder={'Your Current Workspace'}
            style={Styles.textinp}
            value={currentWorkspace}
            onChangeText={(workspace) => setCurrentWorkspace(workspace)}
          />
  
          <TouchableOpacity style={Styles.mainbutton} onPress={setData}>
            <Text style={Styles.buttonfont}>Let's Help to Cure</Text>
            <View style={Styles.iconn}>
              <Image source={google} style={Styles.google} />
            </View>
          </TouchableOpacity>

          </View> 
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default SetupdoctorAccount;
  

const Styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: 'white',
       
      },
      sofa: {
        width: '70%',
        height: '40%',
        marginTop: '30%',
        alignSelf: 'center',
      },
      maintext: {
        fontSize: 35,
        textAlign: 'center',
        color: 'grey',
        marginTop: -30,
        fontWeight: '700',
      },
      maintext2: {
        fontSize: 17,
        fontWeight: '200',
        marginBottom: '10%',
        textAlign: 'center',
        color: 'grey',
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
        marginBottom: 30,

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
      mainscreen: {
        width: '100%',
        height: 300,
      
      },
      restcontentwithpadding: {
        paddingHorizontal: '10%',
        
      }
});
