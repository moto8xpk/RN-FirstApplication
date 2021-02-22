import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// child component
import ImageDetail from './Image/ImageDetail';

//Make a component pass title to child ImageDetail component
//pass image source fo
const ImageScreen = () => {
	return (
		<View>
			<ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
			<ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={7} />
			<ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={10} />
			<ImageDetail title="Gy" imageSource={require('../../assets/gy_angle.jpg')} score={11} />
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
	},
});

//Make the component available to other parts of the app
export default ImageScreen;
