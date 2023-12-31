import {
  Box,
  Text,
  Heading,
  StatusBar,
  Pressable,
  Image,
  Button,
  VStack,
  Input,
  HStack,
  Center,
  FormControl,
  WarningOutlineIcon,
  Divider,
  ScrollView,
  Spinner
} from "native-base";
import { useFormik } from "formik";
import * as Yup from "yup";


import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { ToastAndroid } from "react-native";
import { baseurl, baseurl2 } from "../baseurl";
import * as LocalAuthentication from 'expo-local-authentication';

const Login = ({ navigation }) => {

  const [show, setShow] = useState(false);
  const [isloading,setIsloading]=useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
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
    }),
    onSubmit: (values, { resetForm }) => {
      // loginfn(values);
      
      localauth(values);
      // console.log(values);
      resetForm({ values: "" });
    },
  });

  const localauth=async (val)=>{

    try {
      const result = await LocalAuthentication.authenticateAsync()
      console.log(result)
      // const result = await auth.authenticateAsync();
      if (result.success) {
        console.log("The user has been successfully authenticated.");
        ToastAndroid.show("Successfully Authenticated.", 2000);
        loginfnvin(val);
        // The user has been successfully authenticated.
      } else {
        // The user has not been successfully authenticated.
        console.log("The user has not been successfully authenticated");
        ToastAndroid.show("Authentication Failed , Please secure your device first. ", 2000);
      }
    } catch (error) {
      // An error occurred during authentication.
      console.log("haahahah")
      console.log(error)
    }
  }

  const loginfn = async (values) => {
    ToastAndroid.show("Please Wait..", 2000);
    <Spinner color="blue" />
    await axios
      .post(`${baseurl}/login`, {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log("hi this is id:", res.data.uid);
        // storeData(res.data.uid)
        ToastAndroid.show(res.data.message, 2000);
        setTimeout(() => {
          navigation.navigate("bottomtabs");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        ToastAndroid.show(error.response.data.error, 2000);
      });
  };

  const loginfnvin = async (values) => {
    try {
      const res = await axios.post(`${baseurl2}/login`, {
        userId: values.email,
        password: values.password,
      });
  
      console.log("hi this is id:", res.data);
  
      // Display a spinner here if necessary
      // <Spinner color="blue" />
  
      ToastAndroid.show(res.data.message, 2000);
  
      if (res.data.statuscode === 1) {
        AsyncStorage.setItem("uid", res.data.uid);
        setTimeout(() => {
          navigation.navigate("bottomtabs");
        }, 1000);
      }
    } catch (error) {
      console.log(error.response);
      ToastAndroid.show("Make Sure Server Is Live", 2000);
    }
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
          borderBottomLeftRadius={60}
          borderBottomRightRadius={60}
          bg="#5521C2"
          justifyContent={"flex-end"}
          alignItems={"center"}
          w={"full"}
          h={"35%"}
        >
          <Box w={24} marginBottom={10} h={24} rounded={10} bg="white"></Box>
          <Heading color="white" bold fontSize={30}>
            WELCOME BACK
          </Heading>
          <Text color="white" marginBottom={6} fontSize={16}>
            Sign in to Continue
          </Text>
        </VStack>
        <ScrollView>
          <VStack paddingX={5} space={6} pt="6">
            <FormControl isRequired>
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
                type="email"
                keyboardType="email-address"
                placeholder="user@gmail.com"
                color="black"
                fontSize={17}
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
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label paddingY={2}>
                <Text fontSize={17} fontWeight={600}>
                  Password
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

            <HStack justifyContent={"space-between"}>
              <Pressable onPress={() => navigation.navigate("registers")}>
                <Text fontSize={18} underline>
                  New User
                </Text>
              </Pressable>
              <Text fontSize={18} underline>
                Troble Logging in?
              </Text>
            </HStack>

            <Button
              onPress={formik.handleSubmit}
              _pressed={{
                bg: "#0009",
              }}
              marginX={10}
              marginY={10}
              rounded={10}
              bg="black"
            >
              <Text marginY={1} color="white" bold fontSize={20}>
                LOGIN
              </Text>
            </Button>
          </VStack>
        </ScrollView>

        <Center position={"relative"} top={5} zIndex={2}>
          <Text
            textAlign={"center"}
            bg="white"
            paddingX={8}
            paddingTop={2}
            paddingBottom={1}
            rounded={3}
            borderBottomLeftRadius={20}
            borderBottomRightRadius={20}
          >
            or log in with
          </Text>
        </Center>

        <HStack paddingY={6} bg="#5521C2" justifyContent="space-evenly">
          <Center w={12} h={12} bg="white" rounded={100}>
            <Image
              flex={1}
              alt="Logo"
              size="md"
              w="full"
              rounded={100}
              resizeMode="cover"
              source={require("../assets/g.png")}
            />
          </Center>
          <Center w={12} h={12} bg="white" rounded={100}>
            <Image
              flex={1}
              alt="Logo"
              size="md"
              rounded={100}
              resizeMode="cover"
              source={require("../assets/f.png")}
            />
          </Center>
          <Center w={12} h={12} bg="white" rounded={100}>
            <Image
              flex={1}
              alt="Logo"
              rounded={100}
              w="full"
              margin={3}
              resizeMode="contain"
              source={require("../assets/x.png")}
            />
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default Login;
