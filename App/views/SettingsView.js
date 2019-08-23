import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/auth';

const styles = StyleSheet.create({


})

class SettingsView extends React.Component {


	render() {
		return (
			<View style={{ flex: 1}} >
				<Text>SettingsView</Text>
				<Button title="logout" onPress={() => {this.props.logout()}} />
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logoutRequest())
	}
}
export default connect(null, mapDispatchToProps)(SettingsView);