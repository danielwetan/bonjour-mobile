/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';

const Contact = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.profile_img;
  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <TouchableHighlight underlayColor={'lightgray'} activeOpacity={1} onPress={() => props.nav.navigate('ContactProfile', {name: props.name, email: props.email, about: props.about, profile_img: props.profile_img})}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: img}}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  overflow: 'hidden',
                }}
              />
            </View>
            <View
              style={{
                marginRight: 100,
                marginTop: 10,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Quicksand-Bold',
                  color: '#373D3F',
                }}>
                {props.name}
              </Text>
              <Text
                style={{
                  paddingTop: 3,
                  fontSize: 16,
                  fontFamily: 'Quicksand-Medium',
                  color: '#373D3F',
                }}>
                {props.about}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Contact;
