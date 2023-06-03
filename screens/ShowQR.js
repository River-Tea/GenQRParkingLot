import { StyleSheet, View, Text, BackHandler, DevSettings } from 'react-native'
import React, { useEffect } from 'react'
import QRCode from 'react-native-qrcode-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Navigation } from 'react-native-navigation'


const ShowQR = () => {
    const route = useRoute();
    const { qrCodeData, randomString } = route.params;
    // const paramsString = JSON.stringify(qrCodeData);
    // console.log('QR', paramsString);
    console.log('QR Code', qrCodeData);
    console.log('QR Code Type', typeof (qrCodeData));
    console.log('Ori String', randomString);

    const navigators = useNavigation();

    let logoFromFile = require('../assets/parking.png');

    useEffect(() => {
        // contiPage(qrCodeData);
        setTimeout(() => {
            contiPage(qrCodeData)
        }, 2000);
    })

    const contiPage = (qrCodeData) => {
        switch (qrCodeData.charAt(0)) {
            case 'i':
                navigators.navigate('PickUpCar', { randomString: randomString });
                break;
            default:
                DevSettings.reload();
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.qrBG}>
                {qrCodeData ? (
                    <QRCode
                        value={qrCodeData}
                        size={260}
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
        backgroundColor: '#FFFFFF',
        borderColor: '#F8C52D',
        borderWidth: 2.5,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 20
    }
})