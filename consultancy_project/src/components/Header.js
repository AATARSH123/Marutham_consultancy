import React from 'react';
import Register  from './Register';

import {Link} from 'react-router-dom'
import Logo from '../assests/logo.png'
import {BsFillCartCheckFill} from 'react-icons/bs'
const Header = () => {
  return (
  <header className='py-6 mb-12 border-b'>
    <div className='container mx-auto flex justify-between items-center'>
       <Link to='/'>
          <img src={Logo} alt='' class="w-15 h-12"/>
        </Link> 
        <div className='flex items-center gap-6'>

          <Link  className='hover:text-violet-900 transition' to=''>Products</Link>

          <Link className='hover:text-violet-900 transition' to=''>Manual</Link>
          <Link className='hover:text-violet-900 transition' to='./Register'>Register/Login</Link>
          <Link className='hover:text-violet-900 transition' to=''><BsFillCartCheckFill/></Link>
      
          {/* <Link className='hover:text-violet-900 transition' to='./Login'>Login</Link> */}

        
          
        </div>
    </div>
  </header>);
};

export default Header;
