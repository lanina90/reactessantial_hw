import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from './Product.module.scss'
import {Link} from "react-router-dom";

window.addEventListener('DOMContentLoaded', function() {
  let titleElements = document.getElementsByClassName('name');
  for (let i = 0; i < titleElements.length; i++) {
    let words = titleElements[i].textContent.trim().split(' ');
    if (words.length > 5) {
      titleElements[i].textContent = words.slice(0, 5).join(' ') + '...';
    }
  }

  let descElements = document.getElementsByClassName('description');
  for (let i = 0; i < descElements.length; i++) {
    let words2 = descElements[i].textContent.trim().split(' ');
    if (words2.length > 15) {
      descElements[i].textContent = words2.slice(0, 15).join(' ') + '...';
    }
  }
});
const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=10')
      .then(res => setProducts(res.data))
  }, [])
  return (
    <div>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.product}>
      {products.map(product =>
        <div key={product.id} className={styles.product__item}>
          <img src={product.image} alt=""/>
         <div className={styles.productName}>
           <h2 className={styles.name}>{product.title}</h2>
         </div>
         <div className={styles.productDesc}>
           <p className={styles.description}>{product.description}</p>
         </div>
          <p className={styles.price}>{product.price} $ <Link to={`/product/${product.id}`}>Read more...</Link></p>

        </div>
      )}
    </div>
    </div>
  );
};

export default Products;