import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, FlatList, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { doc, getDoc, setDoc, updateDoc, UpdateData, collection, onSnapshot } from 'firebase/firestore';




import Octicons from 'react-native-vector-icons/Octicons';

import dashboardperson from '../assets/dashboardperson.png';
import doctro from '../assets/drugphill.png';
import startimage from '../assets/startimage.png';


const Pharmacydashboard = ({ navigation }) => {
  const auth = getAuth(FIREBASE_APP);
  const [email, setEmail] = React.useState(auth.currentUser?.email);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);

        // Fetch clinics from Firestore
        const clinicDocRef = collection(FIREBASE_DATABASE, 'PharmacyUsers', email, 'medicines');
        const unsubscribeClinics = onSnapshot(clinicDocRef, (querySnapshot) => {
          const clinicsData = querySnapshot.docs.map((doc) => doc.data());
          setClinics(clinicsData);
        });

        return () => {
          unsubscribeClinics(); // Cleanup subscription
        };
      }
    });

    return unsubscribe;
  }, [auth]);

  return (
    <KeyboardAvoidingView style={Styles.container}>
     
        <Text style={Styles.majortopic}>Healthline</Text>

        <TouchableOpacity onPress={() => navigation.push('Addmedications')}>
          <View style={Styles.secondview}>
            <View style={Styles.insider}>
              <Text style={Styles.firsttext}>Add New Medication</Text>
              <Text style={Styles.firsttext1}>
                Create your own medication list and getting more orders
              </Text>

              <Image source={doctro} style={Styles.mainscreen2} />
            </View>
          </View>
        </TouchableOpacity>

     
     
      <Text style={Styles.secondtext1}>Ongoing Selling Medications</Text>

<FlatList
  data={clinics}
  keyExtractor={(item) => item.medicinename}
  renderItem={({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Handle clinic item press (if needed)
      }}
    >
      <View style={Styles.todobox}>
        <Text style={Styles.textupdate}>{item.medicinename}</Text>
        <Text style={Styles.textupdate3}>{item.medicinedosage}</Text>
        <Text style={Styles.textupdate3}>{`${item.price} `}</Text>
        <Text style={Styles.textupdate3}>{item.contact}</Text>
        <View style={Styles.viewforitemss}>
          
         <Text style={Styles.textupdate2}>{item.location}</Text>
        </View>
        
        

        <TouchableOpacity style={Styles.donebutton}>
          <Octicons name="no-entry" color={'white'} size={22} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )}
/>
    </KeyboardAvoidingView>
  );
};

export default Pharmacydashboard;


const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white', 
        paddingHorizontal: '5%',

      },

      majortopic: {
        fontSize: 25,
        marginTop: 60,
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
        backgroundColor: '#131313',
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
        fontSize: 25,
        width: '60%',
        fontWeight: '700',
        color: 'white',

      },
      firsttext1: {
        fontSize: 16,
        width: '60%',
        fontWeight: '300',
        top: 30,
        color: 'white',

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
       width: '40%',
        height: 35,
        backgroundColor: '#1E1E1E',
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
        backgroundColor: '#E9E9E9',
        width: '100%',
        marginBottom:30,
        height: 180,
        borderRadius: 20,
        marginTop: 10,
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
        fontSize: 17,
        fontWeight: '300',
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