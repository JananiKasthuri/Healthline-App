import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';





import Octicons from 'react-native-vector-icons/Octicons';

import dashboardperson from '../assets/dashboardperson.png';
import doctro from '../assets/doctro.png';
import phill from '../assets/drugphill.png';


const Accounttype = ({navigation}) => {

  const[searchtext,setSearchtext] = React.useState('');


        return( 
            <KeyboardAvoidingView
                style={Styles.container}
            >
                 <Text style={Styles.majortopic}>Select Your Prefered Account Type</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
               

           
                <TouchableOpacity onPress={()=> navigation.push('Signup')}>
                <View style={Styles.secondview}>
                  <View style={Styles.insider}>
                    <Text  style={Styles.firsttext} >Connect As a Normal User</Text>
                    <Text  style={Styles.firsttext1} >You can request medicine and use healthline as a your fitness partner</Text>
                    <Image source={dashboardperson} style={Styles.mainscreen2}/>
                  </View>
                </View>


                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.push('Signupdoctors')}>
                <View style={Styles.secondview2}>
                  <View style={Styles.insider}>
                    <Text  style={Styles.firsttext} >Connect As a Doctor or Hostpital</Text>
                    <Text  style={Styles.firsttext1} >You can getting Appointments from our healthline users and expand your practice</Text>
                    <Image source={doctro} style={Styles.mainscreen2}/>
                  </View>
                </View>


                </TouchableOpacity>

                
                <TouchableOpacity onPress={()=> navigation.push('Signuppharmacies')}>
                <View style={Styles.secondview3}>
                  <View style={Styles.insider}>
                    <Text  style={Styles.firsttext6} >Connect As a Phamacist or Pharmacy</Text>
                    <Text  style={Styles.firsttext16} >Sell and Donate Medications for Healthline Users</Text>
                    <Image source={phill} style={Styles.mainscreen2}/>
                  </View>
                </View>


                </TouchableOpacity>
                
             
        
              </ScrollView>
   
            </KeyboardAvoidingView>
        )


}


export default Accounttype


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
        backgroundColor: '#DCFFEC',
        borderRadius: 35,
        marginTop: 20,
      },

      secondview2: {
        width: '100%',
        height: 200,
        backgroundColor: '#DCFCFF',
        borderRadius: 35,
        marginTop: 20,
      },

      secondview3: {
        width: '100%',
        height: 200,
        backgroundColor: '#050505',
        borderRadius: 35,
        marginTop: 20,
        marginBottom: 40,
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

      firsttext6: {
        fontSize: 21,
        width: '70%',
        fontWeight: '700',
        color: 'white',

      },
      firsttext1: {
        fontSize: 17,
        width: '60%',
        fontWeight: '300',
        top: 10,

      },
      firsttext16: {
        fontSize: 17,
        width: '60%',
        fontWeight: '300',
        top: 10,
        color: 'white',

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
      

});