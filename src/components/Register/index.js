/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth';

import Modal from 'react-native-modal';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(false);
  };

  const displayAlert = () => {
    Alert.alert(
      'Register success!',
      'Please login'
    )
  }

  const userRegistration = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    props
      .dispatch(register(data))
      .then(() => {
        // setIsModalVisible(true);
        displayAlert()
        props.nav.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            }
          ]
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Name</Text>
        <Input
          onChangeText={(text) => setName(text)}
          placeholder="John Doe"
          inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }}
        />

        <Text style={styles.title}>Email</Text>
        <Input
          onChangeText={(text) => setEmail(text)}
          placeholder="email@example.com"
          inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }}
        />

        <Text style={styles.title}>Password</Text>
        <Input
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }}
        />
        <Button
          onPress={userRegistration}
          title="Register"
          titleStyle={{fontFamily: 'Quicksand-Bold'}}
        />

        <Modal isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: 'white',
              height: 80,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 18,
                  marginRight: 5,
                }}>
                Register Success!.
              </Text>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 18,
                  color: 'blue',
                }}
                onPress={() => props.nav.navigate('Login')}>
                Login
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Register);
