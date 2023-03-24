import React from 'react';
import Banner from '../components/Banner'
import About from './About';
import Product from './Products'
 import Rating from './Rating';


function Home()  {
  return( <div>
    <Banner/>
    <About/>
    {/* <Rating/> */}
    <Product/>
  </div>);
};

export default Home;