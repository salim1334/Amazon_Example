import { useEffect, useState } from 'react';
import styles from './Product.module.css';
import axios from 'axios';
import ProductCard from './ProductCard';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => { 
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <section className={styles.product__container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}

export default Product