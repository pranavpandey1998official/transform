import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { globalLeaderBoard } from './fakedata'
import { COLOR_BLUE, COLOR_YELLOW } from '../constants/color';

export default class GlobalLeaderBoardView extends React.Component {

	renderItem = ({ item }) => {
		return (
		<ListItem
			title={item.name}
			leftIcon={<FontAwesome name='user-circle-o' size={30} color={COLOR_BLUE} />}
			rightIcon={<FontAwesome name='star-o' size={30} color={COLOR_YELLOW} />}
			rightTitle={item.streak.toString()}
			bottomDivider={true}
		/>
		)
	}
	keyExtractor = (item, index) => index.toString()
	render() {
		return (
			<FlatList
				data={globalLeaderBoard}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderItem}
			/>
		);
	}
}