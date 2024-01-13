import  { useState } from 'react'
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Login.css'
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import API_URL from '../../config/global';



const Login = () => {

const [formData,setFormData]=useState({
                     email:"",
                     password:""        })
const navigate=useNavigate();

  const handleChange =  (e)=>{
  const {name,value}=e.target;
  setFormData({...formData,[name]:value})
}

const handleSubmit =  async(e)=>{
  e.preventDefault();
  const response=await axios.post(`${API_URL}/login`,formData)
  if (response.data==="invalid user name or password"){
    alert("Invalid username or password");
  }
  else if(response.data==="server  router busy"){
    alert("Verify your email ID")
  }
  else if(response?.status){
    localStorage.setItem("userinfo",JSON.stringify(response.data));
    navigate("/home")
  }
  console.log(response);
}

//const navigate=useNavigate()

  return (
    <div>
    <Container>
     <h1>Login  </h1>
    <Form onSubmit={handleSubmit}>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email</Form.Label>
        <Form.Control
         type="email" 
         value={formData.email}
         name="email" 
         onChange={handleChange}
          placeholder="Enter email" 
          required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         type="password"
         value={formData.password}
         name="password"
         onChange={handleChange} 
         placeholder="Enter password" 
         required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>Do not have an account ? <Link to ='/'>Register Now</Link> 
      </p>



    </Form>

    </Container>

    </div>
  )
}

export default Login