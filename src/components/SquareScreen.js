import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './ColorCounter';
//Make a component

const COLOR_INCREASEMENT = 15;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		// color = 'red', 'green','blue'
		// change === +15,-15
		switch (color) {
			case 'red':
				red + change > 255 || red + change < 0 ? null : setRed(red + change);
				return;
				break;
			case 'green':
				green + change > 255 || green + change < 0 ? null : setGreen(green + change);
				return;
				break;
			case 'blue':
				blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
				return;
				break;
			default:
				return;
				break;
		}
	};

	return (
		<View>
			<ColorCounter
				onIncrease={() => {
					setColor('red', COLOR_INCREASEMENT);
				}}
				onDecrease={() => {
					setColor('red', -1 * COLOR_INCREASEMENT);
				}}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() => {
					setColor('green', COLOR_INCREASEMENT);
				}}
				onDecrease={() => {
					setColor('green', -1 * COLOR_INCREASEMENT);
				}}
				color="Green"
			/>
			<ColorCounter
				onIncrease={() => {
					setColor('blue', COLOR_INCREASEMENT);
				}}
				onDecrease={() => {
					setColor('blue', -1 * COLOR_INCREASEMENT);
				}}
				color="Blue"
			/>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
	},
});

//Make the component available to other parts of the app
export default SquareScreen;
