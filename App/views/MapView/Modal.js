import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { COLOR_DARK_GREY, COLOR_BLUE, COLOR_RED } from '../../constants/color'
import {
    Ionicons, AntDesign, FontAwesome, Entypo, MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import { Divider, Button } from 'react-native-elements';
import sharedStyles from '../Styles'

const styles = StyleSheet.create({
    detailContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    },
    heading: {
        ...sharedStyles.text,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "600"
    },
    subHeading: {
        fontFamily: 'open-sans',
        fontSize: 12,
        color: COLOR_DARK_GREY,
        fontWeight: "400"
    },
    infoText: {
        fontFamily: 'open-sans',
        fontSize: 20
    },
    infoContainer: {
        marginHorizontal: 10,
    },
    paymentContainer: {
        flexDirection: 'row',
        margin: 10
    },
    paymentText: {
        fontFamily: 'open-sans',
        fontSize: 30
    },
    button: {
        backgroundColor: COLOR_BLUE,
        padding: 15,
        marginHorizontal: 20
    }
})
const Modal = (props) => {
    return (
        <View style={{ marginVertical: 5 }}>
            <Text style={styles.heading}>Ticket</Text>
            <View style={styles.detailContainer}>
                <View style={styles.infoContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
                        <MaterialCommunityIcons name='bus-articulated-end' size={25} color={COLOR_BLUE} />
                        <View>
                            <Text style={styles.subHeading}>From</Text>
                            <Text style={styles.infoText}>{props.pickup.name}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
                        <MaterialCommunityIcons name='bus-articulated-front' size={25} color={COLOR_RED} />
                        <View>
                            <Text style={styles.subHeading}>To</Text>
                            <Text style={styles.infoText}>{props.drop.name}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.paymentContainer}>
                    <View>
                        <Text style={styles.subHeading}>Bill Amount</Text>
                        <Text style={styles.paymentText}>&#x20B9;{props.billAmount}</Text>
                    </View>
                </View>

            </View>
            <Button title='Make Payment' buttonStyle={styles.button} onPress={props.onPress} />
        </View>
    )
}

export default Modal;