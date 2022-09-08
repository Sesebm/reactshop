import React from 'react'

const Protected = () => {
  if(true){
    return <Outlet />
} else { 
    return <Navigate to='/login' />
}    
}

export default Protected