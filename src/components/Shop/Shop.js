import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import {Link} from 'react-router-dom';
const Shop = () => {
     const data  = fakeData.slice(0, 10);
     const [products] = useState(data);
     const [addProducts, setAddProducts] = useState([]);
     useEffect(() => {
               const data = getDatabaseCart();
               const productKeys = Object.keys(data);
               const cartProducts = productKeys.map((key) => {
                         const product = fakeData.find(pd => pd.key === key);
                         product.quantity = data[key];
                         return product;
               });
               setAddProducts(cartProducts);
     }, []);

     const addProduct = (product) => {
          const toBeAddedKy = product.key;
          const sameProduct = addProducts.find(pd => pd.key === toBeAddedKy);
          let count = 1;
          let newCart;
          if(sameProduct){
               count = sameProduct.quantity +1;
               sameProduct.quantity = count;
               const others = addProducts.filter(pd => pd.key !== toBeAddedKy);
               newCart = [...others, sameProduct];
          }else{
               product.quantity =1;
               newCart = [...addProducts, product];
          }
          setAddProducts(newCart);
           addToDatabaseCart(product.key, count);
     //     const newAddProducts = [...addProducts, product];
     //     setAddProducts(newAddProducts);
     //     const newProduct = newAddProducts.filter(pd => pd.key === product.key);
     //     const count = newProduct.length;
     //     addToDatabaseCart(product.key, count);
     }
     return (
          <div className="shop">
               <div className="products">
                   {products.map(product => <Product product={product} key={product.key} addProduct={addProduct}></Product>)}
               </div>
               <div className="shoping-cart">
                    <Cart addProducts={addProducts}>
                         <Link to="/review">
                              <button className="review-order">Review Order</button>
                         </Link>
                    </Cart>
               </div>
          </div>
     );
};

export default Shop;