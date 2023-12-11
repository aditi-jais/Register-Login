import './App.css';
import React from 'react';
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    
  );





  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');
  // const [registeredUser, setRegisteredUser] = useState(null);

  // const validateRegistration = (event) => {
  //   event.preventDefault();

  //   console.log('Validating registration...');

  //   if (username.length < 3 || username.length > 15) {
  //     alert('Username must be between 3 and 15 characters');
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     alert('Please enter a valid email address');
  //     return;
  //   }

  //   if (password.length < 8 || password.length > 20) {
  //     alert('Password must be between 8 and 20 characters');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert('Password does not match');
  //     return;
  //   }

  //   alert('Registration successful!');

  //   const userInfo = {
  //     username,
  //     email,
  //     password,
  //   };

  //   localStorage.setItem('registeredUser', JSON.stringify(userInfo));
  //   console.log('Registered User Information:', userInfo);
  //   setRegisteredUser(userInfo);



  // };

  // const validateLogin = (event) => {
  //   event.preventDefault();

  //   console.log('Validating login...');

  //   const storedUserInfo = localStorage.getItem('registeredUser');

  //   if (!storedUserInfo) {
  //     alert('No registered user found. Please register first.');
  //     return;
  //   }

  //   const userInfo = JSON.parse(storedUserInfo);

  //   if (loginEmail !== userInfo.email || loginPassword !== userInfo.password) {
  //     alert('Invalid email or password');
  //     return;
  //   }

  //   alert('Welcome ' + userInfo.username);
  // };



  
}

export default App;
