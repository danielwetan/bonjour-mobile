/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Main from '../components/Conversation';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Chats = ({navigation, route}) => {
  const {sender_id} = route.params
  return (
    <>
      {/* <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}> */}
      <Main nav={navigation} sender_id={sender_id} />
      {/* </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

export default Chats;