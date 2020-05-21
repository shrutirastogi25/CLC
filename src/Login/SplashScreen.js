/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.moveToNextScreen();
    }, 4000);
  }
  moveToNextScreen = () => {
    this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Color.White,
        }}>
        <StatusBar
          backgroundColor={Color.App_Background}
          barStyle="dark-content"
        />
        <Image
          style={{}}
          source={require('../Assets/AppLogo.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
}
