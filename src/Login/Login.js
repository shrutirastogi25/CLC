import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  onClickListener = viewId => {
    if (viewId === 'register') {
      this.props.navigation.dispatch(
        StackActions.replace('RegistrationScreen'),
      );
    } else if (viewId === 'login') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    } else if (viewId === 'restore_password') {
      this.props.navigation.dispatch(StackActions.replace('ResetPassword'));
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../Assets/final_logo.png')} />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
              borderBottomColor: '#606060',
              backgroundColor: '#FFFFFF',
              borderRadius: 30,
              borderBottomWidth: 1,
              width: 250,
              height: 45,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Ionicons
                style={{ alignItems: 'flex-start' }}
                size={20}
                name={'md-mail'}
              />
              <TextInput
                style={{
                  height: 45,
                  marginLeft: 16,
                  borderBottomColor: '#FFFFFF',
                  flex: 1
                }}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({ email })}
              />
            </View>

            <View style={{
              borderBottomColor: '#606060',
              backgroundColor: '#FFFFFF',
              borderRadius: 30,
              borderBottomWidth: 1,
              width: 250,
              height: 45,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Ionicons

                size={20}
                name={'md-key'}
              />
              <TextInput
                style={{
                  height: 45,
                  marginLeft: 16,
                  borderBottomColor: '#FFFFFF',
                  flex: 1
                }}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.onClickListener('login')}>
              <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onClickListener('restore_password')}>
              <Text>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
        <View style={{alignItems:'center',justifyContent:'center',bottom:2}}>
        <TouchableOpacity onPress={() => this.onClickListener('register')}>
              <Text>Sign up?</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
