//import logo from './logo.svg';

import './App.css';
import React from 'react'

import Login1 from './login1';
import Register from './register';
function App() {
  const[registerval,setregisterval]=React.useState(true);
  const isLogin=()=>{
    setregisterval(false);
  }
  return (
    
    <>
   
    {registerval?<Register isLogin={isLogin}/>:<Login1/>}
    </>
  );
}
export default App;
