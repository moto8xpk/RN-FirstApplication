import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

//get the "title" props from parent ImageScreen component
const ImageDetail = ({imageSource,title,score}) => {
	return <View>
        <Image source={imageSource}/>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.textStyle}>Image score: {score}</Text>
    </View>
    
};

const styles = {
	textStyle: {
		fontSize: 20,
	},
};

//Make the component available to other parts of the app
export default ImageDetail;
