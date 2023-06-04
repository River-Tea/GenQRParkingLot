import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import RandomString from './components/RandomString';
import ParkingCar from './screens/ParkingCar';
import { NavigationContainer } from '@react-navigation/native';
import ShowQR from './screens/ShowQR';
import PickUpCar from './screens/PickUpCar';
import { useEffect, useState } from 'react';
import Firebase from './components/Firebase';


const Stack = createStackNavigator();
export default function App() {
    const [ randStr, setRandStr ] = useState(RandomString());
    const queryTrans = Firebase.firebase.firestore().collection("xe").orderBy("time_in").limit(1);
    useEffect(() => {
        setInterval(() => {
            queryTrans.get().then((snapshot) => {
                if(snapshot.empty) {
                    setRandStr(RandomString());
                }
            }) 
        }, 5000);
    })
    const Parking = () => <ParkingCar randomString={randStr} />

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='ParkingCar'
                    component={Parking}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='PickUpCar'
                    component={PickUpCar}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='ShowQR'
                    component={ShowQR}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}