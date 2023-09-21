  import React, { useState } from 'react';
  import { View, TextInput, Button } from 'react-native';
  import { auth, phoneAuthProvider } from './fireauth';

  const PhoneOTPAuth = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationID, setVerificationID] = useState('');

    const handleSendOTP = async () => {
      try {
        const verificationId = await phoneAuthProvider.verifyPhoneNumber(
          phoneNumber,
          // Optional: You can customize the duration of the OTP sent here
          // firebase.auth.RecaptchaVerifierSize.COMPACT,
          // firebase.auth.RecaptchaVerifierType.IMAGE
        );
        // Save verificationId for later use
        // You can use this verificationId to auto-fill the code for iOS
        console.log('Verification ID:', verificationId);
        setVerificationID(verificationId)
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    };

    const handleVerifyOTP = async () => {
      try {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationID,
          verificationCode
        );
        await auth().signInWithCredential(credential);
        console.log('User signed in successfully');
      } catch (error) {
        console.error('Error verifying OTP:', error);
      }
    };

    return (
      <View>
        <TextInput
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button title="Send OTP" onPress={handleSendOTP} />

        <TextInput
          placeholder="Enter OTP"
          value={verificationCode}
          onChangeText={setVerificationCode}
        />
        <Button title="Verify OTP" onPress={handleVerifyOTP} />
      </View>
    );
  };

  export default PhoneOTPAuth;
