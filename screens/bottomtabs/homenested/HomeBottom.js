
import { Box, Text,Pressable, Image } from 'native-base'
import React from 'react'

const HomeBottom = ({navigation}) => {
//     const continefn=()=>{
// console.log("naviagtion to remitter screen")
//     }
  return (
  <Box flex={1} bg="white" justifyContent="center"  alignItems="center">
     <Image
     source={require('../../../assets/sendmon.png')}
     resizeMode='contain'
     w={'100%'}
     h={'30%'}
     alt='logo'
     />
      <Pressable marginY={5} bg="#5521C2" w={'60%'} justifyContent={"center"} alignItems={"center"} onPress={()=>navigation.navigate('remitter')} paddingY={3} >
        <Text fontSize={18} color="white" >
          SEND
        </Text>
      </Pressable>
      <Pressable bg="#5521C2" w={'60%'} justifyContent={"center"} alignItems={"center"}  onPress={()=>navigation.navigate('remitter')} paddingY={3} >
        <Text fontSize={18} color="white" >
          RECEIVE
         
        </Text>
      </Pressable>
    </Box>
  )
}

export default HomeBottom

