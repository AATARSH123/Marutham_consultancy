import React, { useEffect, useState } from "react";
import { ImPriceTag } from 'react-icons/im';
import { FcAbout } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
import CartPopup from "./Cart";

const Products = () => {

  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:7000/api/v1/products");
      const data = await response.json();
      setproduct(data.data["Products"]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  useEffect(() => {
    const items = localStorage.getItem('cartItems');

    if (items) {
      
      const cartItems = JSON.parse(items);
      setCartItems(cartItems);
      // continue processing cartItems data
    } else {
      // handle empty or null data
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function handleAddToCart(product) {
    const existingItem = cartItems.find(item => item._id === product._id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveFromCart(item) {
    const updatedCartItems = cartItems.filter(cartItem => cartItem._id !== item._id);
    setCartItems(updatedCartItems);
  }

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>
      {product.length > 0 && (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}}>
          {product.map(product => (
            <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition' key={product._id}>
              <img className='mb-8' src={product.image} alt='' style={{width:"fit-content"}}></img>
              <div className='mb-4 flex-gap-x-2 text-sm'>
                <div>{product.name}</div>
              </div>
              <div className='flex gap-x-4 my-4'></div>
              <div className='flex items-center gap-1'>
                <div>
                  <ImPriceTag/>
                </div>
                <div>{product.cost}</div>
              </div>
              <div className='flex items-center gap-1'>
                <div>
                  <FcAbout/>
                </div>
                <div>{product.shortDescription}</div>
              </div>
              <br></br>
              <div style={{"textAlign":"center","color":"red"}}>
                <Link to={`/manual/${product._id}`}>Manual (Full details)</Link>
                <div>
                  <MDBBtn className='me-1' onClick={() => handleAddToCart(product)}>Add to cart</MDBBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ textAlign: "center" }}>
       <Link to="/cart">
<MDBBtn outline color='primary' size='lg'>View Cart</MDBBtn>
</Link>
</div>
</div>
);
}

export default Products;
