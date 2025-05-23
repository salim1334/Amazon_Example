import { Rating } from '@mui/material';
import styles from './ProductCard.module.css';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

function ProductCard({ product: { image, title, price, rating } }) {
  return (
    <div className={styles.product_container}>
      <a href="/">
        <div className={styles.product_image_container}>
          <img src={image} alt="" className={styles.product_image} />
        </div>
      </a>

      <div className={`${styles.product_name} limit_text_to_2_lines`}>
        {title}
      </div>

      <div className={styles.product_rating_container}>
        <Rating value={rating.rate} precision={0.1} />

        <div
          className={`${styles.product_rating_count} ${styles.link_primary}`}
        >
          {rating.count}
        </div>
      </div>

      <div className={styles.product_price}>
        <CurrencyFormat amount={price} />
      </div>

      <div className={styles.product_quantity_container}>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className={styles.product_spacer}></div>

      <div className={styles.added_to_cart}>
        <img src="" alt="" />
      </div>

      <button className={`${styles.add_to_cart_button}  button_primary`}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard