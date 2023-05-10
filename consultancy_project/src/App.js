import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer'
import Product from './components/Products'
// import ProductList from './components/ProductList'
 import Rating from './components/Rating';
import Register from './components/Register';
 import Login from './components/Login';
import ContactForm from './components/Contact';
import Admin from './components/Admin';
//import Footer from './components/Footer'

const App = () => {
  return (
    
    <Router>
      <div className='max-w-[1440px] mx-auto bg-white'>
    <Header/>
    {/* <Register/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path ='/adminadd' element={<Admin/>}></Route>
      <Route path='/contact' element={<ContactForm/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes> 
    <Footer/>
  </div>
  </Router>
  );
  
};

export default App;


