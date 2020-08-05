/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Button, Image} from 'react-native-elements';
// import img from '../../assets/images/harry-potter.jpg';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth';

const Profile = (props) => {
  const logout = () => {
    props.logout();
    console.log('Logout success!');
    // props.nav.navigate('Login');
    props.nav.reset({
      index: 0,
      routes: [
        {
          name: 'Login',
        }
      ]
    })
  };

  const img = 'http://193.168.43.186:3000/img/' + props.auth.data.profile_img;

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
          <Image
            source={{uri: img}}
            style={{ width: 150, height: 150, borderRadius: 100,}}
          />
        <Text style={styles.name}>{props.auth.data.name}</Text>
        <Text style={styles.email}>{props.auth.data.about}</Text>
        <Text style={styles.email}>{props.auth.data.email}</Text>
        <Button
          buttonStyle={{backgroundColor: '#004380', width: 100, marginTop: 10}}
          titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16}}
          title="Logout"
          onPress={() => logout()}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
