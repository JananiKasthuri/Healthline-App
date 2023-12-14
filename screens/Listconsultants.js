import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, ActivityIndicator, FlatList, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { doc, getDoc, setDoc, updateDoc, UpdateData, collection, onSnapshot, } from 'firebase/firestore';




import Octicons from 'react-native-vector-icons/Octicons';

import dashboardperson from '../assets/dashboardperson.png';
import doctro from '../assets/doctro.png';
import startimage from '../assets/startimage.png';


const Listofconsultants = ({ navigation }) => {
    const auth = getAuth(FIREBASE_APP);
    const [email, setEmail] = useState(auth.currentUser?.email);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [doctorEmail, setdoctorEmail] = useState('');
    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setEmail(user.email);
  
          // Fetch doctors from Firestore
          const doctorDocRef = collection(FIREBASE_DATABASE, 'DoctorProfiles');
          const unsubscribeDoctors = onSnapshot(doctorDocRef, (querySnapshot) => {
            const doctorsData = querySnapshot.docs.map((doc) => doc.data());
            setDoctors(doctorsData);
            setLoading(false); // Set loading to false once data is fetched
          });
  
          return () => {
            unsubscribeDoctors(); // Cleanup subscription
          };
        }
      });
  
      return unsubscribe;
    }, [auth]);
  
    return (
      <KeyboardAvoidingView style={Styles.container}>
        <Text style={Styles.majortopic}>Consultants</Text>
  
  
        {loading ? (


          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={doctors}
            
            keyExtractor={(item) => item.email}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => {
                console.log(item); 
                console.log('DoctorEmail:', item.email); 
                // Navigate to the screen that displays the doctor's clinics
                navigation.navigate('DoctorClinics', { doctorEmail: item.email });
              }}
              >
                <View style={Styles.todobox}>
                  <Text style={Styles.textupdate}>{item.fullName}</Text>
                  <Text style={Styles.textupdate3}>{item.currentWorkspace}</Text>
                  <Text style={Styles.textupdate3}>{item.maxEducation}</Text>
                  
                  <View style={Styles.viewforitemss}>
                    <Text style={Styles.textupdate2}>{item.currentSpecialization}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false} 
          />
        )}
      </KeyboardAvoidingView>
    );
  };

export default Listofconsultants;


const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white', 
        paddingHorizontal: '5%',

      },

      majortopic: {
        fontSize: 25,
        marginTop: 60,
        marginBottom: 10,
        paddingBottom:10,
        fontWeight: '800',

      },
      firstview: {
        backgroundColor: ''
      },

      searchbar: {
        backgroundColor: '#ECECEC',
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 10,
        color: '#B4B4B4',
      },
      firstview: {
        width: '100%',
        height: 224,
        backgroundColor: '#CFF5FF',
        borderRadius: 35,
        marginTop: 50,
      },
      secondview: {
        width: '100%',
        height: 200,
        backgroundColor: '#CFF5FF',
        borderRadius: 35,
        marginTop: 20,
      },
      secondview7: {
        width: '100%',
        height: 140,
        backgroundColor: '#000000',
        borderRadius: 35,
        marginTop: 20,
      },
      firstview1: {
        width: '100%',
        height: 100,
        backgroundColor: '#000000',
        borderRadius: 35,
        justifyContent: 'center',
        top: '6%',
        
      },
      firsttext: {
        fontSize: 21,
        width: '70%',
        fontWeight: '700',

      },
      firsttext1: {
        fontSize: 14,
        width: '70%',
        fontWeight: '300',
        top: 10,

      },
      firsttext2: {
        fontSize: 17,
        width: '70%',
        fontWeight: '600',
        marginTop: 20,

      },
      firsttext12: {
        fontSize: 23,
        width: '70%',
        fontWeight: '300',
        color: 'white',
        top: 10,

      },
      firsttext21: {
        fontSize: 14,
        width: '70%',
        color: 'white',
        fontWeight: '600',
        marginTop: 20,

      },
      insider: {
        paddingHorizontal: '7%',
        paddingVertical: '5%',
        borderRadius: 50,
      },
      mainscreen: {
        width: 170,
        height: 170,
        position: 'absolute',
        alignSelf: 'flex-end',
        top: -40,
      },
      viewforitemss: {
      
      marginTop: 20,
        paddingHorizontal: '1%',
        marginRight: '44%',
        height: 35,
        backgroundColor: '#64C2C6',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '1%',
      },
      mainscreen2: {
        width: 160,
        height: 160,
        position: 'absolute',
        left: 163,
        paddingRight: 10,
        top: 39,
        borderRadius: 30,

      },
      mainscreen5: {
        width: 120,
        height: 120,
        position: 'absolute',
        left: 185,
        paddingRight: 10,
        top: 10,
        borderRadius: 30,

      },
      secondtext1: {
        fontSize: 20,
        marginTop: 15,
        marginHorizontal: 5,
        marginBottom: 12,
        

      },
      todobox: {
        backgroundColor: '#C8FCFF',
        width: '100%',
        marginBottom:20,
        height: 160,
        borderRadius: 20,
      
        paddingHorizontal: '7%',
        paddingVertical: '5%',
        

      },
      donebutton: {
        width: 50,
        height: 50,
        borderRadius: 90,
        backgroundColor: 'black',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: '90%',
        marginVertical: 20,
      },
      buttonicon: {
        widgth: 10,
        height: 10,
        alignSelf: 'center',
        
        
      },
      textupdate: {
        fontSize: 23,
        fontWeight: '600',
        width: '80%',

      },
      textupdate2: {
        fontSize: 15,
        fontWeight: '300',
        width: '80%',
        paddingHorizontal: '10%',
        color: 'white',
        textAlign:'center',
       

      },
      textupdate3: {
        fontSize: 14,
        fontWeight: '300',
        color: 'grey',
        width: '80%',
        top: 7,

      },
      textparameter: {
        color: 'white',

      },
      textparameter2: {
        color: 'white',
        fontSize: 23,
        fontWeight: '700',

      },
      parameterbox: {
        position: 'absolute',
        marginLeft: '8%',
        
      },
      parameterbox2: {
        position: 'absolute',
        marginLeft: '45%',
        
      },
      parameterbox3: {
        position: 'absolute',
        marginLeft: '80%',
        
      },

      
      

});