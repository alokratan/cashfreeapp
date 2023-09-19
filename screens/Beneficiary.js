import {
  Box,
  Text,
  Heading,
  StatusBar,
  Pressable,
  Image,
  CheckIcon,
  Button,
  Select,
  VStack,
  Input,
  ScrollView,
  HStack,
  Center,
  FormControl,
  WarningOutlineIcon,
  Divider,
} from "native-base";
import { ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import CON from "../country.json";
import axios from "axios";
import { baseurl, baseurl2 } from "../baseurl";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import CountryPicker from "./components/CountryPicker";
import Coundet from "../country.json";
const Beneficiary = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [accountnumber, setAccountnumber] = useState("");
  const [accountholdername, setAccountholdername] = useState("");
  const [bankname, setBankname] = useState("");
  const [bankaddress, setBankaddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [swiftcode, setSwiftcode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [routigno, setRoutigno] = useState("");
  const [account_Type, setAccount_Type] = useState("");
  const [ibancode, setIbancode] = useState("");
  const [country, setCountry] = useState("");
  const [country2, setCountry2] = useState("");
  const [password, setPassword] = useState("");
  const [coun, setCoun] = useState("");
  const [selectedcode, setSelectedcode] = useState("");
  const [countries, setCountries] = useState(Coundet);
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBankCountry, setSelectedBankCountry] = useState("");

  const registerfn2 = async () => {
    console.log(
      bankname,
      selectedBankCountry,
      bankaddress,
      swiftcode,
      ibancode,
      accountholdername,
      accountnumber,
      selectedCountry,
      state,
      city,
      address,
      routigno
    );
    ToastAndroid.show("Please Wait..", 2000);
  };

  const handleselectcode = (itemValue) => {
    setSelectedcode(itemValue);
  };
  const handleChangebankcountry = (itemValue) => {
    setSelectedBankCountry(itemValue);
  };
  const handleChangecountry = (itemValue) => {
    setSelectedCountry(itemValue);
  };

  const registerbeneffn = async () => {
    
    await axios
      .post(`${baseurl2}/beneficiaryr`, {
        username: email,
        userpassword: password,
        mobilenumber: phone,
        country: country,
        personalbusinessuser: account_Type,
      })
      .then((res) => {
        console.log(res.data.message);

        ToastAndroid.show(res.data.message, 2000);
        setTimeout(() => {
          navigation.navigate("logins");
        }, 1000);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        ToastAndroid.show(error.response.data.error, 2000);
      });
  };

  const countryfn = (e) => {
    setCountry(e);
  };
  const countryfn2 = (e) => {
    setCountry2(e);
  };
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#5521C2"
        barStyle="light-content"
      />

      <Box flex={1} justifyContent="space-between" safeAreaTop bg="white">
        <VStack
          bg="#5521C2"
          justifyContent={"flex-end"}
          alignItems={"center"}
          w={"full"}
          h={20}
        >
          {/* <Box w={24} marginBottom={10} h={24} rounded={10} bg="white"></Box> */}
          <Heading color="white" paddingY={6} bold fontSize={30}>
            CREATE BENEFICIARY
          </Heading>
        </VStack>
        <ScrollView>
          <VStack paddingX={5} space={6} pt="6">
            <FormControl>
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Bank Name
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="Silicon Valley Bank"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={bankname}
                onChangeText={(e) => setBankname(e)}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Bank Country
                </Text>
              </FormControl.Label>
              {/* <Select
                mb={5}
                bg={"gray.100"}
                fontSize={18}
                borderWidth={0}
                rounded={5}
                py={3}
                //   placeholderTextColor={"black"}
                placeholder="Select Country"
                _selectedItem={{
                  bg: "purple.100",
                  endIcon: <CheckIcon mt={0.5} size={5} />,
                }}
                selectedValue={country}
                onValueChange={countryfn}
              >
                {coun &&
                  coun.map((e) => (
                    <Select.Item key={e.code} label={e.name} value={e.code} />
                  ))}
              </Select> */}
              <CountryPicker
                selectedCountry={selectedBankCountry}
                country={countries}
                handleChanges={handleChangebankcountry}
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Bank Address
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="Bank Address"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={bankaddress}
                onChangeText={(e) => setBankaddress(e)}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  SWIFT Code
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="SWIFT Code"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={swiftcode}
                onChangeText={(e) => setSwiftcode(e)}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Select Code
                </Text>
              </FormControl.Label>
              <View>
                <Picker
                  style={{
                    borderRadius: 100,
                    marginBottom: 20,
                    backgroundColor: "#F5F5F5",
                    color: "black",
                  }}
                  selectedValue={selectedcode}
                  onValueChange={handleselectcode}
                  dropdownIconColor="black"
                >
                  <Picker.Item label="Iban" value="Iban" />
                  <Picker.Item label="Transit" value="Transit" />
                  <Picker.Item label="Sort" value="Sort" />
                  <Picker.Item label="Bsb" value="Bsb" />
                </Picker>
              </View>

              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder={selectedcode + " code"}
                color="black"
                marginBottom={4}
                fontSize={17}
                value={ibancode}
                onChangeText={(e) => setIbancode(e)}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Account Holder Name
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="Full Name"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={accountholdername}
                onChangeText={(e) => setAccountholdername(e)}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Account Number
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <Ionicons name="call" size={24} color="black" />
                //   </Box>
                // }
                padding={3}
                placeholder="834989384"
                color="black"
                keyboardType="phone-pad"
                value={accountnumber}
                onChangeText={(e) => setAccountnumber(e)}
                marginBottom={4}
                fontSize={17}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Country
                </Text>
              </FormControl.Label>
              <CountryPicker
                selectedCountry={selectedCountry}
                country={countries}
                handleChanges={handleChangecountry}
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  State
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="State"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={state}
                onChangeText={(e) => setState(e)}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  City
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="City"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={city}
                onChangeText={(e) => setCity(e)}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Address
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <MaterialIcons name="email" size={24} color="#0B0464" />
                //   </Box>
                // }
                padding={3}
                placeholder="Address"
                color="black"
                marginBottom={4}
                fontSize={17}
                value={address}
                onChangeText={(e) => setAddress(e)}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Routing Number
                </Text>
              </FormControl.Label>
              <Input
                variant="filled"
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <Ionicons name="call" size={24} color="black" />
                //   </Box>
                // }
                padding={3}
                placeholder="834989384"
                color="black"
                keyboardType="phone-pad"
                value={routigno}
                onChangeText={(e) => setRoutigno(e)}
                marginBottom={4}
                fontSize={17}
                borderBottomColor="#0B0464"
              />
            </FormControl>

            <></>
          </VStack>
        </ScrollView>
        <Button
          _pressed={{
            bg: "#0009",
          }}
          marginX={10}
          marginY={10}
          marginTop={5}
          rounded={10}
          onPress={registerfn2}
          bg="black"
        >
          <Text marginY={1} color="white" bold fontSize={20}>
            SUBMIT
          </Text>
        </Button>
      </Box>
    </>
  );
};

export default Beneficiary;
