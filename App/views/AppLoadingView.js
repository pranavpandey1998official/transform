import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default class TicketView extends React.Component {

	renderItem = () => {
		
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Image style={{maxHeight: 200, maxWidth: 200 }} source={require('../statics/LOGO.jpeg')} />
			</View>
		);
	}
}