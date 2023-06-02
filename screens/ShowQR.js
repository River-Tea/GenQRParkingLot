import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { useNavigation, useRoute } from '@react-navigation/native'

const ShowQR = () => {
    const route = useRoute();
    const { qrCodeData } = route.params;
    const navigators = useNavigation();
    console.log(qrCodeData);

    let logoFromFile = require('../assets/parking.png');

    const contiPage = (qrCodeData, state) => {
        if (qrCodeData && state == True) {
            navigators.navigate('PickUpCar', qrCodeData);
        } else {
            navigators.navigate('Parking Car', qrCodeData = '')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.qrBG}>
            {qrCodeData ? (
                <QRCode
                    value={qrCodeData}
                    size={270}
                    logo={logoFromFile}
                    logoSize={60}
                    logoBackgroundColor='#FFF'
                    logoBorderRadius={110}
                />
            ) : <Text>Empty</Text>}
            </View>
        </View>
    )
}

export default ShowQR

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    qrBG: {
        width: 300,
        height: 300,
        backgroundColor: '#9BA4B5',
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 15
    }
})