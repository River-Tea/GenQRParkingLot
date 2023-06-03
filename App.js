import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import RandomString from './components/RandomString';
import ParkingCar from './screens/ParkingCar';
import { NavigationContainer } from '@react-navigation/native';
import ShowQR from './screens/ShowQR';
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