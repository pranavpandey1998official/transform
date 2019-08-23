import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import {
	Ionicons, AntDesign, FontAwesome, Entypo, MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';
import { COLOR_RED, COLOR_GREY, COLOR_BACKGROUNG_DISABLE } from '../constants/color'
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Paytm from '../statics/paytm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    payment: {
        fontWeight: "500",
        fontSize: 25
    },
    header: {
        fontWeight: "500",
        fontSize: 22
    },
    block: {
        paddingVertical: 10
    },
    subheading: {
        fontSize: 14,
        color: COLOR_RED,
    },
    divider: {
        marginHorizontal: 0
    },
    item: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemText: {
        paddingHorizontal: 10,
        fontWeight: "500",
        fontSize: 16
    },
    paytm:{
        height: 30,
        width: 30
    }
})
export default class TicketView extends React.Component {

    sectionDivider = () => (
        <View style={{height: 15}}>

        </View>
    )

    navigateToTicketBooked = () => {
        const { navigation } = this.props;
        navigation.navigate('TicketBookedView');
    }

	render() {
		return (

			<ScrollView style={styles.container}>
                <View style={styles.block}> 
                    <Text style={styles.payment}> Pay &#x20B9;200</Text>
                </View>

                {this.sectionDivider()}

                <View style={styles.block}> 
                    <Text style={styles.header}>Online Payment</Text>
                    <Text style={styles.subheading}>This will be available by our next version</Text>
                </View>
                <Divider style={styles.divider} />

                <TouchableOpacity style={[styles.item, {color: COLOR_BACKGROUNG_DISABLE}]} disabled>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <AntDesign name='creditcard' size={30} />
                        <Text style={styles.itemText}>Credit & Debit Cards</Text>
                    </View>
                    <Ionicons name='ios-arrow-forward' size={20} color={COLOR_GREY}/>
                </TouchableOpacity>
                <Divider style={styles.divider} />

                <TouchableOpacity style={styles.item} disabled>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <Entypo name='network' size={30} />
                        <Text style={styles.itemText}>Netbanking</Text>
                    </View>
                    <Ionicons name='ios-arrow-forward' size={20} color={COLOR_GREY}/>
                </TouchableOpacity>

                {this.sectionDivider()}

                <View style={styles.block}> 
                    <Text style={styles.header}>Cash</Text>
                </View>
                <Divider style={styles.divider} />
                <TouchableOpacity style={styles.item}>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <MaterialCommunityIcons name='cash' size={30} />
                        <Text style={styles.itemText}>Cash on pickup</Text>
                    </View>
                    <Ionicons name='ios-arrow-forward' size={20} color={COLOR_GREY}/>
                </TouchableOpacity>

                {this.sectionDivider()}

                <View style={styles.block}> 
                    <Text style={styles.header}>Wallet</Text>
                </View>
                <Divider style={styles.divider} />
                <TouchableOpacity style={styles.item} onPress={this.navigateToTicketBooked}>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <Paytm height={40} width={50}/>
                        <Text style={styles.itemText}>Paytm</Text>
                    </View>
                    <Ionicons name='ios-arrow-forward' size={20} color={COLOR_GREY}/>
                </TouchableOpacity>
            </ScrollView>
		);
	}
}