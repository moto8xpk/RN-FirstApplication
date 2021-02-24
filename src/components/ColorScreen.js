import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

//Make a component
const ColorScreen = () => {
	const [colors, setColors] = useState([]);
	console.log(colors);
	return (
		<View>
			<Button
				title="Add a Color"
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
	},
});

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`;
};

//Make the component available to other parts of the app
export default ColorScreen;
