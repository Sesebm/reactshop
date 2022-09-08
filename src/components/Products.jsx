import React, { useState } from 'react'
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductsCarousel from './element/ProductsCarousel';
import { AiOutlineMinus, AiOutlinePlus,AiOutlineShopping } from "react-icons/ai";


const Products = () => {

  const token = useSelector(state => state.token)
  const getAunt = () => ({
    
      headers: {
        Authorization: `Bearer ${token}`
      }
      
    })

const { id } = useParams();
const [counter, setCounter] = useState(1)
const productnow = useSelector(state => state.products[id-1])



const handlerPlus= () =>{
  setCounter(counter+1)
}
const handlerMinus= () =>{
  if(counter>2)
  setCounter(counter-1)
}
const handleAddCart= () => {

  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: id,
      quantity: counter
    }
    axios.post(URL, obj, getAunt())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
}


  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            {productnow.category.name}
          </Text>
          <Heading>{productnow.title}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          {productnow.description}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>

           
            <div>
            <Stack direction='row' spacing={4}>
  
 <Button leftIcon={<AiOutlineMinus />} colorScheme='red' variant='solid' onClick={handlerMinus}>
    Remove
  </Button>
  <Button colorScheme='gray' cursor='default'>{counter}</Button>
<Button leftIcon={<AiOutlinePlus />} colorScheme='blue' variant='solid' onClick={handlerPlus}>
    Add
  </Button>
 
  </Stack>
            </div>
            <div>
            <Stack maxWidth='278px'>
            <Button leftIcon={<AiOutlineShopping />} colorScheme='blue' variant='solid' onClick={handleAddCart}>
    Add to cart
  </Button></Stack>
            </div>

          </Stack>
        </Stack>
        <Flex>
         
         
          <ProductsCarousel imagen={productnow.productImgs}/>


        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Products