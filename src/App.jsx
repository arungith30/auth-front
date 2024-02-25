import './App.css';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route,  } from "react-router-dom";
function App() {
 
  return (
    <>
     <Routes>
        
      <Route exact path='/' element={<SignUp/>} />
      <Route path="/login"element= { <Login />}/>
      <Route path="/home"element= { <Home/>}/>
      </Routes>
    </>
  )
}

export default App
