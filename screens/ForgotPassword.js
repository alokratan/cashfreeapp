import React,{useState} from "react";
import {
  Box,
  Text,
  VStack,
  Pressable,
  HStack,
  Heading,
  StatusBar,
  FormControl,
  Input,
  Button,
  Center,
} from "native-base";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#5521C2"
        barStyle="light-content"
      />
      <Box flex={1} safeAreaTop bg="white" justifyContent={"flex-start"}>
        
        <HStack
          bg={"#5521C2"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          w={"full"}
        >
          <Pressable padding={5}>
            <FontAwesome5
              name="arrow-alt-circle-left"
              size={24}
              color={"white"}
            />
          </Pressable>

          <Heading color="white" paddingY={5} bold fontSize={24}>
            Reset Password
          </Heading>
        </HStack>
 
        <VStack paddingX={5} space={5} pt="20%">
          <FormControl>
         

            <Center w="full" marginBottom={4} >
            <Center w={24} marginBottom={10} h={24} rounded={100} bg="#0001">
                <MaterialCommunityIcons 
                name="form-textbox-password" 
                size={54}
                color="black"
                />

            </Center>
            </Center>
            <FormControl.Label paddingY={2}>
              <Text fontSize={17} fontWeight={600}>
                Enter New Password
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
           <FormControl.Label paddingY={2} paddingTop={8}>
              <Text fontSize={17} fontWeight={600}>
                Confirm Password
              </Text>
            </FormControl.Label>

            <Input
              variant="filled"
              type={show2 ? "text" : "password"}
              padding={3}
              _focus={{
                bg: "purple.50",
                borderBottomWidth: 2,
                borderWidth: 0,
                borderColor: "#5521C2",
              }}
              InputRightElement={
                <Pressable paddingX={2} onPress={() => setShow2(!show2)}>
                  <MaterialIcons
                    name={show2 ? "visibility" : "visibility-off"}
                    size={24}
                    color="black"
                  />
                </Pressable>
              }
              placeholder="********"
              color="black"
              fontSize={17}
              value={confirm_password}
              onChangeText={(e) => setConfirm_password(e)}
              borderBottomColor="#0B0464"
            />
              </FormControl>

        
        </VStack>
        <Box w={'full'} position={'absolute'}
            bottom={0}>

        
        <Button
            // onPress={loginfn}
            _pressed={{
              bg: "#0009",
            }}
            marginX={10}
            marginY={10}
            rounded={10}
            bg="black"
          >
            <Text marginY={1} color="white" bold fontSize={20}>
              Continue
            </Text>
          </Button>
          </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
