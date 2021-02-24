import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//Make a component
const ButtonScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.textStyle}>Welcome to button Screen !</Text>
			<Button onPress={() => navigation.navigate('LoginScreen1')} title="Go to Login Demo" />
			<Button title="Go to List Demo" onPress={() => navigation.navigate('ListScreen')} />
            <Button title="Go to Image Demo" onPress={() => navigation.navigate('ImageScreen')} />
			<Button title="Go to Counter Demo" onPress={() => navigation.navigate('CounterScreen')} />
			<Button title="Go to Color Demo" onPress={() => navigation.navigate('ColorScreen')} />
			<Button title="Go to Square Demo" onPress={() => navigation.navigate('SquareScreen')} />
			{/* <TouchableOpacity onPress={()=>props.navigation.navigate("ListScreen")}>
             <Text>Go to List Demo</Text>
             <Text>Go to List Demo</Text>
             <Text>Go to List Demo</Text>
         </TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

//Make the component available to other parts of the app
export default ButtonScreen;
