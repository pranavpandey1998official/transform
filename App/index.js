import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {
	Ionicons, AntDesign, FontAwesome, Entypo,
	MaterialCommunityIcons
} from '@expo/vector-icons';
import {Provider}  from 'react-redux';
import * as Font from 'expo-font';

import store from './lib/createStore';
import Navigation from './lib/Navigation';
import init from '../App/actions/init';

import MapView from './views/MapView';
import StreakView from './views/StreakView';
import SignInView from './views/SignInView';
import TicketRecordView from './views/TicketRecordView';
import GlobalLeaderBoardView from './views/GlobalLeaderBoardView';
import LocalLeaderBoardView from './views/LocalLeaderBoardView';
import SignUpView from './views/SignUpView';
import PaymentView from './views/PaymentView';
import TicketBookedView from './views/TicketBookedView';
import { COLOR_GREEN } from './constants/color';
import AppLoadingView from './views/AppLoadingView';
import QRView from './views/QRView';

import { COLOR_BLUE } from './constants/color'
const LeaderBoardStack = createMaterialTopTabNavigator({
	Global: GlobalLeaderBoardView,
	Local: LocalLeaderBoardView
}, {
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let Icon;
				if (routeName === 'Global') {
					Icon = <FontAwesome name='globe' size={25} color={tintColor} />;

				} else if (routeName === 'Local') {
					Icon = <FontAwesome name='users' size={25} color={tintColor} />;
				} 
				return Icon;
			}
		}),
		tabBarOptions: {
			activeTintColor: COLOR_BLUE,
			inactiveTintColor: 'gray',
			showIcon: true,
			tabStyle: {
				flexDirection: 'row',
				backgroundColor: 'white'
			},
			style: {
				backgroundColor: 'white'
			},
			indicatorStyle: {
				backgroundColor: 'tomato'
			}
		},
		swipeEnabled: false
	}
)

const StreakStack = createStackNavigator({
	Streak: {
		screen: StreakView,
		navigationOptions: () => ({
			header: null
		})
	},
	LeaderBoard: {
		screen:	LeaderBoardStack,
		navigationOptions: () => ({
			title: 'Leader Board',
			headerTitleStyle: {
				fontFamily: 'open-sans'
			}
		})
	}
}, {
		initialRouteName: 'Streak',
	}
)

StreakStack.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}

	return {
		tabBarVisible,
	};
}
 
const BookingStack = createStackNavigator({
	MapView: {
		screen: MapView,
		navigationOptions: () => ({
			header: null
		})
	},
	PaymentView: {
		screen: PaymentView,
		navigationOptions: () => ({
			title: 'Select Payment Options',
			headerTitleStyle: {
				fontFamily: 'open-sans'
			}
		})
	},
	TicketBookedView: {
		screen: TicketBookedView,
		navigationOptions: ({navigation}) => ({
			headerLeft: () => (
				<Entypo 
					name='cross'
					size={40}
					style={{marginLeft: 10}}
					color={COLOR_GREEN}
					onPress={()=> navigation.navigate('MapView')}
				/>)
		})
	}
})

const BookedRecordStack =  createStackNavigator({
	TicketRecordView: {
		screen: TicketRecordView,
		navigationOptions: () => ({
			title: 'Booked History',
			headerTitleStyle: {
				fontFamily: 'open-sans'
			}
		})
	},
	QRView: {
		screen: QRView,
		navigationOptions: () => ({
			title: 'SCAN',
			headerTitleStyle: {
				fontFamily: 'open-sans'
			}
		})
	}
})
const AppStack = createBottomTabNavigator({
	Map: BookingStack,
	Ticket: BookedRecordStack,
	Streak: StreakStack,
}, {
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let Icon;
				if (routeName === 'Map') {
					Icon = <FontAwesome name='map-marker' size={25} color={tintColor} />;

				} else if (routeName === 'Streak') {
					Icon = <MaterialCommunityIcons name='star-box-outline' size={25} color={tintColor} />;
				} else if (routeName === 'Ticket') {
					Icon = <FontAwesome name='ticket' size={25} color={tintColor} />
				}
				return Icon;
			},
		}),
		tabBarOptions: {
			activeTintColor: COLOR_BLUE,
			inactiveTintColor: 'gray',
			showIcon: true,
			labelStyle: {
				fontFamily: 'open-sans'
			}
		},
	});

const AuthStack = createStackNavigator({
	SignIn: {
		screen: SignInView,
		navigationOptions: () => ({
			header: null
		})
	},
	SignUpView: {
		screen: SignUpView,
		navigationOptions: () => ({
			title: 'Sign Up',
			headerTitleStyle: {
				fontFamily: 'open-sans'
			}
		})
	}
})

const App = createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AppLoadingView,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthLoading',
	}
));

export default class Root extends React.Component {
	constructor(props) {
		super(props);
		this.init();
	}
	init = async() => {
		await Font.loadAsync({
			Montserrat: require('./statics/Montserrat-Regular.ttf'),
			'open-sans': require('./statics/OpenSans.ttf')
		  });
		store.dispatch(init())
	}

	render() {
		return (
			<Provider store={store}>
				<App
					ref={(navigatorRef) => {
						Navigation.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</Provider>
		);
	}
}