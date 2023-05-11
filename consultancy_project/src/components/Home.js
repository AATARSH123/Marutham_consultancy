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
    <Rating/>
    <br></br>
    <br></br>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62655.37627388419!2d76.91870783880962!3d11.041549660091412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fa37fede13%3A0x68395c315480220d!2sMarutham%20Bio%20AgeS%20Innovations%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1683711504837!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br></br><br></br>
    {/* <ContactForm/>
    <Admin/> */}
    {/* <ShoppingCart/> */}
    
  </div>);
};

export default Home;