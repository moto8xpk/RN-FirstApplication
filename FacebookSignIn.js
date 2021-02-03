import React , { Component }from 'react';
import { Button } from 'react-native';

import auth from '@react-native-firebase/auth';
import FBSDK, { LoginManager,AccessToken } from 'react-native-fbsdk';
import * as Facebook from 'expo-facebook';

const facebook = async () => {
    let results = await new LoginManager.logInWithPermissions(['email']);
    console.log(results);
    };

export class FacebookSignIn extends Component {
  render(){
    return (
        <Button
          title="Facebook Sign-In"
          
          onPress={() => onFacebookButtonPress().then(() => alert('Signed in with Facebook!'))}
        />
      );
  }
};

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


    