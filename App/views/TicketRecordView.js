import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements'
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

import { COLOR_GREEN, COLOR_BLUE, COLOR_DARK_GREY, COLOR_YELLOW, COLOR_RED, COLOR_BACKGROUNG_DISABLE, COLOR_BACKGROUNG, COLOR_GREY } from '../constants/color';
import sharedStyles from './Styles';
const tickets = [
	{
		_id: 'sdasdasdasdasd',
		from: 'From',
		to: 'To',
		userId: 'sdasdasdasdas',
		routeId: 'dasdasdasdasda1212112',
		billAmount: 200,
		isCash: false,
		paymentMode: 'paytm',
		time: new Date(),
		valid: true
	}
]
const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: 'white',
		marginHorizontal: 10,
		marginVertical: 5,
		borderRadius: 5
	},
	subHeading: {
		fontSize: 10,
		color: COLOR_BLUE,
		fontWeight: "400"
	},
	infoText: {
		fontFamily: 'open-sans',
		fontSize: 14,
		marginLeft: 5
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 10
	},
	iconContainer: {

		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	textHeader: {
		fontFamily: 'open-sans',
		fontSize: 12,
		color: COLOR_GREY
	},
	headerContainer: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: 'row',
		padding: 10
	}
})

class TicketRecordView extends React.Component {

	onItemPress = (item) => {
		this.props.navigation.navigate('QRView', { ticket: item })
	}
	renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => this.onItemPress(item)}
				style={styles.itemContainer}
				disabled={!item.valid}
			>
				<View style={styles.headerContainer}>
					<Text style={styles.textHeader}> Order No {item._id}</Text>
					<Text> {item.date}</Text>
				</View>
				<Divider />
				<View style={styles.infoContainer}>
					<Entypo name='ticket' color={item.valid ? '#6eb39b' : '#d4675d' } size={60} />
					<View style={{ marginLeft: 10, flex: 1, justifyContent: 'space-between'}}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Ionicons name='ios-arrow-dropdown-circle' color='#28a5f4' size={25} />
							<Text style={styles.infoText}>{item.from}</Text>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Ionicons name='md-pin' color='#ee4d37' size={25} />
							<Text style={styles.infoText}>{item.to}</Text>
						</View>
					</View>

				</View>
			</TouchableOpacity>
		)
	}

	render() {
		const { bookedTickets } = this.props;
		return (

			<FlatList
				style={{ flex: 1 }}
				keyExtractor={(item) => item._id}
				data={bookedTickets}
				renderItem={this.renderItem}
				style={{ backgroundColor: COLOR_BACKGROUNG }}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		bookedTickets: state.bookedTickets
	}
}
export default connect(mapStateToProps)(TicketRecordView)