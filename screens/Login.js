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
} from "native-base";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { ToastAndroid } from "react-native";
import { baseurl } from "../baseurl";

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const isPasswordValid = (password) => {
    return password.length >= 8;
  };


  // const loginfn = async () => {
    // if (!email || !password) {
    //   ToastAndroid.show("Please provide both email and password", 2000);
    //   return;
    // }
  //   await axios
  //     .post(`${baseurl}/login`, {
  //       email: email,
  //       userpassword: password,
  //     })
  //     .then((res) => {
  //       console.log(res.data);

  //       ToastAndroid.show(res.data.message, 2000);
  //       setTimeout(() => {
  //         navigation.navigate("bottomtabs");
  //       }, 1000);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.error);
  //       ToastAndroid.show(error.response.data.error, 2000);
  //     });
  // };

  const loginfnvin = async () => {
  
    if (!email || !password) {
      ToastAndroid.show("Please provide both email and password", 2000);
      return;
    }

    await axios
      .post(`http://65.1.104.173:443/api/common/login`, {
        userId: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.res.message);
        ToastAndroid.show(res.data.res.message, 2000);
        if(res.data.res.statuscode===1){
          setTimeout(() => {
            navigation.navigate("bottomtabs");
          }, 1000);
        }
       
      })
      .catch((error) => {
        console.log(error.response);
        // ToastAndroid.show(error.response.data.error, 2000);
      });
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
              placeholder="user@gmail.com"
              color="black"
              marginBottom={4}
              fontSize={17}
              value={email}
              onChangeText={(e) => setEmail(e)}
              borderBottomColor="#0B0464"
            />
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
              value={password}
              onChangeText={(e) => setPassword(e)}
              borderBottomColor="#0B0464"
            />
            {!isPasswordValid(password) && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Password must be at least 8 characters long.
        </FormControl.ErrorMessage>
      )}
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
            onPress={loginfnvin}
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
