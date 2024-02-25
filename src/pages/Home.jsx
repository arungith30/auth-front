
import  { useState,useEffect } from 'react'
import {Container,Button} from "react-bootstrap";
import axios from "axios";
import API_URL from '../../config/global';

const Home = () => {
  const [res,setRes]=useState({})

useEffect(()=>{
  const user =JSON.parse(localStorage.getItem("userInfo"))
  if (user && user.token){
    getData(user.token)
  }
},[])

 const getData = async(token)=>{
try {
const config={
  headers:{
    Authorization:token
  }
}


const response=await axios.get(`${API_URL}/home`,config);
console.log(response)
if (response.data==="invalid token"){
  alert("login again");
}
else if(response.data==="Server Busy"){
  alert("Unauthosized access");
}
else if(response?.status){
  console.log(response.data.loginCredentials)
setRes(response.data)
}
  
} catch (error) {
  console.log(error)
}


}

  return (
    <Container> 
        <h1> Welcome </h1>
        <p>we are here to help you</p>
        <h3>{res.name}</h3>
        <Button variant="primary" type="submit">
        Get started
        
      </Button>
    </Container>
  )
}

export default Home