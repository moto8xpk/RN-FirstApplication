import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//Make a component
const ColorCounter = ({color,onIncrease,onDecrease}) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button title={`Increase ${color}`} onPress={()=>onIncrease()} />
			<Button title={`Decrease ${color}`} onPress={()=>onDecrease()}/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
	},
});

//Make the component available to other parts of the app
export default ColorCounter;
