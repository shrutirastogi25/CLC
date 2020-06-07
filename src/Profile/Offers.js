/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default class Offers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  onClickListener = viewId => {
    if (viewId === 'profile') {
      this.props.navigation.dispatch(StackActions.replace('Profile'));
    } else if (viewId === 'notifications') {
      this.props.navigation.dispatch(StackActions.replace('Notification'));
    } else if (viewId === 'offer') {
      this.props.navigation.dispatch(StackActions.replace('Offers'));
    }
  };

  render() {
    return (
      <View style={{flex: 5}}>
        <View style={{flex: 4}}>
          <Text>Offers</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onClickListener('offer')}
            style={{flex: 1, backgroundColor: 'red'}}
          />
          <TouchableOpacity
            onPress={() => this.onClickListener('profile')}
            style={{flex: 1, backgroundColor: 'green'}}
          />
          <TouchableOpacity
            onPress={() => this.onClickListener('notifications')}
            style={{flex: 1, backgroundColor: 'blue'}}
          />
        </View>
      </View>
    );
  }
}
