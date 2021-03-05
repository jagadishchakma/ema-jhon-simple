import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';
const ProductDetail = () => {
         const {ProductKey} =  useParams();
         const {name, img, seller, price, stock} = fakeData.find((ele) => ele.key === ProductKey);
          return (
                    <div>
                              <div className="product">
                                        <div className="image">
                                        <img src={img} alt=""/>
                                        </div>
                                        <div className="info">
                                        <h3 className="p-name">{name}</h3>
                                        <p>By: <small>{seller}</small></p>
                                        <p>Price: ${price}</p>
                                        <p>Only: {stock} left in stock - order now</p>
                                        </div>
                              </div>
                    </div>
          );
};

export default ProductDetail;