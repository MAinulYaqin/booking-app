import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo, { AppLoading } from 'expo';
import { StyleProvider, Root } from 'native-base';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			isLoading: true
		};
	}

	async componentWillMount() {
		Expo.Font.loadAsync({
			Roboto: await require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: await require('native-base/Fonts/Roboto_medium.ttf'),
			Ionicons: await require('@expo/vector-icons/fonts/Ionicons.ttf')
		});

		this.setState({ isLoading: false });
	}

	render() {
		if (this.state.isLoading) {
			return (
				<AppLoading>
					<Root />
				</AppLoading>
			);
		} else
			return (
				<StyleProvider>
					<View style={styles.container}>
						<Text>Open up App.js to start working on your app!</Text>
					</View>
				</StyleProvider>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
