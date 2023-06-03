import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const PickUpCar = () => {
    const navigator = useNavigation();
    const route = useRoute();
    const { randomString } = route.params;

    const generateQRCodeData = () => {
        updatedQRCodeData = 'o' + randomString;
        navigator.navigate('ShowQR', {
            qrCodeData: updatedQRCodeData,
            randomString: randomString
        });
    }

    const serial = 'A1-23'
    const time = '04:15:56'
    return (
        <View style={styles.container}>
            <Image
                style={styles.appThumb}
                source={require('../assets/parking-locate.png')} />
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
                    style={styles.button}
                    onPress={generateQRCodeData}>
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
    appThumb: {
        width: 300,
        height: 270,
    },
    info: {
        marginVertical: 30,
        padding: 20,
        borderWidth: 2,
        borderColor: '#7B5E5C',
        borderRadius: 15,
        backgroundColor: '#F5E8C7', 
        // EEC8B185
    },
    infoTitle: {
        color: '#7B5E5C',
        fontSize: 20,
        lineHeight: 40,
        fontWeight: 'bold',
    },
    textInfo: {
        fontWeight: 'normal',
        borderRadius: 5,
        borderWidth: 2,
        color: '#9B7B6E',
    },
    button: {
        backgroundColor: '#F8C52D',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 30,
    },
    textBtn: {
        color: '#F1F6F9',
        fontSize: 20,
    }
})