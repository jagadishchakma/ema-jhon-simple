import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
const Review = () => {
          const [cart, setCart] = useState([]);
          const [placeOrder, setPlaceOrder] = useState(false);
          const productPlaceOrder = () => {
              setCart([]);
              setPlaceOrder(true);
              processOrder();
          }
          const removeProduct = (productKy) => {
               const newCart = cart.filter((product) => product.key !== productKy);
               setCart(newCart);
               removeFromDatabaseCart(productKy);
          }
          useEffect(() => {
                    const data = getDatabaseCart();
                    const productKeys = Object.keys(data);
                    const cartProducts = productKeys.map((key) => {
                              const product = fakeData.find(pd => pd.key === key);
                              product.quantity = data[key];
                              return product;
                    });
                    setCart(cartProducts);
          }, []);
          let  thankYou;
          if(placeOrder){
              thankYou = <img src={happyImage} alt=""/>;
          }else if(cart.length == 0){
              thankYou = <h1 style={{color: 'red'}}>No Proccess Order Now!</h1>
          }
          return (
               <div className="cart-container">
                   <div className="order-product">
                        {
                         cart.map(product => <ReviewItem product={product} key={product.key} removeProduct={removeProduct}></ReviewItem>)
                         }
                         {
                             thankYou
                         }
                   </div>
                   <div className="order-summary">
                       <Cart addProducts ={cart}>
                                <button className="review-order" onClick={productPlaceOrder}>Place Order</button>
                       </Cart>
                   </div>
               </div>
          );
};

export default Review;