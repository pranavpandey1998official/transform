import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import {COLOR_DARK_GREY} from '../../constants/color'
import {
	Ionicons, AntDesign, FontAwesome, Entypo, MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';
import { Divider, Button } from 'react-native-elements';
import {COLOR_GREEN} from '../../constants/color';

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        margin: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: "600"
    },
    subHeading: {
        fontSize: 14,
        color: COLOR_DARK_GREY,
        fontWeight: "400"
    },
    infoText: {
        fontSize: 20
    },
    infoContainer: {
        marginHorizontal: 10
    },
    paymentContainer: {
        flexDirection: 'row',
        margin: 10
    },
    paymentText:{
        fontSize: 30
    },
    button: {
        backgroundColor: COLOR_GREEN,
        padding: 15,
        marginHorizontal: 20
    }
})
const Modal = (props) => {

    return(
        <View >
            <View style ={styles.detailContainer}>
                <Ionicons name='ios-bus' size={100}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.heading}>Pickup and Drop Detail</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name='bus-articulated-end' size={15} />
                        <Text style={styles.subHeading}>From</Text>
                    </View>
                    <Text style={styles.infoText}>Daiict infocity</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.subHeading}>To</Text>
                        <MaterialCommunityIcons name='bus-articulated-front' size={15} />
                    </View>
                    <Text style={styles.infoText}>Indra Nagaar</Text>
                    <Divider />
                </View>
            </View>
            <View style ={styles.paymentContainer}>
                <View>
                    <Text style={styles.subHeading}>Bill</Text>
                    <Text style={styles.paymentText}>200&#x20B9;</Text>
                </View>
                <Button title='Make Payment' buttonStyle={styles.button} onPress={props.onPress}/>
            </View>
        </View>
    )
}

export default Modal;