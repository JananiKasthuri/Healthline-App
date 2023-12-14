import * as React from 'react';
import { useEffect, useState } from 'react';
import { TextInput, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { doc, setDoc, updateDoc, UpdateData } from 'firebase/firestore';
import startimage from '../assets/startimage.png';
import google from '../assets/google.gif';
import dashboardperson from '../assets/drugphill.png';

const Addmedications = ({ navigation }) => {
    const [medicinename, setMedicineName] = useState('');
    const [medicinedosage, setMedicineDosage] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
  
    const auth = getAuth(FIREBASE_APP);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setEmail(user.email);
        }
      });
  
      return unsubscribe;
    }, [auth]);
  
    const setData = async () => {
      try {
        const userDocRef = doc(FIREBASE_DATABASE, 'PharmacyUsers', email, 'medicines', medicinename);
        await setDoc(userDocRef, {
          medicinename: medicinename,
          medicinedosage: medicinedosage,
          location: location,
          contact: contact,
          price: price,
          email: email,
        });
  
        // Creating a document in the 'Medications' collection
        const userDocRef2 = doc(FIREBASE_DATABASE, 'Medications', medicinename);
        await setDoc(userDocRef2, {
          medicinename: medicinename,
          medicinedosage: medicinedosage,
          location: location,
          contact: contact,
          price: price,
          email: email,
        });
  
        console.log('Data updated successfully');
  
        // Time break (2000 milliseconds) before navigating
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        navigation.navigate('Pharmacytabs');
      } catch (error) {
        console.error('Error updating data:', error.message);
      }
    };
  
    return (
      <KeyboardAvoidingView style={Styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Image source={dashboardperson} style={Styles.mainscreen} />
          <View style={Styles.restcontentwithpadding}>
            <Text style={Styles.maintext}>Add Medicine</Text>
            <Text style={Styles.maintext2}>Add new medicine for donate or selling</Text>
  
            <TextInput
              placeholder={'Medicine Name'}
              style={Styles.textinp}
              value={medicinename}
              onChangeText={(name) => setMedicineName(name)}
            />
            <TextInput
              placeholder={'Medicine Dosage'}
              style={Styles.textinp}
              value={medicinedosage}
              onChangeText={(dosage) => setMedicineDosage(dosage)}
            />
            <TextInput
              placeholder={'Location'}
              style={Styles.textinp}
              value={location}
              onChangeText={(loc) => setLocation(loc)}
            />
            <TextInput
              placeholder={'Price'}
              style={Styles.textinp}
              value={price}
              onChangeText={(p) => setPrice(p)}
            />
              <TextInput
              placeholder={'Contact Info'}
              style={Styles.textinp}
              value={contact}
              onChangeText={(contact) => setContact(contact)}
              
            />
  
            <TouchableOpacity style={Styles.mainbutton} onPress={setData}>
              <Text style={Styles.buttonfont}>Add Medicine</Text>
              <View style={Styles.iconn}>
                <Image source={google} style={Styles.google} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Addmedications;

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
      Scrollsforpickers: {
        padding: 10,
        marginRight: 10,

        borderRadius: 10,
      },
    
      textinselectors: {
        color: 'white', // Set the text color as needed
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
      textinpp: {
        width: '100%',
        height: 20,
        color: 'black',
        borderRadius: 15,
        marginTop: 10,
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
        marginTop: 20,
        
      }
});
