import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Settings from './Settings';
import {FacebookSignIn} from './FacebookSignIn';
import Header from "./src/components/Header";

import { FormLogin } from './FormLogin';

const Stack = createStackNavigator();

const HomeComponent = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header/>

			<Button
				title="Go to Detail"
				onPress={() => {
					navigation.navigate('Settings');
					// navigation.push('Settings');
				}}
			></Button>

			<Button
				title="Go to FormLogin"
				onPress={() => {
					navigation.navigate('FormLogin');
					// navigation.push('Settings');
				}}
			></Button>
			<FacebookSignIn></FacebookSignIn>
		</View>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="FormLogin">
				<Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
				<Stack.Screen name="Settings" component={Settings}></Stack.Screen>
				<Stack.Screen name="FormLogin" component={FormLogin}></Stack.Screen>
				<Stack.Screen name="Header" component={Header}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

