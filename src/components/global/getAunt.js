import { useSelector } from 'react-redux';


const token = useSelector(state => state.token)
const getAunt = () => ({
  
    headers: {
      Authorization: `Bearer ${token}`
    }
    
  })
  
  export default getAunt

