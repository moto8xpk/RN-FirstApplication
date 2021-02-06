import React , { Component }from 'react';
import { Button } from 'react-native';

import auth from '@react-native-firebase/auth';
import FBSDK, { LoginManager,AccessToken } from 'react-native-fbsdk';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Facebook from 'expo-facebook';

const facebook = async () => {
    let results = await new LoginManager.logInWithPermissions(['email']);
    console.log(results);
    };

export class FacebookSignIn extends Component {
  render(){
    return (
        // <Button
        //   title="Facebook Sign-In"
          
        //   onPress={() => onFacebookButtonPress().then(() => alert('Signed in with Facebook!'))}
        // />
        <TouchableOpacity style={styles.facebookButton}  onPress={() => onFacebookButtonPress().then(() => alert('Signed in with Facebook!'))}>
              <Text style={styles.loginButtonText}>Facebook</Text>
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: '#1095f4',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default FacebookSignIn


async function onFacebookButtonPress() {
    try {
        await Facebook.initializeAsync({
          appId: '<APP_ID>',
        });
        const {
          type,
          token,
          expirationDate,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
}


    