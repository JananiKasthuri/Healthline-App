import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { doc, getDoc, setDoc, updateDoc, UpdateData } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';



import Octicons from 'react-native-vector-icons/Octicons';

import dashboardperson from '../assets/dashboardperson.png';
import doctro from '../assets/doctro.png';


const Doctorprofile = ({ navigation }) => {
  const auth = getAuth(FIREBASE_APP);

  const [email, setEmail] = React.useState(auth.currentUser?.email);
  const [userDoc, setUserDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  const userDocRef = doc(FIREBASE_DATABASE, 'DoctorProfiles', email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(userDocRef)
          .then((snapshot) => {
            if (snapshot.exists) {
              setUserDoc(snapshot.data());
            } else {
              alert('No Doc Found');
            }
          })
          .catch((error) => {
            alert(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        // User is not authenticated, handle accordingly
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [auth, userDocRef]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.push('Signin'); // Navigate to the sign-in page after sign-out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Text style={Styles.majortopic}>Profile</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.boxone}>
          <Image source={dashboardperson} style={Styles.mentoring} />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : userDoc !== null ? (
          <View>
            {userDoc.fullName && (
              <Text style={Styles.majortopic34}>{userDoc.fullName}</Text>
            )}
            {userDoc.currentWorkspace && (
              <Text style={Styles.majortopic345}>{userDoc.currentWorkspace}</Text>
            )}
          </View>
        ) : (
          <Text>No user data available</Text>
        )}

        <TouchableOpacity style={Styles.mainbutton} onPress={handleSignOut}>
          <View>
            <Text style={Styles.buttonfont}>Log out from Healthline</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Doctorprofile;


const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white', 
        paddingHorizontal: '5%',
      },

      majortopic: {
        fontSize: 25,
        marginTop: 60,
        paddingBottom:20,
        fontWeight: '800',
        textAlign: 'center',
      },
      majortopic34: {
        fontSize: 35,
        marginTop: 60,
        paddingBottom:20,
        color: 'grey',
        fontWeight: '800',
        textAlign: 'center',
      },
      majortopic345: {
        fontSize: 15,
        marginTop: -10,
        paddingBottom:20,
        color: 'grey',
        fontWeight: '800',
        textAlign: 'center',
      },
      majortopic2: {
        fontSize: 15,
        marginTop: 60,
        paddingBottom:20,
        fontWeight: '800',
        textAlign: 'center',
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
      firstview1: {
        width: '100%',
        height: 100,
        backgroundColor: '#000000',
        borderRadius: 35,
        justifyContent: 'center',
        top: '6%',
        
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
      buttonfont: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
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
      mainscreen2: {
        width: 160,
        height: 160,
        position: 'absolute',
        left: 163,
        paddingRight: 10,
        top: 39,
        borderRadius: 30,

      },
      secondtext1: {
        fontSize: 17,
        marginTop: 20,
        marginHorizontal: 5,
        marginBottom: 17,
        

      },
      todobox: {
        backgroundColor: '#E9E9E9',
        width: '100%',
        marginBottom:30,
        height: 100,
        borderRadius: 20,
        marginTop: 10,
        paddingHorizontal: '7%',
        paddingVertical: '3%',

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
        fontSize: 21,
        fontWeight: '600',
        width: '80%',

      },
      textupdate2: {
        fontSize: 14,
        fontWeight: '300',
        width: '80%',
        top: -5,

      },
      textupdate3: {
        fontSize: 14,
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
        marginLeft: '40%',
        
      },
      parameterbox3: {
        position: 'absolute',
        marginLeft: '65%',
        
      },
      boxone: {
        width: 120,
        height: 120,
        borderRadius: 70,
        backgroundColor: '#E2E2E2',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: -40,
      },
      mentoring:{
        width: 80,
        height: 80,
        borderRadius: 70,
      },

});