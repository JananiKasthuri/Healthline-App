import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text,  KeyboardAvoidingView, View, Pressable, Modal, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Connect from './Connect';
import Profile from './Profile';


import Octicons from 'react-native-vector-icons/Octicons';
import Doctordashboard from './Doctordashboard';
import Doctorprofile from './Doctorprofile';
import Pharmacydashboard from './Pharmacydashboard';
import Pharmacyprofile from './Pharmacyprofile';
const Tab = createBottomTabNavigator();


function Downmenu ({navigation}) {
    return (
      <Tab.Navigator>
         <Tab.Screen name="Pharmacydashboard" component={Pharmacydashboard} />
         <Tab.Screen name="Pharmacyprofile" component={Pharmacyprofile} />
      </Tab.Navigator>
    );
  }

export 

const Pharmacytabs = ({navigation}) => {

        return( 
            <KeyboardAvoidingView
                style={Styles.container}
            >
              <Tab.Navigator screenOptions={{
              tabBarLabelPosition: 'below-icon', tabBarShowLabel: false, 
              tabBarActiveTintColor: 'white', tabBarActiveBackgroundColor: '#0B0B0B', 
             
              tabBarStyle: {height: 60,  
                            
                            
                          
                            
                            },           
                            
                            }}  style={Styles.navigationbar}>
                <Tab.Screen options={{headerShown: false,
                                     
                                      tabBarIcon: ({ color, size }) => (
                                        <Octicons name="home" color={color} size={20} />
                                      ),
                                      tabBarItemStyle: {
                                        borderTopRightRadius: 20,
                                        borderBottomRightRadius: 20,
                                    },
                                      
                                 
                                      
                        }} name="Pharmacydashboard" component={Pharmacydashboard} />
               
                <Tab.Screen options={{headerShown: false,
                                      
                                      tabBarIcon: ({ color, size }) => (
                                        <Octicons name="person" color={color} size={20} />
                                      ),
                                      tabBarItemStyle: {
                                        borderTopLeftRadius: 20,
                                        borderBottomLeftRadius: 20,
                                    }, 
                                    }} name="Pharmacyprofile" component={Pharmacyprofile} />
            </Tab.Navigator>
                

            </KeyboardAvoidingView>
        )


}


export default Pharmacytabs



const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white', 
        

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
      

});