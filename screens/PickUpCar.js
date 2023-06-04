import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const PickUpCar = () => {
    const navigator = useNavigation();
    const route = useRoute();
    const { randomString, position, timeIn } = route.params;
    const [timeDiff, setTimeDiff] = useState('');

    // console.log("pickup", position, "----", timeIn);

    useEffect(() => {

        function calTimeDiff() {
            const date = new Date(timeIn * 1000);
            const currentTime = new Date();

            const timeDiffInMil = currentTime.getTime() - date.getTime();
            setTimeDiff(formatTime(timeDiffInMil));
        }

        function formatTime(milliseconds) {
            const seconds = Math.floor((milliseconds / 1000) % 60);
            const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
            const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
            const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

            const formattedDays = days < 10 ? `0${days}` : days;
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

            return `${formattedDays} days ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }
        setInterval(() => {
            calTimeDiff();
        }, 1000);
    })

    const generateQRCodeData = () => {
        updatedQRCodeData = 'o' + randomString;
        navigator.navigate('ShowQR', {
            qrCodeData: updatedQRCodeData,
            randomString: randomString
        });
    }

    // const locate = position
    // const time = timeDiff
    return (
        <View style={styles.container}>
            <Image
                style={styles.appThumb}
                source={require('../assets/parking-locate.png')} />
            <View style={styles.info}>
                <Text style={styles.infoTitle}>Location:
                    <Text style={styles.textInfo}> {position}</Text>
                </Text>
                <Text style={styles.infoTitle}>Duration:
                    <Text style={styles.textInfo}> {timeDiff}</Text>
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