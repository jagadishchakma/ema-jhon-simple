import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const product =  props.product;
    const {name, img, seller, price, stock, key} = product;
    const addProduct = props.addProduct;
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="info">
                <h3 className="p-name"><Link to={'/Product/' + key}>{name}</Link> </h3>
                <p>By: <small>{seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only: {stock} left in stock - order now</p>
                <button className="add-to-cart" onClick={() => addProduct(product)}> <i className="icon"><FontAwesomeIcon icon={faCartPlus}/></i> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;