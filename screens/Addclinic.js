import * as React from 'react';
import { useEffect, useState } from 'react';
import { TextInput, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_DATABASE } from '../firebaseConfig';
import { doc, setDoc, updateDoc, UpdateData } from 'firebase/firestore';
import startimage from '../assets/startimage.png';
import google from '../assets/google.gif';
import dashboardperson from '../assets/doctoraccount.png';

const Addclinic = ({ navigation }) => {
    const [hospitalName, setHospitalName] = useState('');
    const [clinicName, setClinicName] = useState('');
    const [selectedDay, setSelectedDay] = useState('Sunday');
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('AM');
    const [endTime, setEndTime] = useState('');
    const [email, setEmail] = useState('');
  
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
        const userDocRef = doc(FIREBASE_DATABASE, 'DoctorProfiles', email, 'clinics', clinicName);
        await setDoc(userDocRef, {
          hospitalName: hospitalName,
          clinicName: clinicName,
          selectedDay: selectedDay,
          startTime: `${selectedStartTime} ${selectedPeriod}`,
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
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const handleDayPress = (day) => {
      setSelectedDay(day);
    };
  
    const handleStartTimePress = (time) => {
      setSelectedStartTime(time);
    };
  
    const handlePeriodPress = (period) => {
      setSelectedPeriod(period);
    };
  
    return (
      <KeyboardAvoidingView style={Styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Image source={dashboardperson} style={Styles.mainscreen} />
          <View style={Styles.restcontentwithpadding}>
            <Text style={Styles.maintext}>Create a clinic</Text>
            <Text style={Styles.maintext2}>Showcase your clinic information</Text>
  
            <TextInput
              placeholder={'Hospital Name'}
              style={Styles.textinp}
              value={hospitalName}
              onChangeText={(name) => setHospitalName(name)}
            />
            <TextInput
              placeholder={'Clinic Name'}
              style={Styles.textinp}
              value={clinicName}
              onChangeText={(name) => setClinicName(name)}
            />
  
            <Text style={Styles.textinpp}>Select Your Preferred Day</Text>
  
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
            >
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    Styles.Scrollsforpickers,
                    {
                      backgroundColor: selectedDay === day ? 'black' : 'gray',
                    },
                  ]}
                  onPress={() => handleDayPress(day)}
                >
                  <Text style={Styles.textinselectors}>{day}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text></Text>
  
            <Text style={Styles.textinpp}>Select Your Preferred Start Time</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    Styles.Scrollsforpickers,
                    {
                      backgroundColor: selectedStartTime === `${time}` ? 'black' : 'gray',
                    },
                  ]}
                  onPress={() => handleStartTimePress(`${time}`)}
                >
                  <Text style={Styles.textinselectors}>{time}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
  
           
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
            >
              {['AM', 'PM'].map((period, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    Styles.Scrollsforpickers,
                    {
                      backgroundColor: selectedPeriod === period ? 'black' : 'gray',
                    },
                  ]}
                  onPress={() => handlePeriodPress(period)}
                >
                  <Text style={Styles.textinselectors}>{period}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
  
            <TouchableOpacity style={Styles.mainbutton} onPress={setData}>
              <Text style={Styles.buttonfont}>Create a Clinic</Text>
              <View style={Styles.iconn}>
                <Image source={google} style={Styles.google} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Addclinic;

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
        
      }
});
