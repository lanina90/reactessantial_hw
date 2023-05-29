import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import styles from "./Products/Product.module.scss";

const ProductPage = () => {
  const {id} = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/' + id)
      .then(res => setItem(res.data))
  }, [])
  console.log(item);
  if (!item) {
    return <>Loading....</>
  }
  return (
    <div>
      <div className={styles.product}>
          <div className={styles.product__item}>
            <img src={item.image} alt=""/>
            <div className={styles.productName}>
              <h2 className={styles.name}>{item.title}</h2>
            </div>
            <div className={styles.productDesc}>
              <p className={styles.description}>{item.description}</p>
            </div>
            <p className={styles.price}>{item.price} $</p>
          </div>
      </div>
    </div>
  );
};

export default ProductPage;