import React from 'react';
import { Button, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class TicketView extends React.Component {

	renderItem = () => {
		
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>TicektView</Text>
				<QRCode
					value="http://awesome.link.qr"
				/>
			</View>
		);
	}
}