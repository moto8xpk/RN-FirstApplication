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
import LoginScreen1 from "./src/components/LoginScreen";
import ListScreen from "./src/components/ListScreen";
import ButtonScreen from "./src/components/Button";
import ImageScreen from "./src/components/ImageScreen";
import ColorScreen from "./src/components/ColorScreen";
import SquareScreen from "./src/components/SquareScreen";
import CounterScreen from "./src/components/Counter/CounterScreen";
import { createAppContainer } from 'react-navigation';

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
			<Stack.Navigator initialRouteName="ButtonScreen" screenOptions={{ headerShown: false }} >
				<Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
				<Stack.Screen name="Settings" component={Settings}></Stack.Screen>
				<Stack.Screen name="FormLogin" component={FormLogin}></Stack.Screen>
				<Stack.Screen name="Header" component={Header}></Stack.Screen>
				<Stack.Screen name="LoginScreen1" component={LoginScreen1} ></Stack.Screen>
				<Stack.Screen name="ListScreen" component={ListScreen} ></Stack.Screen>
				<Stack.Screen name="ButtonScreen" component={ButtonScreen} ></Stack.Screen>
				<Stack.Screen name="ImageScreen" component={ImageScreen} ></Stack.Screen>
				<Stack.Screen name="CounterScreen" component={CounterScreen} ></Stack.Screen>
				<Stack.Screen name="ColorScreen" component={ColorScreen} ></Stack.Screen>
				<Stack.Screen name="SquareScreen" component={SquareScreen} ></Stack.Screen>
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

