import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import RandomString from './components/RandomString';
import ParkingCar from './screens/ParkingCar';
import { NavigationContainer } from '@react-navigation/native';
import ShowQR from './screens/ShowQR';
import { Component, useEffect } from 'react';
import PickUpCar from './screens/PickUpCar';


const Stack = createStackNavigator();
export default function App() {
    const randStr = RandomString();
    // console.log('start', randStr);
    const Parking = () => <ParkingCar randomString={randStr} />

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='ParkingCar'
                    component={Parking} />
                <Stack.Screen
                    name='PickUpCar'
                    component={PickUpCar} />
                <Stack.Screen
                    name='ShowQR'
                    component={ShowQR} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
