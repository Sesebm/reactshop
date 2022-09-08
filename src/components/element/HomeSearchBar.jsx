import React from 'react'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const HomeSearchBar = () => {

        /* const handleClick = () => al hacerclick */
      
        return (
          <InputGroup size='md' marginTop={'5px'}>
            <Input
              pr='4.5rem'
              type={`text`}
              placeholder='What are you looking for?'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' >
                {'Search'}
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      
}

export default HomeSearchBar