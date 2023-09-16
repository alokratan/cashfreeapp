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
// import CON from "../country.json";
import axios from "axios";
import { baseurl } from "../../../baseurl";
import { MaterialIcons, Ionicons,FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Coundet from '../../../country.json';
import CountryPicker from "../../components/CountryPicker";


const Remitter = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [account_Type, setAccount_Type] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [coun, setCoun] = useState("");
  const [show2, setShow2] = useState(false);
  const [date, setDate] = useState(new Date());
  const [countries, setCountries] = useState(Coundet);
  const [selectedCountry, setSelectedCountry] = useState('');


  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const result = await axios.get(
      "https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/2bc71083a77106afec2ec37cf49d05ee54be1a22/country_dial_info.json"
    );
    // console.log(result.data);
    setCoun(result.data);
  };

  console.log(date);

  const handleChange = (itemValue) => {
    setSelectedCountry(itemValue);
    console.log(itemValue)
  };
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // For iOS, show the picker again on confirmation
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  const registerfn = async () => {
    await axios
      .post(`${baseurl}/register`, {
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

  const registerfn2 = async () => {
    registerfn();
    console.log(email, password, phone, account_Type, country);
    ToastAndroid.show("Please Wait..", 2000);
  };
  const accountfn = (e) => {
    setAccount_Type(e);
  };

  const countryfn = (e) => {
    setCountry(e);
  };
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#5521C2"
        barStyle="light-content"
      />
      <Box flex={1}  justifyContent="space-between" safeAreaTop bg="white">
      <HStack
          bg={"#5521C2"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          w={"full"}
        >
          <Pressable padding={5}>
            <FontAwesome5
            onPress={()=>navigation.goBack()}
              name="arrow-alt-circle-left"
              size={24}
              color={"white"}
            />
          </Pressable>

          <Heading color="white" paddingY={5} bold fontSize={24}>
           Create Remitter
          </Heading>
        </HStack>
        {/* <VStack
          bg="#5521C2"
          justifyContent={"flex-end"}
          alignItems={"center"}
          w={"full"}
          h={20}
        >
          {/* <Box w={24} marginBottom={10} h={24} rounded={10} bg="white"></Box> 
          <Heading color="white" paddingY={6} bold fontSize={30}>
            CREATE REMITTER
          </Heading>
        </VStack> */}
        <ScrollView>
          <VStack paddingX={5} space={6} pt="6">
            <FormControl>
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Full Name
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
                // value={email}
                // onChangeText={e=>setEmail(e)}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Email
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
                InputRightElement={
                  <Box paddingX={2}>
                    <MaterialIcons name="email" size={24} color="#0B0464" />
                  </Box>
                }
                padding={3}
                placeholder="user@gmail.com"
                color="black"
                marginBottom={4}
                fontSize={17}
                keyboardType="email-address"
                // value={email}
                // onChangeText={(e) => setEmail(e)}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Phone Number
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
                InputRightElement={
                  <Box paddingX={2}>
                    <Ionicons name="call" size={24} color="#0B0464" />
                  </Box>
                }
                padding={3}
                placeholder="9845984954"
                color="black"
                marginBottom={4}
                fontSize={17}
                keyboardType="phone-pad"
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Date Of Birth
                </Text>
              </FormControl.Label>
              <Pressable
                bg="gray.100"
                // _focus={{
                //   bg: "purple.50",
                //   borderBottomWidth: 2,
                //   borderWidth: 0,
                //   borderColor: "#5521C2",
                // }}
                // InputRightElement={
                //   <Box paddingX={2}>
                //     <Ionicons name="call" size={24} color="black" />
                //   </Box>
                // }
                padding={4}
                onPress={showDatepicker}
                placeholder="834989384"
                color="black"
                value={date}
                marginBottom={4}
                rounded={5}
                fontSize={17}
                borderBottomColor="#0B0464"
              >
                {show2 ? (
                  <Text fontSize={17}>Select DOB</Text>
                ) : (
                  <Text fontSize={17}>
                    {(date.toISOString().split("T")[0])}
                  </Text>
                )}

{/* <Button onPress={showDatepicker} title="Pick a date" /> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date" // Set mode to 'date'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
              </Pressable>

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Nationality
                </Text>
              </FormControl.Label>
              {/* <Select
                mb={5}
                bg={"gray.100"}
                fontSize={18}
                borderWidth={0}
                rounded={5}
                py={3}
                placeholderTextColor={"black"}
                placeholder="Location"
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
              <CountryPicker selectedCountry={selectedCountry} country={countries} handleChanges={handleChange}  />

          

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
                placeholder="State Bank of India"
                color="black"
                marginBottom={4}
                fontSize={17}
                // value={email}
                // onChangeText={e=>setEmail(e)}
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
                value={phone}
                onChangeText={(e) => setPhone(e)}
                marginBottom={4}
                fontSize={17}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  IFSC Code
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
                placeholder="IFCE Code"
                color="black"
                marginBottom={4}
                fontSize={17}
                // value={email}
                // onChangeText={e=>setEmail(e)}
                borderBottomColor="#0B0464"
              />

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Pan Number
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
                placeholder="Pan Number"
                color="black"
                marginBottom={4}
                fontSize={17}
                // value={email}
                // onChangeText={e=>setEmail(e)}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Aadhaar Number
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
                placeholder="Aadhaar Number"
                color="black"
                marginBottom={4}
                fontSize={17}
                // value={email}
                // onChangeText={e=>setEmail(e)}
                borderBottomColor="#0B0464"
              />

              <HStack w="full" justifyContent={"space-between"}>
                <VStack w="45%">
                  <FormControl.Label paddingY={2}>
                    <Text fontWeight={600} fontSize={17}>
                      Postal Code
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
                    placeholder="Postal Code"
                    color="black"
                    marginBottom={4}
                    fontSize={17}
                    // value={email}
                    // onChangeText={e=>setEmail(e)}
                    borderBottomColor="#0B0464"
                  />
                </VStack>
                <VStack w="45%">
                  <FormControl.Label paddingY={2}>
                    <Text fontWeight={600} fontSize={17}>
                      Bank Code
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
                    placeholder="Bank Code"
                    color="black"
                    marginBottom={4}
                    fontSize={17}
                    // value={email}
                    // onChangeText={e=>setEmail(e)}
                    borderBottomColor="#0B0464"
                  />
                </VStack>
              </HStack>
              <HStack w="full" justifyContent={"space-between"}>
                <VStack w="45%">
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
                    // value={email}
                    // onChangeText={e=>setEmail(e)}
                    borderBottomColor="#0B0464"
                  />
                </VStack>
                <VStack w="45%">
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
                    // value={email}
                    // onChangeText={e=>setEmail(e)}
                    borderBottomColor="#0B0464"
                  />
                </VStack>
              </HStack>
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
                // value={email}
                // onChangeText={e=>setEmail(e)}
                borderBottomColor="#0B0464"
              />
            </FormControl>

            <></>
          </VStack>
          <Button
          _pressed={{
            bg: "#0009",
          }}
          marginX={10}
          marginY={20}
          marginTop={5}
          rounded={10}
          onPress={registerfn2}
          bg="black"
        >
          <Text marginY={1} color="white" bold fontSize={20}>
            SUBMIT
          </Text>
        </Button>
        </ScrollView>
        
      </Box>
    </>
  );
};

export default Remitter;
