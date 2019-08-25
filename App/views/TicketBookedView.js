import React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { COLOR_GREEN, COLOR_BLUE, COLOR_DARK_GREY, COLOR_YELLOW } from '../constants/color';
import { Divider } from 'react-native-elements';
import sharedStyles  from './Styles';

/* const ticket = {
    _id: 'sdasdasdasdasd',
    from: 'From',
    to: 'To',
    userId: 'sdasdasdasdas',
    routeId: 'dasdasdasdasda1212112',
    billAmount: 200,
    isCash: false,
    paymentMode: 'paytm',
    time: new Date()
} */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    successFullText: {
        ...sharedStyles.text,
        fontSize: 20,
        fontWeight: "500"
    },
    successContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 40
    },
    subHeading: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: COLOR_BLUE,
        fontWeight: "400"
    },
    infoText: {
        fontFamily: 'open-sans',
        fontSize: 20
    },
    footerText: {
        ...sharedStyles.text,
        marginVertical: 8,
        fontSize: 12,
        color: COLOR_DARK_GREY
    },
    steakContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})
export default class TicketBookedView extends React.Component {

    constructor(props) {
        super(props);
        this.ticket = props.navigation.getParam('ticket')
    }
    renderSteakAdded = () => {
        return (
            <View style={styles.steakContainer}>
                <Text style={{fontFamily: 'open-sans'}}>Streak Added</Text>
                <FontAwesome name='star' size={20} color={COLOR_YELLOW} />
            </View>
        );
    }
    render() {
        const { ticket } = this;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.successContainer}>
                    <Text style={styles.successFullText}>Ticket Booked Successfully</Text>
                    <MaterialIcons name='stars' size={24} color={COLOR_BLUE} />
                </View>
                <View style={styles.infoContainer}>
                    <QRCode
                        size={150}
                        value={JSON.stringify(ticket)}
                    />
                    <View style={{ marginStart: 10, flex: 1 }}>
                        <Text style={styles.subHeading}>From</Text>
                        <Text style={styles.infoText}>{ticket.from}</Text>
                        <Divider style={{ margin: 10 }} />
                        <Text style={styles.subHeading}>To</Text>
                        <Text style={styles.infoText}>{ticket.to}</Text>
                    </View>
                </View>
                {this.renderSteakAdded()}
                <Divider />
                <Text style={styles.footerText}>Transction ID: 12580055525</Text>
                <Text style={styles.footerText}>{ticket.time.toString()}</Text>
            </ScrollView>
        );
    }
}