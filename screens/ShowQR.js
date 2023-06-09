import { StyleSheet, View, Text, BackHandler, DevSettings } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCode from 'react-native-qrcode-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import Firebase from '../components/Firebase'


const ShowQR = () => {
    const route = useRoute();
    const { qrCodeData, randomString, parkingID, st } = route.params;
    console.log('show', qrCodeData);
    let position, timeIn, state;

    const queryTrans = Firebase.firebase.firestore().collection("xe").doc(parkingID);

    useEffect(() => {
        queryTrans.get().then((snap) => {
            // Xử lý dữ liệu trả về
            const data = snap.data();
            position = data.position;
            timeIn = data.time_in;
            state = data.status;
            pageNavigate(qrCodeData, state);
        });

        const pageNavigate = (qrCode, status) => {
            if (qrCode.charAt(0) === 'i' && status === true) {
                navigators.navigate('PickUpCar', {
                    randomString: randomString,
                    position: position,
                    timeIn: timeIn,
                    parkingID: parkingID,
                });
            }
            else if (qrCode.charAt(0) === 'o' && status == true) {
                DevSettings.reload();
            }
        }
        console.log(state);
    }, [st])

    const navigators = useNavigation();

    let logoFromFile = require('../assets/parking.png');

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