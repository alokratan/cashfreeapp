import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Axios from 'axios';

export default function Login2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [emailv, setEmailv] = useState('');
  const [passwordv, setPasswordv] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Axios.post('http://52.66.173.135:8000/user/login/', {
        username,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        console.log(data.status);
        alert(data.status);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleLogin2 = async () => {
    try {
      const response = await Axios.post('http://52.66.173.135:8000/login', {
        email:email,
        userpassword:password2,
      });

      const data = response.data;

      if (response.status === 200) {
        console.log(data);
        alert(data.message);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleLoginv = async () => {
    try {
      const response = await Axios.post('http://65.1.104.173:443/api/common/login', {
        userId:emailv,
        password:passwordv,
      });

      const data = response.data;

      if (response.status === 200) {
        console.log(data.res.message);
        alert(data.res.message);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View>
      <Text>golden eye </Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
     
      />
      <Button title="Login" onPress={handleLogin} />
      <Text>my api </Text>
      <TextInput
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password2}
        onChangeText={setPassword2}
     
      />
      <Button title="Login" onPress={handleLogin2} />
      <Text>v sir api </Text>
      <TextInput
        placeholder="Username"
        value={emailv}
        onChangeText={setEmailv}
      />
      <TextInput
        placeholder="Password"
        value={passwordv}
        onChangeText={setPasswordv}

      />
      <Button title="Login" onPress={handleLoginv} />
    </View>
  );
}
