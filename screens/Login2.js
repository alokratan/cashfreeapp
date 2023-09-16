import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Axios from 'axios';

import { userapi } from '../userapi';
export default function Login2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [emailv, setEmailv] = useState('');
  const [passwordv, setPasswordv] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Axios.post('https://altblogserver.vercel.app/altblog/login', {
        email:username,
        password:password,
      });

      const data = response.data;

      if (response.status === 200) {
         console.log(data.message);
         alert(data.message);
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
    userapi({
      userId: emailv,
      password: passwordv,
    }).then((res)=>{
console.log(res.data.res.message)
alert(res.data.res.message)
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <View>
      <Text>blog </Text>
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
