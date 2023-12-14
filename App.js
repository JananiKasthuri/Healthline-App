import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './screens/Dashboard';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Starthere from './screens/Start';
import Accounttype from './screens/Accountype';
import Signupdoctors from './screens/Signupdoctors';
import Signuppharmacies from './screens/Signuppharmacies';
import Hometab from './screens/Hometab';
import Connect from './screens/Connect';
import Profile from './screens/Profile';
import Personal from './screens/Personal';
import Doctordashboard from './screens/Doctordashboard';
import Doctortabs from './screens/DoctorTabs';
import SetupdoctorAccount from './screens/Setupdoctoraccount';
import Doctorprofile from './screens/Doctorprofile';
import Pharmacytabs from './screens/Pharmacytabs';
import Pharmacydashboard from './screens/Pharmacydashboard';
import Pharmacyprofile from './screens/Pharmacyprofile';
import Addclinic from './screens/Addclinic';
import Listofconsultants from './screens/Listconsultants';
import DoctorClinics from './screens/Doctorclinics';
import Addmedications from './screens/Addmedications';
import Exploremedications from './screens/Exploremedications';


/*declaring navigation components */
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{headerShown: false}} name="Starts" component={Starthere}/>
        <Stack.Screen options= {{headerShown: false}} name="Signin" component={Signin}/>
        <Stack.Screen options= {{headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen options= {{headerShown: false}} name="Signupdoctors" component={Signupdoctors} />
        <Stack.Screen options= {{headerShown: false}} name="Signuppharmacies" component={Signuppharmacies} />
        <Stack.Screen options= {{headerShown: false}} name="Dashboard" component={Dashboard} />
        <Stack.Screen options= {{headerShown: false}} name="Accounttype" component={Accounttype} />
        <Stack.Screen options= {{headerShown: false}} name="Hometab" component={Hometab} />
        <Stack.Screen options= {{headerShown: false}} name="Doctotabs" component={Doctortabs} />
        <Stack.Screen options= {{headerShown: false}} name="Pharmacytabs" component={Pharmacytabs} />
        <Stack.Screen options= {{headerShown: false}} name="Connect" component={Connect} />
        <Stack.Screen options= {{headerShown: false}} name="Profile" component={Profile} />
        <Stack.Screen options= {{headerShown: false}} name="Doctorprofile" component={Doctorprofile} />
        <Stack.Screen options= {{headerShown: false}} name="Pharmacyprofile" component={Pharmacyprofile} />
        <Stack.Screen options= {{headerShown: false}} name="Personal" component={Personal} />
        <Stack.Screen options= {{headerShown: false}} name="Addclinic" component={Addclinic} />
        <Stack.Screen options= {{headerShown: false}} name="Listofconsultants" component={Listofconsultants} />
        <Stack.Screen options= {{headerShown: false}} name='Doctordashboard' component={Doctordashboard} />
        <Stack.Screen options= {{headerShown: false}} name='Pharmacydashboard' component={Pharmacydashboard} />
        <Stack.Screen options= {{headerShown: false}} name='SetupdoctorAccount' component={SetupdoctorAccount} />
        <Stack.Screen options= {{headerShown: false}} name='DoctorClinics' component={DoctorClinics} />
        <Stack.Screen options= {{headerShown: false}} name='Addmedications' component={Addmedications} />
        <Stack.Screen options= {{headerShown: false}} name='Exploremedications' component={Exploremedications} />
        
        
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
