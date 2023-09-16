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
  HStack,
  Center,
  FormControl,
  WarningOutlineIcon,
  Divider,
  ScrollView,
  Checkbox,
  Modal,

  
} from "native-base";
import { ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
// import CON from "../country.json";
import axios from "axios";
import { baseurl } from "../baseurl";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Selectdrop from "./Selectdrop";
import Coundet from '../country.json';
import CountryPicker from "./components/CountryPicker";


const Register = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [phonecode,setPhonecode]=useState("");
  const [pannumber,setPannumber]=useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [openmodal,setOpenmodal]=useState(false);
  const [coun, setCoun] = useState("");
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
 
  const agreeterms = () => {
    setIsSelected(!isSelected);
  };
  const abcd=()=>{
   alert("data not found")

  }
const registerfnt=()=>{console.log("please accept terms & conditions")}
  const registerfn = async () => {
    await axios
      .post(`${baseurl}/register`, {
        fullname: fullname,
        email: email,
        mobilenumber: phone,
        panno:pannumber,
        purpose: "Education",
        country: selectedCountry,
        address:address,
        userpassword: password,
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
  const registerfnvin = async () => {
    await axios
      .post(`http://65.1.104.173:443/api/common/register`, {
        username: fullname,
        email: email,
        mobile: phone,
        panno:pannumber,
        purpose: "Education",
        countrycode: selectedCountry,
        address:address,
        password: password,
      })
      .then((res) => {
        console.log(res.data.res.Message);

        ToastAndroid.show(res.data.res.Message, 2000);
        // setTimeout(() => {
        //   navigation.navigate("logins");
        // }, 1000);
     
      })
      .catch((error) => {
        console.log(error.response);
        // ToastAndroid.show(error.response.data.error, 2000);
      });
  };



  const registerfn2 = async () => {
    // registerfn();
    registerfnvin()
    console.log(fullname,email,pannumber, password, phone, selectedCountry,address);

    ToastAndroid.show("Please Wait..", 2000);
  };
 

 
  // const countryfn2=(ab)=>{
  //   const countrys = coun && coun.find(cou => cou["code"] === ab);
  //   // countrys?console.log(countrys.dial_code):console.log("not found")
  //   console.log(countrys.dial_code)
  //   const abcd=countrys.dial_code
  //    setPhonecode(abcd);
  //    setPhone(abcd+" ");
  // }
 

  const handleChange = (itemValue) => {
    setSelectedCountry(itemValue);
    console.log(itemValue)
  };
  
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#5521C2"
        barStyle="light-content"
      />

<Modal isOpen={openmodal} onClose={() => setOpenmodal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Terms And Conditions</Modal.Header>
          <Modal.Body>
            <ScrollView>
            <VStack space={3}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ducimus sint eligendi quasi quas animi quae reiciendis inventore laboriosam ratione id provident corrupti ipsa corporis praesentium doloremque maiores esse, quibusdam numquam aperiam molestias rerum.
              </Text>
              
            </VStack>
            </ScrollView>
          </Modal.Body>
          
        </Modal.Content>
      </Modal>
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
            REGISTER HERE 
          </Heading>
        </VStack>
        <ScrollView>
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            paddingY={10}
            paddingX={5}
            space={6}
            pt="6"
          >
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
                InputRightElement={
                  <Box paddingX={2}>
                    <MaterialIcons name="person" size={24} color="#0B0464" />
                  </Box>
                }
                padding={3}
                placeholder="Elon Musk"
                color="black"
                marginBottom={4}
                fontSize={17}
                keyboardType="email-address"
                value={fullname}
                onChangeText={(e) => setFullname(e)}
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
                value={email}
                onChangeText={(e) => setEmail(e)}
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
                    
                    <Ionicons name="call" size={24} color="black" />
                  </Box>
                }
                // InputLeftElement={
                //   <Box marginLeft={2} paddingX={2} paddingY={2}>
                //     <Text fontSize={20}>{countryflag} </Text>
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
                  Pan number
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
              
                padding={3}
                placeholder="ABD7263H"
                color="black"
                value={pannumber}
                onChangeText={(e) => setPannumber(e)}
                // onChangeText={(e) => setPhone(e)}
                marginBottom={4}
                fontSize={17}
                borderBottomColor="#0B0464"
              />
             
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Purpose
                </Text>
              </FormControl.Label>
             
                <Selectdrop/>

              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} fontSize={17}>
                  Country
                </Text>
              </FormControl.Label>
              


            <CountryPicker selectedCountry={selectedCountry} country={countries} handleChanges={handleChange}  />

            

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
              
                padding={3}
                placeholder="Address"
                value={address}
                onChangeText={(e) => setAddress(e)}
                color="black"
                
                
                // onChangeText={(e) => setPhone(e)}
                marginBottom={4}
                fontSize={17}
                borderBottomColor="#0B0464"
              />
              <FormControl.Label paddingY={2}>
                <Text fontSize={17} fontWeight={600}>
                  Create Password
                </Text>
              </FormControl.Label>

              <Input
                variant="filled"
                type={show ? "text" : "password"}
                padding={3}
                _focus={{
                  bg: "purple.50",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderColor: "#5521C2",
                }}
                InputRightElement={
                  <Pressable paddingX={2} onPress={() => setShow(!show)}>
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                      size={24}
                      color="black"
                    />
                  </Pressable>
                }
                placeholder="********"
                color="black"
                fontSize={17}
                value={password}
                onChangeText={(e) => setPassword(e)}
                borderBottomColor="#0B0464"
              />
            </FormControl>
          </VStack>
        </ScrollView>
        <VStack space={3} justifyContent={"center"}   >
          <HStack alignItems={"center"}  paddingX={10}>
            <Checkbox
            marginRight={3}
            colorScheme={'gray'}
              value={isSelected}
              onChange={agreeterms}
              accessibilityLabel="terms & conditions"
              
            />
            <Text fontSize={18} >Agree with our <Text onPress={()=>setOpenmodal(true)} fontWeight={600} underline >Terms & Conditions</Text></Text>
            
          </HStack>
          <Button
            _pressed={{
              bg: "#0009",
            }}
            marginX={10}
            marginTop={2}
            rounded={10}
            onPress={isSelected?registerfn2:registerfnt}
            bg="black"
          >
            <Text marginY={1} color="white" bold fontSize={20}>
              REGISTER
            </Text>
          </Button>
          <Center>
            <Pressable
              marginBottom={10}
              onPress={() => navigation.navigate("logins")}
              justifyContent={"space-between"}
            >
              <Text color={"#5521C2"} fontWeight={700} fontSize={18} underline>
                Already have an Account
              </Text>
            </Pressable>
          </Center>
        </VStack>
      </Box>
    </>
  );
};

export default Register;
