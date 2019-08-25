import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import MapViewComponent, { Polyline, Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Modalize from 'react-native-modalize';
import {
	Ionicons, AntDesign, FontAwesome, Entypo, MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';
import { connect } from 'react-redux';

import CircularButton from '../../components/CircularButton';
import Modal from './Modal';

import { COLOR_GREEN, COLOR_RED, COLOR_BLUE } from '../../constants/color';
const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFill
	},
	backButton: {
		position: 'absolute',
		top: 30,
		left: 12,
		backgroundColor: COLOR_RED,
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'open-sans',
		position: 'absolute',
		top: 30,
		left: 70,
		backgroundColor: COLOR_BLUE,
		padding: 12,
		right: 70,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '400',
		fontSize: 16,
		color: 'white',
		textAlign: 'center'
	}
})



const SELECTION = {
	ROUTE: 'ROUTE',
	PICKUP: 'PICKUP',
	DROP: 'DROP'
}

class MapView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: null,
			stops: [],
			selection: SELECTION.ROUTE,
			pickup: {},
			drop: {},
			billAmount: 120
		}
		this.modal = React.createRef();
	}

	componentDidMount() {
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permission to access location was denied',
				location,
			});
		}
	}

	handlePathTouch = (item) => {
		const { route } = item
		this.setState({
			routes: [item],
			stops: route.stops,
			selection: SELECTION.PICKUP
		});
	}

	navigatePaymentGateway = () => {
		const { pickup, drop, routes, billAmount } = this.state;
		const { navigation, userId } = this.props;
		navigation.navigate('PaymentView', {ticket: {
			from: pickup.name,
			to: drop.name,
			userId,
			routeId: routes && routes[0]._id,
			billAmount: 1,
			valid: true
		}});
		this.modal.current.close()
	}

	onBackPress = () => {
		const { selection } = this.state;
		if (selection === SELECTION.PICKUP) {
			this.restoreInitial();
		} else if (selection === SELECTION.DROP) {
			this.setState({ selection: SELECTION.PICKUP, pickup: {}});
		}
	}

	restoreInitial = () => {
		this.setState({
			routes: null,
			stops: [],
			selection: SELECTION.ROUTE,
			pickup: {},
			drop: {}
		})
	}

	openModal = () => {
		const modal = this.modal.current;

		if (modal) {
			modal.open();
		}
	};

	onMarkerPress = (coordinate, name) => {
		const { selection } = this.state;
		if (selection === SELECTION.PICKUP) {
			this.setState({
				pickup: {
					coordinate,
					name
				}
			});
			return this.setState({
				selection: SELECTION.DROP
			});
		}
		this.setState({
			drop: {
				coordinate, name
			}
		});
		this.openModal();
	}


	renderRoutes = () => {
		let { routes } = this.state;
		if (!routes) {
			routes = this.props.routes;
		}
		return (
			routes.map((item) => {
				const { route } = item;
				return (
					<Polyline
						key={item._id}
						coordinates={route.path}
						strokeColor={COLOR_GREEN}
						strokeWidth={6}
						tappable={true}
						onPress={() => this.handlePathTouch(item)}
					/>
				)
			})
		)
	}


	renderStops = () => {
		const { stops } = this.state;
		return (
			stops.map((item, key) => (
				<Marker
					key={key}
					coordinate={item.coordinate}
					title={item.name}
					onPress={({ coordinate }) => this.onMarkerPress(coordinate, item.name)}
				>
					<MaterialCommunityIcons color={COLOR_RED} size={20} name='map-marker' />
				</Marker>
			)))
	}

	renderModalContent = () => {
		const { pickup, drop, billAmount } = this.state;
		return (
			<Modal 
				onPress={this.navigatePaymentGateway}
				pickup={pickup}
				drop={drop}
				billAmount={billAmount}
			/>
		)
	}

	renderOptions = () => {
		const { selection } = this.state;
		if (selection === SELECTION.ROUTE)
			return null;
		return (
			<CircularButton
				onPress={this.onBackPress}
				style={styles.backButton}
			>
				<Ionicons size={25} name='md-arrow-back' color='white' />
			</CircularButton>
		)
	}

	renderTitle = () => {
		const { selection } = this.state;
		if(selection===SELECTION.ROUTE){
			return null;
		}
		return (
			<Text
				style={styles.title}
			>
				{selection === SELECTION.PICKUP ? 'Please Select Your PickUp location' : 'Please Select Your Drop location'}
			</Text>)
	}

	render() {
		return (
			<React.Fragment>
				<MapViewComponent
					style={styles.map}
					initialRegion={{
						latitude: 23.1893472,
						longitude: 72.628909,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					showsUserLocation={true}
				>
					{this.renderRoutes()}
					{this.renderStops()}
				</MapViewComponent>
				{this.renderOptions()}
				{this.renderTitle()}
				<Modalize
					ref={this.modal}
					adjustToContentHeight={true}
					onClosed={this.restoreInitial}
				>
					{this.renderModalContent()}
				</Modalize>

			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.auth && state.auth.user && state.auth.user._id,
		routes: state.routes || []
	}
}

export default connect(mapStateToProps)(MapView);