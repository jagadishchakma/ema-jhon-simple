import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import './Cart.css';
const Cart = (props) => {
     const addProducts = props.addProducts;
     const totalPrice = Number(addProducts.reduce((prev, next) => prev + next.price * next.quantity, 0).toFixed());
     debugger;
     let shiping = 0;
     if(totalPrice > 50){
          shiping = 30;
     }else if(totalPrice < 50 && 1 < totalPrice){
          shiping =  40;
     }
     let tax = Number((totalPrice / 10).toFixed());
     const netCost = totalPrice + shiping + tax;
     return (
          <div>
               <h1 className="shopping-bag">Shopping <i className="bag"><FontAwesomeIcon icon={faShoppingBag}/> <span className="products-count">{addProducts.length}</span></i></h1>
               <h2>Order Summary: {addProducts.length}</h2>
               <h2>Total Price: ${totalPrice}</h2>
               <h2>Shiping Cost: ${shiping}</h2>
               <h2>Tax Cost: ${tax}</h2>
               <hr/>
               <h2>Net Cost: ${netCost}</h2>
               {
                    props.children
               }
          </div>
     );
};

export default Cart;