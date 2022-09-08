import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';

const ProductsCard = ({products}) => {

 const IMAGE = products.productImgs[0]
 const IMAGE2 = products.productImgs[2]
 const navigate = useNavigate();
 
 const handleClick = ()=> navigate(`/Products/`+ products.id)

    return (
     <Center py={12} onClick={handleClick} >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .5s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            background: `url(${IMAGE2})`,
            backgroundSize: `contain`,
            backgroundRepeat: `no-repeat`,
            filter: 'blur(0px)',
            zIndex: -1,
            backgroundPosition: `center`,
            opacity: 0,
          }}
          _groupHover={{
            _after: {
                opacity: 1,
              filter: 'blur(0px)',
            
            },
          }}>
          
          <Image
          transition={`all .6s ease`}
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={IMAGE}
            opacity={1}
            
            _groupHover={{
                opacity: 0,
                }}
          />

        </Box>


        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {products.category.name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {products.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $ {products.price}
            </Text>
            
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default ProductsCard