import  { useState } from 'react'
import {Container,Form,Button} from "react-bootstrap";
import '../styles/SignUp.css'
import {Link} from "react-router-dom";
import axios from "axios";
import API_URL from '../../config/global';



const SignUp = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    }) 
    //const navigate=useNavigate()

    const handleChange =  (e)=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value})
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(formData);

      try {
      const response=await axios.post(`${API_URL}/signup/verify`,formData)

      console.log(response);
      if(response.data===true){
        alert("Registration link send to your email")
      }
      else if(response.data===false){
        alert("user already exists")
      }

      } catch (error) {
        console.error("error during registraion")
        
      }

    }

  return (
    <div>
    <Container>
     <h1>Registration</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Label> Name</Form.Label>
        <Form.Control 
        type="text" 
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
        value={formData.name}
        required/>
      </Form.Group>

      <Form.Group  >
        <Form.Label> Email</Form.Label>
        <Form.Control 
        type="email" 
        value={formData.email} 
        name="email"
        onChange={handleChange} 
        placeholder="Enter email"
        required/>
      </Form.Group>


      <Form.Group  >
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={formData.password}
        name="password" 
        onChange={handleChange}  required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
      <p>Allready have an account<Link to ='login'>Login</Link></p>      
    </Form>
    </Container>
    </div>
  )
}

export default SignUp