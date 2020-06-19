/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackActions} from '@react-navigation/native';

// import { moderateScale, isTabDevice, isiPhoneX } from '../reusableComponents/DeviceInfo';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  goBack = () => {
    this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flex: 1, left: 10, justifyContent: 'center'}}>
            <Ionicons
              style={{elevation: 7}}
              size={20}
              name={'md-arrow-round-back'}
              onPress={() => this.goBack()}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              right: 10,
              justifyContent: 'center',
            }}>
            <Ionicons
              size={20}
              name={'md-create'}
              onPress={() => alert('Dhruv')}
            />
          </View>
        </View>
        <View style={{flex: 15}}>
          <View style={{flex: 2}}>
            <View style={{flex: 3, flexDirection: 'row', left:10}}>
              <View
                style={{
                  flex: 1,
                  borderRadius: 100,
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  marginTop:20,
                  marginLeft:20,
                  marginBottom:20,
                  marginRight:20,
                }}>
                <Ionicons
                  size={60}
                  name={'md-person'}
                  onPress={() => this.goBack()}
                />
              </View>
              <View style={{flex: 4, backgroundColor: 'green'}} />
            </View>
          </View>
          <View style={{backgroundColor: 'blue', flex: 2}} />
          <View style={{flex: 4, backgroundColor: 'red'}} />
        </View>
      </View>
    );
  }
}
