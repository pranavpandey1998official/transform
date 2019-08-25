import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/auth';
import QRCode from 'react-native-qrcode-svg';

import { WIDTH } from '../constants/Dimensions'

export default class QRView extends React.Component {

    constructor(props) {
        super(props);
        this.ticket = props.navigation.getParam('ticket');
    }

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
				<QRCode
                    size={WIDTH-20}
					value={JSON.stringify(this.ticket)}
                />
			</View>
		);
	}
}
