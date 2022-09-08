import React, { useState } from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormControl,
  FormLabel,
  InputGroup,
  HStack,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import axios from 'axios';
import tokenSlice from "../store/token.slice";
import { useDispatch } from "react-redux";
import { setToken } from '../store/token.slice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Login = () => {

  const [tab, setTab] = useState(1)
  
  const handleTab2= () => {
    setTab(2)
    console.log(tab)
    }
    const handleTab1= () => {
      setTab(1)
      console.log(tab)
      }
  const token = useSelector(state => state.token)
  const navigate = useNavigate();
  if(token!=0){
console.log('logged')
navigate("/")
  }
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: (values) => {
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', values)
    .then(res => dispatch(setToken(res.data.data.token)) )
    ;
     
    },
  });

  return (
  
  <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab onClick={handleTab1}>Login</Tab>
          <Tab onClick={handleTab2}>Create New User</Tab>
        </TabList>
        <TabPanels>
          //aca va lo de 1
          <TabPanel>
            <Flex
              minH={"80vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our cool{" "}
                    <Link color={"blue.400"}>Products</Link> ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <form onSubmit={formik.handleSubmit}>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                      </FormControl>
<br />
                      <Stack spacing={10}>
                        <Button
                        type='submit'
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                        >
                          Sign in
                        </Button>
                      </Stack>
                    </form>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </TabPanel>
          // aca va lo de 2
          <TabPanel >
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"} textAlign={"center"} >
                    Sign up
                  </Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our cool products ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName">
                          <FormLabel>Last Name</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input type={showPassword ? "text" : "password"} />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Sign up
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Already a user? <Link color={"blue.400"}>Login</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Login;
