import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const PickUpCar = () => {
    const [qrCodeData, setQRCodeData] = useState('');
    const navigator = useNavigation();

    const generateQRCodeData = () => {
        setQRCodeData('o' + randomString);
        navigator.navigate('ShowQR', { qrCodeData: updatedQRCodeData });
        console.log(qrCodeData);
    }

    const serial = 'A1-23'
    const time = '04:15:56'
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.infoTitle}>Parking Location:
                    <Text style={styles.textInfo}> {serial}</Text>
                </Text>
                <Text style={styles.infoTitle}>Parking Duration:
                    <Text style={styles.textInfo}> {time}</Text>
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.textBtn}>Pick Up Car</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PickUpCar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        marginVertical: 40,
        paddingVertical: 30,
        padding: 20,
    },
    infoTitle: {
        color: '#333',
        fontSize: 20,
        lineHeight: 40,
        fontWeight: 'bold',
    },
    textInfo: {
        fontWeight: 'normal',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ccc',
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