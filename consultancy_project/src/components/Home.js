import React from 'react';
import Banner from '../components/Banner'
import About from './About';
import Product from './Products'
 import Rating from './Rating';
import ContactForm from './Contact';
import Admin from './Admin';
import ShoppingCart from './ShoppingCart';


function Home()  {
  return( <div>
    <Banner/>
    <About/>
    {/* <Rating/> */}
    <Product/>
    {/* <ContactForm/>
    <Admin/> */}
    {/* <ShoppingCart/> */}
    
  </div>);
};

export default Home;