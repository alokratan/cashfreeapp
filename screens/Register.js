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
import { useFormik } from "formik";
import * as Yup from "yup";
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
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [country, setCountry] = useState("");
  // const [address, setAddress] = useState("");
  // const [phonecode,setPhonecode]=useState("");
  // const [pannumber,setPannumber]=useState("");
  // const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [openmodal,setOpenmodal]=useState(false);
  const [coun, setCoun] = useState("");
  const [countries, setCountries] = useState(Coundet);
  const [selectedCountry, setSelectedCountry] = useState('');

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      phone: "",        // Added phone field
      pannumber: "",   // Added pannumber field
      address: "",     // Added address field
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Too Short! - should be 8 chars minimum.")
        .matches(
          /[a-z]/,
          "Password must contain at least one lowercase letter."
        )
        .matches(
          /[A-Z]/,
          "Password must contain at least one uppercase letter."
        )
        .matches(/[0-9]/, "Password must contain at least one numeric digit.")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one special character."
        ),
      phone: Yup.string().required("Required"),        // Added phone field validation
      pannumber: Yup.string().required("Required")
      .matches(/^[A-Z]{5}\d{4}[A-Z]$/, "Invalid PAN card number") // Add regex for PAN card
      .required("Required"),  // Added pannumber field validation
      address: Yup.string(),     // Added address field validation
    }),
    onSubmit: (values, { resetForm }) => {
   
      registerfn(values)
      console.log(values)
      resetForm({ values: "" });
    },
  });
  

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

  const registerfn = async (values) => {
    await axios
      .post(`${baseurl}/register`, {
        fullname: values.fullname,
        email: values.email,
        mobilenumber: values.phone,
        panno:values.pannumber,
        purpose: "Education",
        country: selectedCountry,
        address:values.address,
        userpassword: values.password,
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


  const registerfnvin = async (values) => {
    await axios
      .post(`http://65.1.104.173:443/api/common/register`, {
        username: values.fullname,
        email: values.email,
        mobile: values.phone,
        panno:values.pannumber,
        purpose: "Education",
        countrycode: selectedCountry,
        address:values.address,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data.res.Message);

        ToastAndroid.show(res.data.res.Message, 2000);
        setTimeout(() => {
          navigation.navigate("logins");
        }, 2000);
     
      })
      .catch((error) => {
        console.log(error.response);
        // ToastAndroid.show(error.response.data.error, 2000);
      });
  };



  // const registerfn2 = async () => {
  //   // registerfn();
  //   registerfnvin()
  //   console.log(fullname,email,pannumber, password, phone, selectedCountry,address);

  //   ToastAndroid.show("Please Wait..", 2000);
  // };
 

 
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
               
                fontSize={17}
                
                onChangeText={formik.handleChange("fullname")}
                onBlur={formik.handleBlur("fullname")}
                value={formik.values.fullname}
                borderBottomColor="#0B0464"
              />
              {formik.errors.fullname && formik.touched.fullname ? (
                <Text
                  paddingLeft={2}
                  fontSize="sm"
                  color="danger.500"
                  alignSelf="flex-start"
                >
                  {formik.errors.fullname}
                </Text>
              ) : null}
        
              <FormControl.Label paddingY={2}>
                <Text fontWeight={600} marginTop={4} fontSize={17}>
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
               
                fontSize={17}
                keyboardType="email-address"
                onChangeText={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
                borderBottomColor="#0B0464"
              />
               {formik.errors.email && formik.touched.email ? (
                <Text
                  paddingLeft={2}
                  fontSize="sm"
                  color="danger.500"
                  alignSelf="flex-start"
                >
                  {formik.errors.email}
                </Text>
              ) : null}
 <FormControl.Label paddingY={2}>
                <Text fontWeight={600} marginTop={4} fontSize={17}>
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
                onChangeText={formik.handleChange("phone")}
                onBlur={formik.handleBlur("phone")}
                value={formik.values.phone}
               
                fontSize={17}
                borderBottomColor="#0B0464"
              />
               {formik.errors.phone && formik.touched.phone ? (
                <Text
                  paddingLeft={2}
                  fontSize="sm"
                  color="danger.500"
                  alignSelf="flex-start"
                >
                  {formik.errors.phone}
                </Text>
              ) : null}

<FormControl.Label paddingY={2}>
                <Text fontWeight={600} marginTop={4} fontSize={17}>
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
                onChangeText={formik.handleChange("pannumber")}
                onBlur={formik.handleBlur("pannumber")}
                value={formik.values.pannumber}
                // onChangeText={(e) => setPhone(e)}
               
                fontSize={17}
                borderBottomColor="#0B0464"
              />
                {formik.errors.pannumber && formik.touched.pannumber ? (
                <Text
                  paddingLeft={2}
                  fontSize="sm"
                  color="danger.500"
                  alignSelf="flex-start"
                >
                  {formik.errors.pannumber}
                </Text>
              ) : null}
             
              <FormControl.Label paddingY={2}>
                <Text marginTop={4} fontWeight={600} fontSize={17}>
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
                onChangeText={formik.handleChange("address")}
                onBlur={formik.handleBlur("address")}
                value={formik.values.address}
                color="black"
                
                
                // onChangeText={(e) => setPhone(e)}
               
                fontSize={17}
                borderBottomColor="#0B0464"
              />
               {formik.errors.address && formik.touched.address ? (
                <Text
                  paddingLeft={2}
                  fontSize="sm"
                  color="danger.500"
                  alignSelf="flex-start"
                >
                  {formik.errors.address}
                </Text>
              ) : null}
              <FormControl.Label paddingY={2}>
                <Text fontSize={17} marginTop={4} fontWeight={600}>
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
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
                borderBottomColor="#0B0464"
              />
                {formik.errors.password && formik.touched.password ? (
                <Text
                  paddingLeft={2}
                  fontSize="sm"
                  color="danger.500"
                  alignSelf="flex-start"
                >
                  {formik.errors.password}
                </Text>
              ) : null}
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
            onPress={formik.handleSubmit}
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
