import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { doc, getDoc, setDoc, updateDoc, UpdateData, query, where, collection } from 'firebase/firestore';




import Octicons from 'react-native-vector-icons/Octicons';

import dashboardperson from '../assets/dashboardperson.png';
import doctro from '../assets/doctro.png';
import startimage from '../assets/startimage.png';


const Dashboard = ({navigation}) => {


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
                 <Text style={Styles.majortopic}>Healthline</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
               
              
                <TouchableOpacity style={Styles.searchbar}
                    onPress={() => navigation.push('Exploremedications')}
                >
                    <Text style={Styles.searchbartext}>Search Medications</Text>
                </TouchableOpacity>

               
          
              
             

                <View style={Styles.firstview}>
                  <View style={Styles.insider}>
                    <Text  style={Styles.firsttext} >Keep Your Health records on your Fingertips</Text>
                    <Image source={dashboardperson} style={Styles.mainscreen}/>
                  </View>
                
     
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
                          <Text style={Styles.textparameter} ></Text>
                          { userDoc != null &&
                          <Text style={Styles.textparameter2}>{userDoc.BMI}</Text>}
                        </View>


                  </View>
                  
                </View>
                  

                <TouchableOpacity onPress={()=> navigation.navigate('Listofconsultants')}>
                <View style={Styles.secondview}>
                  <View style={Styles.insider}>
                    <Text  style={Styles.firsttext} >Connect with Consultant</Text>
                    <Text  style={Styles.firsttext1} >Aware about your health conditions and take action before late</Text>
                    <Text  style={Styles.firsttext2} >See Avilable Consultants</Text>
                    <Image source={doctro} style={Styles.mainscreen2}/>
                  </View>
                </View>
                </TouchableOpacity>

                <Text style={Styles.secondtext1}>Your Health Todo</Text>

                <TouchableOpacity>
                <View style={Styles.secondview7}>
                  <View style={Styles.insider}>
                    <Text  style={Styles.firsttext12} >Track what todo for your Health</Text>
                    <Text  style={Styles.firsttext21} >Add Health Todo</Text>
                    <Image source={startimage} style={Styles.mainscreen5}/>
                  </View>
                </View>
                </TouchableOpacity>

                

                {

                 <View style={Styles.todobox}>
                    <Text style={Styles.textupdate}>Dr. Ruwan Alwis</Text>
                    <Text style={Styles.textupdate2}>Doctor Appointment</Text>
                    <Text style={Styles.textupdate3}>6 PM | Today</Text>
                    
                    <TouchableOpacity style={Styles.donebutton}>
                    <Octicons name="check" color={'white'} size={22} />
                    </TouchableOpacity>
                 </View> 

                 

                }
                
        
              </ScrollView>
   
            </KeyboardAvoidingView>
        )


}


export default Dashboard


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

      },
      firstview: {
        backgroundColor: ''
      },
      searchbartext: {
        color: 'Black',
        fontSize: 15,
        marginTop: '5%',

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
        marginTop: 20,
        marginHorizontal: 5,
        marginBottom: 12,
        

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
        marginLeft: '45%',
        
      },
      parameterbox3: {
        position: 'absolute',
        marginLeft: '80%',
        
      },
      

});