import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ParkingCar = ({ randomString, parkingID }) => {
    const navigator = useNavigation();
    console.log('park', parkingID);

    const generateQRCodeData = () => {
        const updatedQRCodeData = 'i' + randomString;
        navigator.navigate('ShowQR', {
            qrCodeData: updatedQRCodeData,
            randomString: randomString,
            parkingID: parkingID,
            st: true,
        });
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.appThumb}
                source={require('../assets/smart-parking.png')} />
            <Text
                style={styles.appName}>
                SMART PARKING LOT
            </Text>
            <Text style={styles.appDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit. Risus at ultrices mi tempus.
            </Text>
            <TouchableOpacity
                onPress={generateQRCodeData}
                style={styles.button}>
                <Text style={styles.textBtn}> Parking Car </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ParkingCar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appThumb: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    appName: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#7B5E5C',
    },
    appDesc: {
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 25,
        color: '#DABBAC',
    },
    button: {
        backgroundColor: '#F8C52D',
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 30,
    },
    textBtn: {
        color: '#F1F6F9',
        fontSize: 20,
    }
})