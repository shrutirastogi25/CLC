/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Utils/Color';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationSwitch: false,
      fbSwitch: false,
      instaSwitch: false,
      gmailSwitch: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1.5}}>
          <Text>Personal Details</Text>
          <View style={{flex: 1}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Ionicons size={20} name={'md-mail'} />
              <Text style={styles.darkText}>Email</Text>
              <Text style={styles.lighText}>shruti.rastogi2501@gmail.com</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Ionicons size={20} name={'md-lock'} />
              <Text style={styles.darkText}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.darkText}>Notifications</Text>
              <Switch
                trackColor={{false: '#C0C0C0', true: '#BA55D3'}}
                thumbColor={'#F5F5F5'}
                style={styles.switchContainer}
                value={this.state.notificationSwitch}
                onValueChange={notificationSwitch =>
                  this.setState({notificationSwitch})
                }
              />
            </View>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Text>Connected Accounts</Text>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.darkText}>Facebook</Text>
              <Switch
                trackColor={{false: '#C0C0C0', true: '#BA55D3'}}
                thumbColor={'#F5F5F5'}
                style={styles.switchContainer}
                value={this.state.fbSwitch}
                onValueChange={fbSwitch => this.setState({fbSwitch})}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.darkText}>Instagram</Text>
              <Switch
                trackColor={{false: '#C0C0C0', true: '#BA55D3'}}
                thumbColor={'#F5F5F5'}
                style={styles.switchContainer}
                value={this.state.instaSwitch}
                onValueChange={instaSwitch => this.setState({instaSwitch})}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.darkText}>Gmail</Text>
              <Switch
                trackColor={{false: '#C0C0C0', true: '#BA55D3'}}
                thumbColor={'#F5F5F5'}
                style={styles.switchContainer}
                value={this.state.gmailSwitch}
                onValueChange={gmailSwitch => this.setState({gmailSwitch})}
              />
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lighText: {
    fontSize: 15,
    color: '#808080',
    fontWeight: '400',
  },
  switchContainer: {
    color: 'red',
  },
});
