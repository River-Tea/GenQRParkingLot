import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ParkingCar = ({ randomString }) => {
    const navigator = useNavigation();

    const generateQRCodeData = () => {
        const updatedQRCodeData = 'i' + randomString;
        navigator.navigate('ShowQR', { qrCodeData: updatedQRCodeData });
    };

    return (
        <View style={styles.container}>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#27374D',
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 30,
    },
    textBtn: {
        color: '#F1F6F9',
        fontSize: 20,
    }
})