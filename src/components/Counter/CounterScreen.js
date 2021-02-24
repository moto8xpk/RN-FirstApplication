import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//Make a component
const CounterScreen = () => {
	const [counter, setCounter] = useState(0);
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
                    //dont do this
					// counter++;
                    setCounter(counter+1);
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
                    setCounter(counter-1);
				}}
			/>
			<Text style={styles.textStyle}>Current Count: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
	},
});

//Make the component available to other parts of the app
export default CounterScreen;
