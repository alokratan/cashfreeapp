import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseurl, baseurl2 } from "./baseurl";
import { useState } from "react";
export const remit = async () => {
  try {
    const result = await Axios.get(`${baseurl}/remitter`);
    return result;
  } catch (err) {
    return err;
  }
};
export const remitvin = async () => {
  const value = await AsyncStorage.getItem('uid');
  try {
    const result = await Axios.post(`${baseurl2}/remitterv`, {
      registered_userid: value,
    });
    // console.log("vindata", result.data);
    console.log(value)
    return result;
  } catch (err) {
    return err;
  }
};

export const benefvin = async () => {
  const value = await AsyncStorage.getItem('uid');
  try {
    const result = await Axios.post(`${baseurl2}/beneficiaryv`, {
      registered_userid: value,
    })
    return result;
  } catch (err) {
    return err;
  }
};
export const benef = async () => {
  try {
    const result = await Axios.get(`${baseurl}/beneficiary`);
    return result;
  } catch (err) {
    return err;
  }
};
