import { useParams } from 'react-router-dom';
import LayOut from '../../components/LayOut/LayOut';
import styles from './ProductDetail.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => { 
    axios
      .get(`${productUrl}/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(err => console.error(`Error on fetching product ${err}`))
  }, []);

  return (
    <LayOut>
      <div className={styles.product_detail_header}>
        <h1>Product Detail</h1>
      </div>
      <div className={styles.productDetailContainer}>
        <ProductCard product={product} detail={true} />
      </div>
    </LayOut>
  );
}

export default ProductDetail