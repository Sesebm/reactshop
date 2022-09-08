import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import Protected from './components/Protected'
import Purchases from './components/Purchases'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

 

  return (
    <div>
    <ChakraProvider>
    <HashRouter>
    
    <Header/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
	      <Route path="/Products/:id" element={<Products />} />

      </Routes>
      <Footer/>
    </HashRouter>
    </ChakraProvider>
    </div>
  )
}

export default App
