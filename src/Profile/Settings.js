/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
