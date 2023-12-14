import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { doc, getDoc, setDoc, updateDoc, UpdateData } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';





import Octicons from 'react-native-vector-icons/Octicons';

import dashboardperson from '../assets/heartcommunity.png';
import cert from '../assets/errr.png';
import doctro from '../assets/doctro.png';


const Connect = ({navigation}) => {

  const auth = getAuth(FIREBASE_APP);

  const [ email, setEmail] = React.useState(auth.currentUser?.email);
  const [userDoc, setUserDoc] = useState('')
  // Update Text
  const [text, setText] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const userDocRef = doc(FIREBASE_DATABASE, 'FitnessData', email);

const[searchtext,setSearchtext] = React.useState('');

getDoc(userDocRef)
    // Handling Promises
    .then((snapshot) => {
      // MARK: Success
      if (snapshot.exists) {
        setUserDoc(snapshot.data())
      }
      else {
        alert("No Doc Found")
      }
    })
    .catch((error) => {
      // MARK: Failure
      alert(error.message)
    })




        return( 
            <KeyboardAvoidingView
                style={Styles.container}
            >
                
              <ScrollView showsVerticalScrollIndicator={false} height={1000}>
               
              <Image source={dashboardperson} style={Styles.mainscreen}/>
              <Text  style={Styles.firsttext} >Connect with Healthline</Text>
                    <Text  style={Styles.firsttext22} >Your Health</Text>


               
                  <View style={Styles.contentbox}>

                  <TouchableOpacity onPress={() => navigation.push('Personal')}>
                  
                    <View style={Styles.firstview1}>
                        <View style={Styles.parameterbox}>
                          <Text style={Styles.textparameter} >Weight</Text>
                          {
                        userDoc != null &&
                          <Text style={Styles.textparameter2}>{userDoc.Weight} Kg</Text>
                        }
                        </View>
                        <View style={Styles.parameterbox2}>
                          <Text style={Styles.textparameter} >Height</Text>
                          { userDoc != null &&
                          <Text style={Styles.textparameter2}>{userDoc.Height} cm</Text> }
                        </View>
                        <View style={Styles.parameterbox3}>
                          <Text style={Styles.textparameter} >BMI</Text>
                          { userDoc != null &&
                          <Text style={Styles.textparameter2}>{userDoc.BMI}</Text>}
                        </View>


                  </View> 
                  </TouchableOpacity>

                  

                  <View style={Styles.parameterbox24}>
                        <Text style={Styles.text101} >Blood Sugar Level</Text>
                        <Text style={Styles.text102} >{} mg/dL</Text>

                        <Text style={Styles.text101} >Systolic Pressure</Text>
                        <Text style={Styles.text102} >{}mmHg</Text>

                        <Text style={Styles.text101} >Diastolic Pressure</Text>
                        <Text style={Styles.text102} >{}mmHg</Text>

                        <Image source={cert} style={Styles.mainscreen2}/>

                        <TouchableOpacity style={Styles.buttonforupdate}>
                                <Text style={Styles.buttonforupdatetext}>Edit Records</Text>
                        </TouchableOpacity>
                  </View>
                     
                  </View>   

                  
  
        
              </ScrollView>
   
            </KeyboardAvoidingView>
        )


}


export default Connect


const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white', 
       

      },
      mainscreen: {
        width: '100%',
        height: 300,
      
      },
      mainscreen2: {
        width: 220,
        height: 220,
        position: 'absolute',
        left: 113,
        paddingRight: 10,
        top: 45,
      

      },

      majortopic: {
        fontSize: 25,
        marginTop: 60,
        paddingBottom:20,
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
        top: '1%',
        
      },
      firsttext: {
        fontSize: 17,
        alignSelf: 'center',
        width: '85%',
        fontWeight: '500',
        textAlign: 'center',
        top: -30,
      

      },
      firsttext1: {
        fontSize: 14,
        width: '70%',
        fontWeight: '300',
        top: 10,

      },
      firsttext22: {
        fontSize: 30,
        alignSelf: 'center',
        width: '85%',
        fontWeight: '700',
        textAlign: 'center',
        top: -30,
      },
      insider: {
        paddingHorizontal: '7%',
        paddingVertical: '5%',
        borderRadius: 50,
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
      parameterbox24: {
        width: '100%',
        height: 280,
        backgroundColor: '#EEEEEE',
        top: 30,
        borderRadius: 30,
        paddingHorizontal: '8%',
        paddingVertical: '5%',
        
       
        
      },
      text101: {
        fontSize: 14,
        fontWeight: '300',
        width: '40%',
        marginTop: 15,
      },
      text102: {
        fontSize: 24,
        fontWeight: '700',
        width: '40%',
      },
      parameterbox3: {
        position: 'absolute',
        marginLeft: '80%',
        
      },
      contentbox: {
        marginHorizontal: '5%',
        height: 600,
       
      },
      buttonforupdate: {
        width: 120,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 30,
        position: 'absolute',
        top: 27,
        left: 175,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        color: 'white',
      },
      buttonforupdatetext: {
        color: 'white',
      },
      

});