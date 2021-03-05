import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
     const {name, quantity, key, img, price} = props.product;
     return (
          <div className="review-item">
               <div className="image">
                    <img src={img} alt=""/>
               </div>
               <div className="info">
                    <h4>{name}</h4>
                    <h2>Price: ${price}</h2>
                    <h2>Quantity: {quantity}</h2>
                    <button className="remove" onClick={() => props.removeProduct(key)}>Remove</button>
               </div>
          </div>
     );
};

export default ReviewItem;