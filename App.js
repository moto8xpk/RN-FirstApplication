import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Settings from './Settings';

import { FormLogin } from './FormLogin';
import {FBLoginButton} from "./FBLoginButton";

const Stack = createStackNavigator();

const HomeComponent = ({ navigation }) => {
	return (
		<View style={styles.container}>
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
		</View>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
				<Stack.Screen name="Settings" component={Settings}></Stack.Screen>
				<Stack.Screen name="FormLogin" component={FormLogin}></Stack.Screen>
        <Stack.Screen name="FBLoginButton" component={FBLoginButton}></Stack.Screen>
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

