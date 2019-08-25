import React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Counter from 'react-native-counter';
import { SocialIcon, Button, Divider } from 'react-native-elements'
import { COLOR_BACKGROUNG_DISABLE, COLOR_DARK_GREY, COLOR_YELLOW, COLOR_RED, COLOR_BLUE, COLOR_LIGHT_BLUE } from '../constants/color';
import shareStyles from './Styles';

import { connect } from 'react-redux';
import { logoutRequest } from '../actions/auth';


const DURATION = 2000

const styles = StyleSheet.create({
	LeaderBoardNav: {
		position: 'absolute',
		top: 15,
		right: 10,
	},
	header: {
		marginTop: 24,
		marginHorizontal: 30,
	},
	counterText: {
		...shareStyles.text,
		fontSize: 70,
		fontWeight: "500",
		color: '#45454d'

	},
	status: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		...shareStyles.text,
		fontWeight: "500",
		textAlign: 'center',
		marginVertical: 30,
		fontSize: 24,
		color: COLOR_DARK_GREY
	},
	percentText: {
		...shareStyles.text,
		color: COLOR_BACKGROUNG_DISABLE,
		fontSize: 16,
	},
	leaderBoardContainer: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	icon: {
		padding: 30,
		borderRadius: 60,
		backgroundColor: '#fafafc'
	},
	leaderBoardText: {
		...shareStyles.text,
		fontSize: 35,
		fontWeight: "500",
		textAlign: "center",
		color: COLOR_DARK_GREY,
	},
	optionContainer: {
		paddingVertical: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	optionText: {
		fontFamily: 'open-sans',
		fontSize: 16,
		marginLeft: 20
	}
});
class ProfileView extends React.Component {

	randerStatus = () => {
		return (
			<View
				style={styles.status}
			>
				<AnimatedCircularProgress
					size={220}
					width={15}
					fill={68}
					rotation={0}
					tintColor={COLOR_BLUE}
					lineCap={"round"}
					duration={DURATION}
					backgroundColor="#fcfcfc"
					children={() =>
						<>
							<Counter
								end={45}
								start={0}
								time={DURATION}
								easing="linear"
								style={styles.counterText}
							/>
							<Text style={styles.percentText}>45/100</Text>
						</>

					}
				>
				</AnimatedCircularProgress>

			</View>

		);
	}

	handleLogOut = () => {
		const { logout } =this.props;
		logout();
	}

	render() {
		const { navigation } = this.props;
		return (
			<ScrollView style={{ flex: 1 }}>
			<SafeAreaView style={styles.header} forceInset={{ bottom: 'never' }}>
				<StatusBar backgroundColor='black' barStyle="light-content" />
					<Text style={styles.title}>Pranav Pandey</Text>
					{this.randerStatus()}
					<Text></Text>
					<View style={styles.leaderBoardContainer}>
						<View>
							<FontAwesome name='globe' size={30} color={'#0080ff'} style={styles.icon} />
							<Text style={styles.leaderBoardText}> 70</Text>
						</View>
						<View>
							<FontAwesome name='users' size={30} color={'#0080ff'} style={styles.icon} />
							<Text style={styles.leaderBoardText}> 470</Text>
						</View>
					</View>
					<View style={styles.optionContainer}>
						<Entypo name='share' color={COLOR_BLUE} size={30} style={{}}/>
						<Text style={styles.optionText}>Share</Text>
					</View>
					<Divider />
					<TouchableWithoutFeedback 
						onPress={() => navigation.navigate('LeaderBoard')}
					>
					<View style={styles.optionContainer}>
						<FontAwesome name='trophy' color={COLOR_YELLOW} size={30} style={{}}/>
						<Text style={styles.optionText}>Leader Board</Text>
					</View>
					</TouchableWithoutFeedback>
					<Divider />
					<TouchableWithoutFeedback 
						onPress={this.handleLogOut}
					>
						<View style={styles.optionContainer}>
						<FontAwesome name='power-off' color={COLOR_RED} size={30} style={{}}/>
						<Text style={styles.optionText}>Log Out</Text>
						</View>
					</TouchableWithoutFeedback>
			
			</SafeAreaView>
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout : () => dispatch(logoutRequest())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);