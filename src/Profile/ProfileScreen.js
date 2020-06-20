/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
            <View style={{flex: 3, flexDirection: 'row', left: 10}}>
              <View
                style={{
                  flex: 1,
                  borderRadius: 100,
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 20,
                  marginRight: 20,
                }}>
                <Ionicons
                  size={60}
                  name={'md-person'}
                  onPress={() => this.goBack()}
                />
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.darkText}>Shruti Rastogi</Text>
                <Text style={styles.lighText}>Programmar</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 2}}>
            <View style={{flex: 3}}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', marginLeft: 20}}>
                  <Ionicons
                    style={{elevation: 7, marginRight: 10}}
                    size={20}
                    name={'md-call'}
                  />
                  <Text style={styles.lighText}>+919643091153</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', marginLeft: 20}}>
                  <Ionicons
                    style={{elevation: 7, marginRight: 10}}
                    size={20}
                    name={'md-mail'}
                  />
                  <Text style={styles.lighText}>
                    shruti.rastogi2501@gmail.com
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#606060',
                }}>
                <TouchableOpacity>
                  <Text style={styles.darkText}>$400</Text>
                  <Text style={styles.lighText}>Wallet</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#606060',
                }}>
                <TouchableOpacity>
                  <Text style={styles.darkText}>12</Text>
                  <Text style={styles.lighText}>Orders</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 4}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 10,
                  padding: 10,
                }}>
                <Ionicons
                  style={{elevation: 7, marginRight: 10}}
                  size={20}
                  name={'md-heart'}
                />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Your Favourites
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 10,
                  padding: 10,
                }}>
                <Ionicons
                  style={{elevation: 7, marginRight: 10}}
                  size={20}
                  name={'md-card'}
                />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Payment</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 10,
                  padding: 10,
                }}>
                <Ionicons
                  style={{elevation: 7, marginRight: 10}}
                  size={20}
                  name={'md-people'}
                />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Tell Your Friends
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 10,
                  padding: 10,
                }}>
                <Ionicons
                  style={{marginRight: 10}}
                  size={20}
                  name={'md-pricetag'}
                />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Your Favourites
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#606060',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 10,
                  padding: 10,
                }}>
                <Ionicons
                  style={{elevation: 7, marginRight: 10}}
                  size={20}
                  name={'md-cog'}
                />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Settings</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1.5}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 10,
                  padding: 10,
                  marginTop: 10,
                }}>
                <Ionicons
                  style={{elevation: 7, marginRight: 10, color: 'red'}}
                  size={20}
                  name={'md-power'}
                />
                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  lighText: {
    fontSize: 15,
    color: '#808080',
    fontWeight: '400',
  },
});
