import React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-navigation';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Counter from 'react-native-counter';
import { SocialIcon, Button } from 'react-native-elements'


const DURATION = 2000

const styles = StyleSheet.create({
	LeaderBoardNav: {
		position: 'absolute',
		top: 15,
		right: 10,
		margin: 10
	},
	header: {
		marginTop: 24
	},
	counterText: {
		color: '#00e0ff',
		fontSize: 70,
		fontWeight: "600"

	},
	status: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 50
	},
	socialButtons: {
		marginHorizontal: 20
	},
	socialContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {
		borderRadius: 50,
		marginHorizontal: 40,
		marginVertical: 5
	}
});
export default class ProfileView extends React.Component {

	randerStatus = () => {
		return (
			<View
				style={styles.status}
			>
				<AnimatedCircularProgress
					size={220}
					width={10}
					fill={68}
					rotation={0}
					tintColor="#00e0ff"
					lineCap={"round"}
					duration={DURATION}
					backgroundColor="#3d5875"
					children={() => <Counter
						end={45}
						start={0}
						time={DURATION}
						easing="linear"
						style={styles.counterText}
					/>}
				>
				</AnimatedCircularProgress>
			</View>);
	}

	renderLeaderBoardNav = () => {
		const { navigation } = this.props;
		return (
			<TouchableOpacity
				style={styles.LeaderBoardNav}
				onPress={() => navigation.navigate('LeaderBoard')}
			>
				<MaterialCommunityIcons name='trophy-award' size={40} color='#00e0ff' />
			</TouchableOpacity>
		)
	}
	render() {
		return (
			<SafeAreaView style={styles.header} forceInset={{ bottom: 'never' }}>
				<StatusBar backgroundColor='black' barStyle="light-content" />
				{this.renderLeaderBoardNav()}
				{this.randerStatus()}
				<View
					style={styles.socialContainer}
				>
				<SocialIcon
					title='Share'
					style={styles.socialButtons}
					type='facebook'
				/>
				<SocialIcon
					title='Share'
					style={styles.socialButtons}
					type='instagram'
				/>
				</View>
				<Button
					icon={
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={32}
							color="white"
						/>
					}
					buttonStyle={styles.button}
					title="Redeem"
				/>
				<Button
					icon={
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={32}
							color="white"
						/>
					}
					buttonStyle={styles.button}
					title="Redeem"
				/>
				<Button
					icon={
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={32}
							color="white"
						/>
					}
					buttonStyle={styles.button}
					title="Redeem"
				/>
			</SafeAreaView>
		);
	}
}