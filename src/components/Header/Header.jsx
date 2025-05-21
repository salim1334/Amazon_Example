import styles from './Header.module.css';

import logo from '../../assets/pngimg.com - amazon_PNG11.png';
import { SlLocationPin } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
import cartIcon from '../../assets/cart-icon.png';
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
      <nav>
        <div className={styles.header__container}>
          <div className={styles.logo__container}>
            <div className={styles.logo__wrapper}>
              <a href="/">
                <img src={logo} alt="logo" className={styles.logo} />
              </a>
            </div>

            <div className={styles.delivery}>
              <SlLocationPin className={styles.icon} />
              <div>
                <p className={styles.label}>Delivery to</p>
                <span className={styles.location}>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={styles.search}>
            <select
              name="category"
              className={`${styles.search__select} no-style`}
            >
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon"
              className={`${styles.search__input} no-style`}
            />

            <button className={`${styles.search__button} no-style`}>
              <BsSearch size={20} />
            </button>
          </div>

          <div className={styles.order__container}>
            <a href="/" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_State.svg.png"
                alt="US Flag"
                className={styles.flag}
              />

              <select className={`${styles.language__select} no-style`}>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </a>

            <a href="/" className={styles.account}>
              <p className={styles.label}>Hello, sign in</p>
              <span className={styles.bold}>Account & Lists</span>
            </a>

            <a href="/" className={styles.orders}>
              <p className={styles.label}>Returns</p>
              <span className={styles.bold}>& Orders</span>
            </a>

            <a href="/" className={styles.cart}>
              <img
                src={cartIcon}
                alt="cart icon"
                className={styles.icon}
                width="40px"
              />
              <span className={styles.cart__count}>0</span>
              <span className={styles.cart__label}>Cart</span>
            </a>
          </div>
        </div>
      </nav>
      <LowerHeader />
    </>
  );
}

export default Header;
