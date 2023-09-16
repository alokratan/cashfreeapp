
import { Box, Text,Pressable } from 'native-base'
import React from 'react'

const HomeBottom2 = ({navigation}) => {
  // const continefn=()=>{
  //   console.log("naviagtion to remitter 2 screen")
  //   navigation.navigate('homebottom2');
  //       }
  return (
  <Box flex={1} bg="white" justifyContent="center"  alignItems="center">
      <Text fontSize={30} bold > WELCOME HOME2</Text>
      <Pressable bg="#5521C2" onPress={()=>navigation.navigate('homebottom')} paddingY={3} paddingX={20}>
        <Text fontSize={18} color="white" >
           MONEY 2
        </Text>
      </Pressable>
    </Box>
  )
}

export default HomeBottom2

