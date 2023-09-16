import {  Box,HStack,Heading,ScrollView,Text, VStack } from 'native-base'
import React ,{useState} from 'react'
import trans from '../../trans.json'
const Recipient = () => {
  const [data,setData]=useState(trans);
  return (
    <Box flex={1} bg="white" safeAreaTop paddingBottom={20} paddingTop={6}  paddingX={4} > 
      
<ScrollView>
{
  data.map((e)=>(
<Box rounded={10} marginY={1} w="100%" bg={'purple.100'} justifyContent={"center"}  h={20} >
<HStack   paddingX={4} justifyContent={"space-between"}   >
  <VStack>
  <Heading fontSize={19}>
    Transaction {e.transaction}
  </Heading>
  <Text>
  {e.date}
  </Text>
</VStack>
  <Text fontSize={23} bold  color={'green.600'}>{e.amount}</Text>
</HStack>
  </Box>

  ))
}
  
</ScrollView>
    </Box>
  )
}

export default Recipient