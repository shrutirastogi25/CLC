/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';
// import { moderateScale, isTabDevice, isiPhoneX } from '../reusableComponents/DeviceInfo';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  
  onClickListener = viewId => {
    if (viewId === 'profile') {
     this.props.navigation.dispatch(StackActions.replace('Profile'));
   } else if (viewId === 'notifications') {
     this.props.navigation.dispatch(StackActions.replace('Notification'));
   }
   else if(viewId==='offer'){
     this.props.navigation.dispatch(StackActions.replace('Offers'));
   }
};
render() {
 return (
   <View style={{flex:5}}>
     <View style={{flex:4}}>
     <Text>LIST</Text>
     </View>
     <View style={{flex:1,flexDirection:'row'}}>
       <TouchableOpacity onPress={() => this.onClickListener('offer')} style={{flex:1, backgroundColor:'red'}}></TouchableOpacity>
       <TouchableOpacity onPress={() => this.onClickListener('profile')} style={{flex:1, backgroundColor:'green'}}></TouchableOpacity>
       <TouchableOpacity onPress={() => this.onClickListener('notifications')} style={{flex:1, backgroundColor:'blue'}}></TouchableOpacity>
     </View>
   </View>
  
 );
}
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#DCDCDC',
},
inputContainer: {
 borderBottomColor: '#F5FCFF',
 backgroundColor: '#FFFFFF',
 borderRadius: 30,
 borderBottomWidth: 1,
 width: 250,
 height: 45,
 marginBottom: 20,
 flexDirection: 'row',
 alignItems: 'center',
},
inputs: {
 height: 45,
 marginLeft: 16,
 borderBottomColor: '#FFFFFF',
 flex: 1,
},
inputIcon: {
 width: 30,
 height: 30,
 marginLeft: 15,
 justifyContent: 'center',
},
buttonContainer: {
 height: 45,
 flexDirection: 'row',
 justifyContent: 'center',
 alignItems: 'center',
 marginBottom: 20,
 width: 250,
 borderRadius: 30,
},
loginButton: {
 backgroundColor: '#00b5ec',
},
loginText: {
 color: 'white',
},
});